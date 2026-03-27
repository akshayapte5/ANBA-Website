// ==============================================================================
// HOME PAGE MASTER CONTENT (index.html)
// ==============================================================================
// Instructions:
// - Edit the text within the quotation marks to change the Home page content.
// - To update images, place the new image in the 'images' folder and update the path.
// - Do NOT delete the quotation marks or commas.

window.HomeContent = {
    // ----------------------------------------------------
    // 1. HERO SECTION (Top of the page)
    // ----------------------------------------------------
    // Make changes here to change the main massive title on the homepage
    heroTitleLine1: "DESIGN",
    heroTitleLine2: "FOR",
    heroTitleLine3: "EVERYONE<span class='animate-blink'>.</span>",

    heroSubtitle: "Thoughtful design across brands, products and digital experiences. We help ideas become clear, usable, and beautifully crafted.",
    heroButtonText: "EXPLORE COLLECTION",
    heroButtonLink: "gallery.html",

    // The single stretched background image natively behind the hero text
    heroBackgroundImage: "images/home_header_background.jpg",

    // ----------------------------------------------------
    // 2. MIDDLE QUOTE DIVIDER
    // ----------------------------------------------------
    // The large text quote separating the hero and the collections
    quoteLine1: "Born from a shared love of the game,",
    quoteLine2: "rooted in authenticity and creativity",
    quoteLine3: "expressed through what we wear.",
    quoteImage: "images/craftmanship.jpg",

    // ----------------------------------------------------
    // 3. BRAND PILLARS (The 3 large vertical images)
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
    // 4. FEATURED WEAR GRID
    // ----------------------------------------------------
    featuredWearSectionTitle: "Featured Wear",
    featuredWearButtonText: "VIEW SHOP",
    featuredWearButtonLink: "gallery.html",

    // The exact 6 items shown in the bottom grid
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
    ]
};
