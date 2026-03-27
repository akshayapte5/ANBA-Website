// ==============================================================================
// HOME PAGE MASTER CONTENT (index.html)
// ==============================================================================
// Instructions:
// - Edit the text within the quotation marks to change the Home page content.
// - To update images, place the new image in the 'images' folder and update the path.
// - Do NOT delete the quotation marks or commas.

window.HomeContent = {
    // ----------------------------------------------------
    // 1. HERO CAROUSEL SLIDES (Full-screen rotating hero)
    // ----------------------------------------------------
    heroSlides: [
        {
            image: "images/home_header_background.jpg",
            titleLine1: "DESIGN",
            titleLine2: "FOR",
            titleLine3: "EVERYONE<span class='animate-blink'>.</span>",
            subtitle: "Thoughtful design across brands, products and digital experiences. We help ideas become clear, usable, and beautifully crafted.",
            buttonText: "EXPLORE COLLECTION",
            buttonLink: "gallery.html"
        },
        {
            image: "images/home_header_background_2.jpg",
            titleLine1: "CRAFTED",
            titleLine2: "WITH",
            titleLine3: "PURPOSE<span class='animate-blink'>.</span>",
            subtitle: "Every stitch tells a story. Premium streetwear born from authenticity and a passion for the game.",
            buttonText: "OUR STORY",
            buttonLink: "about.html"
        },
        {
            image: "images/our_story.jpg",
            titleLine1: "WEAR",
            titleLine2: "YOUR",
            titleLine3: "LEGACY<span class='animate-blink'>.</span>",
            subtitle: "Join a community that values quality, heritage, and the art of self-expression.",
            buttonText: "JOIN THE COMMUNITY",
            buttonLink: "contact.html"
        }
    ],

    // Legacy single-slide fallback keys (used by content-loader)
    heroTitleLine1: "DESIGN",
    heroTitleLine2: "FOR",
    heroTitleLine3: "EVERYONE<span class='animate-blink'>.</span>",
    heroSubtitle: "Thoughtful design across brands, products and digital experiences. We help ideas become clear, usable, and beautifully crafted.",
    heroButtonText: "EXPLORE COLLECTION",
    heroButtonLink: "gallery.html",
    heroBackgroundImage: "images/home_header_background.jpg",

    // ----------------------------------------------------
    // 2. MARQUEE TICKER TEXT
    // ----------------------------------------------------
    marqueeText: "ANBA AFTER WEAR · PREMIUM STREETWEAR · EST. 2026 · CRAFTED WITH PURPOSE · WEAR YOUR LEGACY",

    // ----------------------------------------------------
    // 3. MIDDLE QUOTE DIVIDER
    // ----------------------------------------------------
    quoteLine1: "Born from a shared love of the game,",
    quoteLine2: "rooted in authenticity and creativity",
    quoteLine3: "expressed through what we wear.",
    quoteImage: "images/craftmanship.jpg",

    // ----------------------------------------------------
    // 4. BRAND PILLARS (The 3 large vertical images)
    // ----------------------------------------------------
    pillars: [
        {
            title: "Our Products",
            buttonText: "EXPLORE",
            buttonLink: "gallery.html",
            image: "images/our_products.jpg"
        },
        {
            title: "Our Story",
            buttonText: "READ MORE",
            buttonLink: "about.html",
            image: "images/our_story.jpg"
        },
        {
            title: "Our Community",
            buttonText: "JOIN US",
            buttonLink: "contact.html",
            image: "images/join_us.jpg"
        }
    ],

    // ----------------------------------------------------
    // 5. FEATURED WEAR GRID
    // ----------------------------------------------------
    featuredWearSectionTitle: "Featured Wear",
    featuredWearButtonText: "VIEW SHOP",
    featuredWearButtonLink: "gallery.html",

    featuredWearGrid: [
        {
            name: "Odd Ritual Script Cap [Black]",
            price: "$50.00",
            image: "images/our_products.jpg",
            link: "gallery.html"
        },
        {
            name: "Swing Easy Tee [White]",
            price: "$65.00",
            image: "images/our_story.jpg",
            link: "gallery.html"
        },
        {
            name: "Heritage Polo [Navy]",
            price: "$85.00",
            image: "images/craftmanship.jpg",
            link: "gallery.html"
        },
        {
            name: "Odd Ritual Script Cap [Milk]",
            price: "$50.00",
            image: "images/join_us.jpg",
            link: "gallery.html"
        },
        {
            name: "Clubhouse Quarter Zip",
            price: "$110.00",
            image: "images/craftmanship_2.jpg",
            link: "gallery.html"
        },
        {
            name: "Modern Heritage Tote",
            price: "$35.00",
            image: "images/home_header_background_2.jpg",
            link: "gallery.html"
        }
    ],

    // ----------------------------------------------------
    // 6. INSTAGRAM-STYLE IMAGE STRIP
    // ----------------------------------------------------
    instaImages: [
        "images/our_products.jpg",
        "images/our_story.jpg",
        "images/craftmanship.jpg",
        "images/join_us.jpg",
        "images/craftmanship_2.jpg",
        "images/home_header_background.jpg",
        "images/home_header_background_2.jpg"
    ]
};
