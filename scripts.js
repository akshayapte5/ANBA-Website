// Initialize Feather Icons
feather.replace();

// Custom Cursor Logic
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (!isMobile) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Hover effects on interactive elements
    const attachCursorEvents = (elements) => {
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        attachCursorEvents(document.querySelectorAll('a, button, .parallax-container, .btn-bracket, input, textarea'));
    });
    
    // Export globally for dynamic elements
    window.attachCursorEvents = attachCursorEvents;
} else {
    window.attachCursorEvents = () => {};
}

// Advanced Reveal and Parallax logic
function handleScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Normal Reveals and Text Masks
    const reveals = document.querySelectorAll(".reveal, .reveal-text, .fade-reveal");
    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < windowHeight - 50) {
            el.classList.add("active");
        }
    });

    // Parallax Images
    const parallaxImages = document.querySelectorAll('.parallax-image');
    parallaxImages.forEach(img => {
        const container = img.parentElement;
        const rect = container.getBoundingClientRect();
        
        // If image is in viewport
        if(rect.top < windowHeight && rect.bottom > 0) {
            // Calculate progress (0 to 1) 
            const progress = 1 - (rect.bottom / (windowHeight + rect.height));
            // Move sharply from -15% to 15% Y axis translation to produce a dramatic window effect
            const yMove = -15 + (progress * 30);
            
            img.style.transform = `translateY(${yMove}%) scale(1.2)`;
        }
    });

    // Glass Nav logic
    const nav = document.getElementById('navbar');
    if(nav) {
        if (scrollY > 50) {
            nav.classList.add('bg-odd-white/90', 'backdrop-blur-md', 'shadow-sm', 'border-b', 'border-odd-border');
            nav.classList.remove('bg-transparent', 'border-transparent');
        } else {
            nav.classList.remove('bg-odd-white/90', 'shadow-sm', 'border-b', 'border-odd-border');
            nav.classList.add('bg-transparent', 'border-transparent');
        }
    }
}

window.addEventListener("scroll", handleScroll);

