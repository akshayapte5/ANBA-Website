/**
 * content-loader.js
 * ANBA After Wear — Premium DaisyUI Edition
 * Populates HTML skeletons with content from `content/` data files.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // ============================================
    // 1. GLOBAL CONTENT (Header & Footer INJECTION)
    // ============================================
    if (window.GlobalContent && !document.getElementById('navbar')) {
        const path = window.location.pathname;
        const isIndex = path.endsWith('index.html') || path.endsWith('/');
        let desktopLinksHTML = '';
        GlobalContent.navLinks.forEach(link => {
            const isActive = path.includes(link.url) || (isIndex && link.url === 'index.html');
            const classes = isActive ? 'text-odd-black font-bold transition-colors' : 'hover:text-odd-black transition-colors';
            desktopLinksHTML += `<a href="${link.url}" class="${classes}">${link.label}</a>`;
        });

        const navClasses = isIndex 
            ? 'fixed w-full z-50 transition-all duration-300 border-b border-transparent bg-transparent'
            : 'fixed w-full z-50 transition-all duration-300 border-b border-odd-border bg-odd-white/90 backdrop-blur-md';

        const navHTML = `
        <nav class="${navClasses}" id="navbar">
            <div class="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
                <a href="index.html" class="text-3xl font-display font-semibold tracking-tight flex items-center gap-1 text-odd-black hover:opacity-80 transition-opacity">
                    ${GlobalContent.brandName}<span class="text-odd-accent">.</span>
                </a>
                <div class="hidden md:flex items-center gap-8 text-sm font-medium text-odd-gray uppercase tracking-widest font-body">
                    ${desktopLinksHTML}
                </div>
                <div class="flex items-center gap-6">
                    <a href="${GlobalContent.navButtonLink}" target="_blank" class="hidden md:inline-flex text-xs font-bold uppercase tracking-widest text-odd-black hover:text-odd-accent transition-colors font-body">
                        ${GlobalContent.navButtonText}
                    </a>
                    <button class="mobile-menu-btn block text-odd-black transition-transform hover:scale-110">
                        <i data-feather="menu"></i>
                    </button>
                </div>
            </div>
        </nav>`;
        document.body.insertAdjacentHTML('afterbegin', navHTML);

        // Mobile Sidebar + Modal
        const globalComponentsHTML = `
        <div id="sidebar-menu" class="hidden fixed inset-y-0 right-0 w-[85vw] md:w-96 bg-odd-white/95 backdrop-blur-xl border-l border-odd-border z-[999] transform translate-x-full transition-transform duration-500 overflow-y-auto flex flex-col p-10 shadow-2xl">
            <button id="close-menu" class="self-end text-odd-black hover:text-odd-gray mb-16 transition-colors flex items-center justify-center">
                <i data-feather="x" class="w-8 h-8"></i>
            </button>
            <div class="flex flex-col gap-8 text-xl font-display font-medium text-odd-black">
                ${desktopLinksHTML}
                <a href="${GlobalContent.navButtonLink}" target="_blank" class="text-odd-white bg-odd-black rounded-none border border-odd-black text-center py-4 mt-8 hover:bg-odd-accent hover:border-odd-accent transition-colors font-bold uppercase tracking-widest text-sm font-body">${GlobalContent.navButtonText}</a>
            </div>
            <div class="mt-8 pt-8 border-t border-odd-border flex gap-4 text-odd-gray">
                <a href="${GlobalContent.socialLinks.twitter}" target="_blank"><i data-feather="twitter" class="w-5 h-5 hover:text-odd-black transition-colors"></i></a>
                <a href="${GlobalContent.socialLinks.instagram}" target="_blank"><i data-feather="instagram" class="w-5 h-5 hover:text-odd-black transition-colors"></i></a>
            </div>
        </div>
        <div id="sidebar-overlay" class="hidden fixed inset-0 bg-odd-black/20 backdrop-blur-sm z-[990] opacity-0 pointer-events-none transition-opacity duration-500"></div>
        
        <!-- Universal Global Modal -->
        <div id="global-modal" class="hidden fixed inset-0 z-[9999] flex items-center justify-center opacity-0 pointer-events-none transition-opacity duration-500">
            <div id="modal-backdrop" class="absolute inset-0 bg-odd-black/40 backdrop-blur-sm cursor-pointer" onclick="window.closeGlobalModal()"></div>
            <div class="bg-odd-white border border-odd-border relative z-10 w-[95vw] md:w-[600px] max-w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden transform scale-95 transition-transform duration-500" id="modal-container">
                <div class="flex justify-between items-center p-6 border-b border-odd-border bg-odd-white z-20 shrink-0">
                    <h3 id="modal-title" class="font-display font-semibold text-xl text-odd-black tracking-tight">Legal</h3>
                    <button onclick="window.closeGlobalModal()" class="flex items-center gap-2 text-odd-gray hover:text-odd-black transition-colors font-bold uppercase tracking-widest text-xs font-body">
                        CLOSE <i data-feather="x" class="w-5 h-5"></i>
                    </button>
                </div>
                <div id="modal-content" class="p-6 md:p-8 overflow-y-auto w-full overscroll-contain font-body">
                </div>
            </div>
        </div>`;
        document.body.insertAdjacentHTML('beforeend', globalComponentsHTML);

        // Footer
        const footerHTML = `
        <footer class="pt-32 pb-10 bg-odd-black text-odd-white relative overflow-hidden border-t border-odd-border text-left mt-auto">
            <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
                <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div class="col-span-1 md:col-span-2 relative">
                        <h2 class="text-[clamp(4rem,10vw,8rem)] leading-none font-display font-semibold tracking-tight text-odd-white/5 mb-6 absolute -bottom-10 left-0 pointer-events-none whitespace-nowrap">
                            ${GlobalContent.footerMassiveText}
                        </h2>
                        <a href="index.html" class="text-3xl font-display font-semibold tracking-tight text-odd-white mb-6 block hover:opacity-80 transition-opacity relative z-20">
                            ${GlobalContent.brandName}<span class="text-odd-accent">.</span>
                        </a>
                        <p class="text-odd-gray max-w-sm font-light leading-relaxed relative z-20 font-body">${GlobalContent.footerDescription}</p>
                    </div>
                    <div class="relative z-20">
                        <h4 class="text-sm font-body font-bold mb-6 uppercase tracking-widest text-odd-gray">Navigation</h4>
                        <ul class="space-y-4 text-odd-white font-medium flex flex-col items-start pr-12 font-body">
                            ${desktopLinksHTML.replace(/class="[^"]*"/g, 'class="hover:text-odd-accent hover:translate-x-1 inline-block transition-all"')}
                        </ul>
                    </div>
                    <div class="relative z-20">
                        <h4 class="text-sm font-body font-bold mb-6 uppercase tracking-widest text-odd-gray">Socials</h4>
                        <ul class="space-y-4 text-odd-white font-medium flex flex-col items-start font-body">
                            <li><a href="${GlobalContent.socialLinks.twitter}" target="_blank" class="hover:text-odd-accent hover:translate-x-1 inline-block transition-all flex items-center gap-2 text-odd-white"><i data-feather="twitter" class="w-4 h-4 text-odd-white mr-1 opacity-70"></i> Twitter</a></li>
                            <li><a href="${GlobalContent.socialLinks.instagram}" target="_blank" class="hover:text-odd-accent hover:translate-x-1 inline-block transition-all flex items-center gap-2 text-odd-white"><i data-feather="instagram" class="w-4 h-4 text-odd-white mr-1 opacity-70"></i> Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs tracking-widest uppercase font-bold text-odd-gray relative z-20 font-body">
                    <p>&copy; 2026 ${GlobalContent.brandName}</p>
                    <div class="flex gap-6 mt-4 md:mt-0">
                        <a href="javascript:void(0)" onclick="window.openGlobalModal('privacy')" class="hover:text-odd-white transition-colors cursor-pointer">Privacy Policy</a>
                        <a href="javascript:void(0)" onclick="window.openGlobalModal('terms')" class="hover:text-odd-white transition-colors cursor-pointer">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>`;
        
        let targetScript = document.body.querySelector('script');
        if (targetScript) {
            targetScript.insertAdjacentHTML('beforebegin', footerHTML);
        } else {
            document.body.insertAdjacentHTML('beforeend', footerHTML);
        }
    }

    // ============================================
    // 2. HOME PAGE CONTENT
    // ============================================
    if (window.HomeContent) {
        
        // --- 2A: HERO CAROUSEL ---
        const heroSlidesContainer = document.getElementById('hero-slides-container');
        const carouselDots = document.getElementById('carousel-dots');
        
        if (heroSlidesContainer && HomeContent.heroSlides) {
            HomeContent.heroSlides.forEach((slide, index) => {
                const isActive = index === 0 ? 'active-slide' : '';
                const slideHTML = `
                <div class="carousel-item ${isActive}" data-slide="${index}">
                    <img src="${slide.image}" alt="Slide ${index + 1}">
                </div>`;
                heroSlidesContainer.insertAdjacentHTML('beforeend', slideHTML);
            });

            // Inject carousel dots
            if (carouselDots) {
                HomeContent.heroSlides.forEach((slide, index) => {
                    const isActive = index === 0 ? 'active-dot' : '';
                    carouselDots.insertAdjacentHTML('beforeend', 
                        `<button class="carousel-dot ${isActive}" data-slide-target="${index}"></button>`
                    );
                });
            }

            // Set initial text from first slide
            const firstSlide = HomeContent.heroSlides[0];
            const heroLine1 = document.getElementById('hero-line-1');
            const heroLine2 = document.getElementById('hero-line-2');
            const heroLine3 = document.getElementById('hero-line-3');
            const heroSubtitle = document.getElementById('hero-subtitle');
            const heroBtnOrig = document.getElementById('hero-btn-orig');
            const heroBtnHov = document.getElementById('hero-btn-hov');
            const heroCta = document.getElementById('hero-cta');

            if (heroLine1) heroLine1.innerHTML = firstSlide.titleLine1;
            if (heroLine2) heroLine2.innerHTML = firstSlide.titleLine2;
            if (heroLine3) heroLine3.innerHTML = firstSlide.titleLine3;
            if (heroSubtitle) heroSubtitle.textContent = firstSlide.subtitle;
            if (heroBtnOrig) heroBtnOrig.textContent = firstSlide.buttonText;
            if (heroBtnHov) heroBtnHov.textContent = firstSlide.buttonText;
            if (heroCta) heroCta.href = firstSlide.buttonLink;
        } else {
            // Fallback single-slide
            const heroLines = document.querySelectorAll('.hero-section h1 .mask-inner');
            if (heroLines.length >= 3) {
                heroLines[0].innerHTML = HomeContent.heroTitleLine1;
                heroLines[1].innerHTML = HomeContent.heroTitleLine2;
                heroLines[2].innerHTML = HomeContent.heroTitleLine3;
            }
            const heroDesc = document.querySelector('.hero-section p');
            if (heroDesc) heroDesc.textContent = HomeContent.heroSubtitle;

            const heroBtnOrig = document.querySelector('.hero-section .btn-bracket .original-text');
            const heroBtnHov = document.querySelector('.hero-section .btn-bracket .hover-text');
            if (heroBtnOrig && heroBtnHov) {
                heroBtnOrig.textContent = HomeContent.heroButtonText;
                heroBtnHov.textContent = HomeContent.heroButtonText;
            }

            const heroSectionBlock = document.getElementById('hero-section');
            if (heroSectionBlock && HomeContent.heroBackgroundImage) {
                heroSectionBlock.style.backgroundImage = `url('${HomeContent.heroBackgroundImage}')`;
            }
        }

        // --- 2B: MARQUEE TICKER ---
        const marqueeTrack = document.getElementById('marquee-track');
        if (marqueeTrack && HomeContent.marqueeText) {
            const words = HomeContent.marqueeText.split(' · ');
            let marqueeHTML = '';
            // Duplicate content for seamless infinite loop
            for (let i = 0; i < 2; i++) {
                words.forEach(word => {
                    marqueeHTML += `<span class="marquee-item text-odd-white">${word}</span>`;
                });
            }
            marqueeTrack.innerHTML = marqueeHTML;
        }

        // --- 2C: QUOTE SECTION ---
        const quoteSectionEl = document.getElementById('quote-section');
        if (quoteSectionEl) {
            const quoteLines = quoteSectionEl.querySelectorAll('h2 .mask-inner');
            if (quoteLines.length >= 3) {
                quoteLines[0].innerHTML = HomeContent.quoteLine1;
                quoteLines[1].innerHTML = HomeContent.quoteLine2;
                quoteLines[2].innerHTML = HomeContent.quoteLine3;
            }
            if (HomeContent.quoteImage) {
                quoteSectionEl.style.backgroundImage = `url('${HomeContent.quoteImage}')`;
            }
        }
        
        // --- 2D: BRAND PILLARS ---
        const pillarsGrid = document.getElementById('brand-pillars-grid');
        if (pillarsGrid && HomeContent.pillars) {
            HomeContent.pillars.forEach((pillar, index) => {
                const delay = index * 100;
                const pillarHTML = `
                <div class="reveal flex flex-col gap-6 group" style="transition-delay: ${delay}ms">
                    <h3 class="font-display font-semibold text-xl uppercase tracking-widest text-odd-black">${pillar.title}</h3>
                    <div class="relative overflow-hidden aspect-[4/5] parallax-container">
                        <img src="${pillar.image}" alt="${pillar.title}" class="parallax-image group-hover:scale-105 transition-transform duration-1000 w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                            <a href="${pillar.buttonLink}" class="btn-bracket text-odd-white font-bold bg-odd-black/80 backdrop-blur-sm px-6 py-3">
                                <span class="text-wrapper"><span class="original-text">${pillar.buttonText}</span><span class="hover-text">${pillar.buttonText}</span></span>
                            </a>
                        </div>
                    </div>
                </div>`;
                pillarsGrid.insertAdjacentHTML('beforeend', pillarHTML);
            });
        }

        // --- 2E: FEATURED WEAR GRID ---
        const featuredTitle = document.getElementById('featured-wear-title');
        if (featuredTitle) featuredTitle.textContent = HomeContent.featuredWearSectionTitle;
        
        const featuredBtn = document.getElementById('featured-wear-button');
        if (featuredBtn) {
            featuredBtn.href = HomeContent.featuredWearButtonLink;
            const orig = featuredBtn.querySelector('.original-text');
            const hov = featuredBtn.querySelector('.hover-text');
            if(orig) orig.textContent = HomeContent.featuredWearButtonText;
            if(hov) hov.textContent = HomeContent.featuredWearButtonText;
        }

        const featuredWearGrid = document.getElementById('featured-wear-grid');
        if (featuredWearGrid && HomeContent.featuredWearGrid) {
            HomeContent.featuredWearGrid.forEach((product) => {
                const productHTML = `
                <div class="reveal group relative flex flex-col overflow-hidden bg-odd-offwhite w-[85vw] md:w-[400px] shrink-0">
                    <a href="${product.link}" class="absolute inset-0 z-20"></a>
                    <div class="relative aspect-square overflow-hidden flex items-center justify-center p-0">
                        <img src="${product.image}" alt="${product.name}" class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-odd-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div class="absolute inset-0 flex flex-col justify-end items-center font-body font-bold uppercase tracking-widest text-[10px] md:text-xs z-10 pointer-events-none text-center p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p class="text-odd-white bg-odd-black/80 backdrop-blur-md px-6 py-3 w-full shadow-sm uppercase mb-2">${product.name}</p>
                            <p class="text-odd-white bg-odd-black/80 backdrop-blur-md px-6 py-3 shadow-sm inline-block">${product.price}</p>
                        </div>
                    </div>
                </div>`;
                featuredWearGrid.insertAdjacentHTML('beforeend', productHTML);
            });
        }

        // --- 2F: INSTAGRAM-STYLE IMAGE STRIP ---
        const instaStrip = document.getElementById('insta-strip');
        if (instaStrip && HomeContent.instaImages) {
            HomeContent.instaImages.forEach((imgSrc, index) => {
                const itemHTML = `
                <div class="insta-strip-item w-[300px] md:w-[350px] aspect-square relative group cursor-pointer" onclick="openLightbox('${imgSrc}')">
                    <img src="${imgSrc}" alt="ANBA ${index + 1}" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 flex items-center justify-center">
                        <span class="text-white text-xs tracking-[0.3em] uppercase font-bold font-body opacity-0 group-hover:opacity-100 transition-opacity duration-500">View</span>
                    </div>
                </div>`;
                instaStrip.insertAdjacentHTML('beforeend', itemHTML);
            });
        }
    }

    // ============================================
    // 3. BLOG LISTING — Article Grid (article.html)
    // ============================================
    const blogGrid = document.getElementById('blog-grid');

    if (blogGrid && window.BlogPosts) {
        BlogPosts.forEach((post, index) => {
            const delay = index * 100;
            const postLink = `post.html?id=${index}`;
            const cardHTML = `
                <article class="reveal card-glass p-0 overflow-hidden group flex flex-col" style="transition-delay: ${delay}ms">
                    <a href="${postLink}" class="block h-64 overflow-hidden relative parallax-container">
                        <img src="${post.image}" alt="${post.title}" class="parallax-image cursor-pointer">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                    <div class="flex flex-col flex-grow p-6">
                        <p class="text-odd-accent text-xs tracking-widest uppercase font-semibold mb-1 font-body">${post.date}</p>
                        <p class="text-odd-gray text-[10px] tracking-widest uppercase font-body mb-3">By ${post.author}</p>
                        <h3 class="text-2xl font-display font-semibold text-odd-black mb-4 group-hover:underline decoration-1 underline-offset-4">
                            <a href="${postLink}">${post.title}</a>
                        </h3>
                        <p class="text-odd-gray mb-8 leading-relaxed font-light flex-grow font-body">${post.summary}</p>
                        <a href="${postLink}" class="btn-bracket mt-auto text-odd-black">
                            <span class="text-wrapper">
                                <span class="original-text">Read Article</span>
                                <span class="hover-text">Read Article</span>
                            </span>
                        </a>
                    </div>
                </article>
            `;
            blogGrid.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // ============================================
    // 4. BLOG POST RENDERING (post.html)
    // ============================================
    const postBody = document.getElementById('post-body');
    if (postBody && window.BlogPosts && window.marked) {
        const urlParams = new URLSearchParams(window.location.search);
        const postIndex = parseInt(urlParams.get('id'));

        if (!isNaN(postIndex) && postIndex >= 0 && postIndex < BlogPosts.length) {
            const post = BlogPosts[postIndex];

            // Set page metadata
            document.title = `${post.title} | ANBA After Wear`;
            const titleEl = document.getElementById('post-title');
            if (titleEl) titleEl.textContent = post.title;
            const dateEl = document.getElementById('post-date');
            if (dateEl) dateEl.textContent = post.date;
            const authorEl = document.getElementById('post-author');
            if (authorEl) authorEl.textContent = `By ${post.author}`;
            const breadcrumbTitle = document.getElementById('breadcrumb-title');
            if (breadcrumbTitle) breadcrumbTitle.textContent = post.title;
            const heroImg = document.getElementById('post-hero-img');
            if (heroImg && post.image) heroImg.src = post.image;

            // Render markdown content
            postBody.innerHTML = marked.parse(post.content);
        }
    }
});
