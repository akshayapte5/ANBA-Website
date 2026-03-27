// ============================================
// ANBA After Wear — Premium Interactive Logic
// DaisyUI Edition
// ============================================

// Initialize Feather Icons
feather.replace();

// ============================================
// CUSTOM CURSOR
// ============================================
const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if (!isMobile) {
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const attachCursorEvents = (elements) => {
        elements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
        });
    };
    
    document.addEventListener('DOMContentLoaded', () => {
        attachCursorEvents(document.querySelectorAll('a, button, .parallax-container, .btn-bracket, input, textarea, .gallery-item, .insta-strip-item, .carousel-dot'));
    });
    
    window.attachCursorEvents = attachCursorEvents;
} else {
    window.attachCursorEvents = () => {};
}

// ============================================
// SCROLL REVEAL + PARALLAX + GLASS NAV
// ============================================
function handleScroll() {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    // Reveals
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
        if(rect.top < windowHeight && rect.bottom > 0) {
            const progress = 1 - (rect.bottom / (windowHeight + rect.height));
            const yMove = -15 + (progress * 30);
            img.style.transform = `translateY(${yMove}%) scale(1.2)`;
        }
    });

    // Glass Nav
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

    // Stat Counter Animation (triggers when stats scroll into view)
    const statCounters = document.querySelectorAll('.stat-counter');
    statCounters.forEach(counter => {
        if (counter.dataset.counted) return;
        const rect = counter.getBoundingClientRect();
        if (rect.top < windowHeight - 80) {
            counter.dataset.counted = 'true';
            animateCounter(counter);
        }
    });
}

window.addEventListener("scroll", handleScroll);

// ============================================
// ANIMATED STAT COUNTER
// ============================================
function animateCounter(el) {
    const target = parseInt(el.dataset.target) || 0;
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const startTime = performance.now();

    function update(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(eased * target);
        el.textContent = current + suffix;
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    requestAnimationFrame(update);
}

// ============================================
// GLOBAL MODAL HANDLERS
// ============================================
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
        void modal.offsetWidth;
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

// ============================================
// LIGHTBOX (Gallery + Instagram Strip)
// ============================================
window.openLightbox = function(imageSrc) {
    const overlay = document.getElementById('lightbox-overlay');
    const img = document.getElementById('lightbox-img');
    if (overlay && img) {
        img.src = imageSrc;
        overlay.classList.add('lightbox-active');
        document.body.style.overflow = 'hidden';
        document.body.classList.add('modal-open');
    }
};

window.closeLightbox = function() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('lightbox-active');
        document.body.style.overflow = '';
        document.body.classList.remove('modal-open');
    }
};

// Close lightbox on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeLightbox();
        window.closeGlobalModal();
    }
});

// ============================================
// CONTACT FORM TOAST
// ============================================
window.handleContactSubmit = function(e) {
    e.preventDefault();
    const toast = document.getElementById('contact-toast');
    if (toast) {
        toast.classList.add('toast-visible');
        // Reset form
        e.target.reset();
        // Auto-hide after 4s
        setTimeout(() => {
            toast.classList.remove('toast-visible');
        }, 4000);
    }
};

// ============================================
// DOMContentLoaded — Main Init
// ============================================
document.addEventListener("DOMContentLoaded", () => {
    // Sidebar Toggle
    const sidebarMenu = document.getElementById('sidebar-menu');
    const sidebarOverlay = document.getElementById('sidebar-overlay');
    
    document.querySelectorAll('.mobile-menu-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            sidebarMenu.classList.remove('hidden');
            sidebarOverlay.classList.remove('hidden');
            void sidebarMenu.offsetWidth;
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

    // ============================================
    // HERO CAROUSEL AUTO-ADVANCE
    // ============================================
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel && window.HomeContent && window.HomeContent.heroSlides) {
        const slides = heroCarousel.querySelectorAll('.carousel-item');
        const dots = document.querySelectorAll('.carousel-dot');
        let currentSlide = 0;
        const totalSlides = slides.length;

        const heroLine1 = document.getElementById('hero-line-1');
        const heroLine2 = document.getElementById('hero-line-2');
        const heroLine3 = document.getElementById('hero-line-3');
        const heroSubtitle = document.getElementById('hero-subtitle');
        const heroBtnOrig = document.getElementById('hero-btn-orig');
        const heroBtnHov = document.getElementById('hero-btn-hov');
        const heroCta = document.getElementById('hero-cta');

        function goToSlide(index) {
            slides.forEach(s => s.classList.remove('active-slide'));
            dots.forEach(d => d.classList.remove('active-dot'));
            
            slides[index].classList.add('active-slide');
            if (dots[index]) dots[index].classList.add('active-dot');

            // Update text content with crossfade
            const slideData = HomeContent.heroSlides[index];
            if (heroLine1) heroLine1.innerHTML = slideData.titleLine1;
            if (heroLine2) heroLine2.innerHTML = slideData.titleLine2;
            if (heroLine3) heroLine3.innerHTML = slideData.titleLine3;
            if (heroSubtitle) heroSubtitle.textContent = slideData.subtitle;
            if (heroBtnOrig) heroBtnOrig.textContent = slideData.buttonText;
            if (heroBtnHov) heroBtnHov.textContent = slideData.buttonText;
            if (heroCta) heroCta.href = slideData.buttonLink;

            currentSlide = index;
        }

        // Auto-advance every 5 seconds
        let autoAdvanceInterval = setInterval(() => {
            goToSlide((currentSlide + 1) % totalSlides);
        }, 5000);

        // Dot click handlers
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                clearInterval(autoAdvanceInterval);
                goToSlide(index);
                autoAdvanceInterval = setInterval(() => {
                    goToSlide((currentSlide + 1) % totalSlides);
                }, 5000);
            });
        });
    }

    // ============================================
    // FEATURED WEAR MARQUEE SCROLL
    // ============================================
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
                clone.classList.remove('reveal', 'active');
                featuredGrid.appendChild(clone);
            });
        }

        const autoScroll = () => {
            if (!isPaused && !isDragging && featuredGrid.scrollWidth > featuredGrid.clientWidth) {
                featuredGrid.scrollLeft += 0.7; 
                if (featuredGrid.scrollLeft >= featuredGrid.scrollWidth / 2) {
                    featuredGrid.scrollLeft -= featuredGrid.scrollWidth / 2;
                }
            }
            requestAnimationFrame(autoScroll);
        };
        setTimeout(() => autoScroll(), 500);

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

        featuredGrid.addEventListener('touchstart', () => isPaused = true, {passive: true});
        featuredGrid.addEventListener('touchend', () => {
            setTimeout(() => isPaused = false, 1500);
        }, {passive: true});
    }

    // ============================================
    // HERO STAGGER REVEAL
    // ============================================
    const heroReveals = document.querySelectorAll('.hero-section .reveal, .hero-section .reveal-text, .relative.min-h-screen .reveal');
    heroReveals.forEach((el, index) => {
        setTimeout(() => el.classList.add('active'), index * 150);
    });
    
    // ============================================
    // FAQ ACCORDION
    // ============================================
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

    // Final feather replace for dynamically generated icons
    feather.replace();
});