// Run on DOM Content Loaded
// Global Modal Handlers
window.openGlobalModal = function(type) {
    const modal = document.getElementById('global-modal');
    const content = document.getElementById('modal-content');
    const title = document.getElementById('modal-title');
    const container = document.getElementById('modal-container');
    
    if (modal && content && title && window.GlobalContent && window.GlobalContent.legalText) {
        if (type === 'privacy') {
            title.textContent = 'Privacy Policy';
            content.innerHTML = window.GlobalContent.legalText.privacy;
        } else if (type === 'terms') {
            title.textContent = 'Terms of Service';
            content.innerHTML = window.GlobalContent.legalText.terms;
        }
        
        modal.classList.remove('hidden');
        void modal.offsetWidth; // trigger reflow
        modal.classList.remove('opacity-0');
        modal.classList.add('pointer-events-auto');
        modal.classList.remove('pointer-events-none');
        container.classList.remove('scale-95');
        container.classList.add('scale-100');
        
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
};

window.closeGlobalModal = function() {
    const modal = document.getElementById('global-modal');
    const container = document.getElementById('modal-container');
    
    if (modal && container) {
        modal.classList.add('opacity-0');
        modal.classList.remove('pointer-events-auto');
        modal.classList.add('pointer-events-none');
        container.classList.remove('scale-100');
        container.classList.add('scale-95');
        
        setTimeout(() => {
            modal.classList.add('hidden');
            document.body.style.overflow = '';
            document.body.classList.remove('modal-open');
        }, 500); 
    }
};

document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Toggle Logic (Elements injected by content-loader.js)
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarMenu.classList.remove('hidden');
            sidebarOverlay.classList.remove('hidden');
            void sidebarMenu.offsetWidth; // Reflow
            sidebarMenu.classList.remove('translate-x-full');
            sidebarOverlay.classList.remove('opacity-0', 'pointer-events-none');
            document.body.style.overflow = 'hidden';
        });
    });

    const closeSidebar = () => {
        sidebarMenu.classList.add('translate-x-full');
        sidebarOverlay.classList.add('opacity-0', 'pointer-events-none');
        document.body.style.overflow = '';
        setTimeout(() => {
            sidebarMenu.classList.add('hidden');
            sidebarOverlay.classList.add('hidden');
        }, 500);
    };

    const closeMenuBtn = document.getElementById('close-menu');
    if(closeMenuBtn) closeMenuBtn.addEventListener('click', closeSidebar);
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

    // Initial Trigger
    handleScroll();

    // Auto-Scroll Marquee for Featured Wear Grid
    const featuredGrid = document.getElementById('featured-wear-grid');
    if (featuredGrid) {
        let isPaused = false;
        let isDragging = false;
        let startX;
        let scrollLeftPos;

        // Clone children for infinite loop
        if (featuredGrid.children.length > 0) {
            const children = Array.from(featuredGrid.children);
            children.forEach(child => {
                const clone = child.cloneNode(true);
                clone.classList.remove('reveal', 'active'); // Prevent animation locks on clones
                featuredGrid.appendChild(clone);
            });
        }

        const autoScroll = () => {
            if (!isPaused && !isDragging && featuredGrid.scrollWidth > featuredGrid.clientWidth) {
                featuredGrid.scrollLeft += 0.7; 
                // Seamless reset loop math
                if (featuredGrid.scrollLeft >= featuredGrid.scrollWidth / 2) {
                    featuredGrid.scrollLeft -= featuredGrid.scrollWidth / 2;
                }
            }
            requestAnimationFrame(autoScroll);
        };
        // Delay immediate start slightly to allow image paints
        setTimeout(() => autoScroll(), 500);

        // Mouse interaction logic
        featuredGrid.addEventListener('mouseenter', () => isPaused = true);
        featuredGrid.addEventListener('mouseleave', () => {
            isPaused = false;
            isDragging = false;
        });

        featuredGrid.addEventListener('mousedown', (e) => {
            isDragging = true;
            startX = e.pageX - featuredGrid.offsetLeft;
            scrollLeftPos = featuredGrid.scrollLeft;
            featuredGrid.style.cursor = 'grabbing';
        });

        featuredGrid.addEventListener('mouseup', () => {
            isDragging = false;
            featuredGrid.style.cursor = 'grab';
        });

        featuredGrid.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - featuredGrid.offsetLeft;
            const walk = (x - startX) * 2;
            featuredGrid.scrollLeft = scrollLeftPos - walk;
        });

        // Touch Mobile interaction logic (retaining buttery native mobile scrolls)
        featuredGrid.addEventListener('touchstart', () => isPaused = true, {passive: true});
        featuredGrid.addEventListener('touchend', () => {
            setTimeout(() => isPaused = false, 1500);
        }, {passive: true});
    }

    // Hero staggering
    const heroReveals = document.querySelectorAll('.hero-section .reveal, .hero-section .reveal-text, .relative.min-h-screen .reveal');
    heroReveals.forEach((el, index) => {
        setTimeout(() => el.classList.add('active'), index * 150);
    });
    
    // FAQ Logic
    const faqItems = document.querySelectorAll('.faq-item');
    if(faqItems.length > 0) {
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                const content = item.querySelector('.faq-content');
                const icon = item.querySelector('.faq-icon');
                
                document.querySelectorAll('.faq-content').forEach(other => {
                    if (other !== content && !other.classList.contains('hidden')) {
                        other.classList.add('hidden');
                        other.previousElementSibling.querySelector('.faq-icon').style.transform = 'rotate(0deg)';
                    }
                });
                
                if (content.classList.contains('hidden')) {
                    content.classList.remove('hidden');
                    icon.style.transform = 'rotate(45deg)'; 
                } else {
                    content.classList.add('hidden');
                    icon.style.transform = 'rotate(0deg)';
                }
            });
        });
    }

    // Call feather replace one last time to capture dynamically generated icons
    feather.replace();
});
