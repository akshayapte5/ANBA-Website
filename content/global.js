// ==============================================================================
// GLOBAL SITE CONTENT MASTER FILE
// ==============================================================================
// Instructions:
// - You can freely edit the text inside the quotation marks "".
// - Do NOT delete the quotation marks or commas at the end of lines.
// - For images, ensure the image file is placed in the 'images' folder
//   and update the path exactly as shown (e.g., "images/my_new_logo.png").

window.GlobalContent = {
    // ----------------------------------------------------
    // 1. BRAND & NAVIGATION
    // ----------------------------------------------------
    // Change this to change the top-left logo text
    brandName: "ANBA After Wear",

    // The main call to action button in the navigation bar
    navButtonText: "SHOP",
    navButtonLink: "https://www.google.com",

    // Navigation Links (You can change the labels but keep the URLs pointing to the right HTML file)
    navLinks: [
        { label: "Home", url: "index.html" },
        { label: "About", url: "about.html" },
        { label: "Articles", url: "article.html" },
        { label: "Gallery", url: "gallery.html" },
        { label: "Contact", url: "contact.html" }
    ],

    // ----------------------------------------------------
    // 2. FOOTER
    // ----------------------------------------------------
    // The massive text at the bottom of every page
    footerMassiveText: "ANBA After Wear",

    // The short description under the footer logo
    footerDescription: "A modern homage to the game we love. Rooted in design, built for the community.",

    // Footer contact information
    contactEmail: "info@anbaopc.com",
    contactPhone: "+91 9769551530, 9871041531",
    contactAddress: "123 Fairway Drive, Los Angeles CA",

    // Social Media Links
    socialLinks: {
        instagram: "https://www.google.com",
        twitter: "https://www.google.com",
        dribbble: "https://www.google.com"
    },

    // Footer Copyright text
    copyrightText: "© 2026 ANBA AFTER WEAR. ALL RIGHTS RESERVED.",

    // ----------------------------------------------------
    // 3. LEGAL / MODAL CONTENT
    // ----------------------------------------------------
    legalText: {
        privacy: `
            <div class="space-y-6 text-sm font-light leading-relaxed">
                <p>Welcome to our Privacy Policy. Your privacy is critically important to us.</p>
                <p>We respect your privacy regarding any information we may collect while operating our website. This Privacy Policy applies to our application.</p>
                <h3 class="font-bold uppercase tracking-widest text-xs mt-8 mb-4">Information We Collect</h3>
                <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent.</p>
                <h3 class="font-bold uppercase tracking-widest text-xs mt-8 mb-4">Data Retention</h3>
                <p>We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we’ll protect within commercially acceptable means to prevent loss and theft.</p>
                <p>By continuing to use our website, you signify your acceptance of this policy.</p>
            </div>
        `,
        terms: `
            <div class="space-y-6 text-sm font-light leading-relaxed">
                <p>Welcome to our Terms of Service.</p>
                <p>By accessing this website, you are agreeing to be bound by these website Terms and Conditions of Use, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
                <h3 class="font-bold uppercase tracking-widest text-xs mt-8 mb-4">Use License</h3>
                <p>Permission is granted to temporarily download one copy of the materials on our website for personal, non-commercial transitory viewing only.</p>
                <h3 class="font-bold uppercase tracking-widest text-xs mt-8 mb-4">Disclaimer</h3>
                <p>The materials on the website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability.</p>
            </div>
        `
    }
};
