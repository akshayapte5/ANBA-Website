# ANBA After Wear — Project Documentation

This document serves as the definitive technical and design guide for the **ANBA After Wear** landing page. It is designed to be read by future developers (or AI assistants) to understand the architecture, design philosophy, and maintenance procedures of the site.

---

## 1. Design Philosophy & Inspiration
The ANBA After Wear website is a high-end, minimalist landing page that prioritizes large-scale immersive photography, breathable typography, and fluid, purposeful motion.

### Core Inspirations
*   **[Odd Ritual](https://oddritualgolf.com/)**: Influence for the "horizontal marquee" scrolling, the use of hard-edged black/white contrast blocks, and the "window-pane" parallax effects.
*   **[Nivora (Framer)](https://nivora.framer.website/)**: Influence for the ultra-clean light-themed layouts, the sophisticated serif typography, and the "reveal-on-scroll" entrance animations.

### Visual Keynotes
*   **Palette**: Pure White (#FFFFFF), Off-White (#F4F4F2), Deep Black (#0A0A0A), Neutral Gray (#888888), and Border (#E5E5E5).
*   **Typography**: `Outfit` (Sans-serif, display/headings), `Inter` (Sans-serif, body text), `Funnel Display` (Sans-serif, quote section), and `Playfair Display` (Serif, available for premium accents).
*   **Motion**: 1.8s long-duration eases (`cubic-bezier(0.85, 0, 0.15, 1)`) for all reveal animations.

---

## 2. Architecture: The "Zero-Build" CMS
The project uses a **Decoupled Injection Architecture**. There are no build steps. HTML files act as empty semantic skeletons, and Javascript "Engine" files inject content dynamically from configuration files.

### The Injection Flow
1.  **`head-loader.js`**: Writes shared `<head>` metadata (Tailwind CDN, Google Fonts, `styles.css`) via `document.write()` to avoid duplication across pages.
2.  **HTML Skeletons** (`index.html`, `about.html`, etc.): Contain layout structure, `id` hooks for injection, and empty tags.
3.  **`content/*.js` (The CMS)**: Pure-Javascript data dictionaries containing all text, image URLs, and button links.
4.  **`content-loader.js` (The Brain)**: Runs on `DOMContentLoaded`. Reads data from `home.js`, `global.js`, and `articles.js`, then uses `.innerHTML`/`.textContent` to populate HTML skeletons. Also synthesizes the Navbar, Footer, Sidebar, and Legal Modal globally.
5.  **`scripts.js` (The Engine)**: Handles all interactivity — scroll-reveal triggers, parallax math, custom cursor, marquee auto-scroll, sidebar toggle, modal state, and FAQ accordion.

---

## 3. File Directory & Purposes

### Core Structure
*   [index.html](file:///e:/ANBA%20Website/index.html): Primary landing page. Skeleton with hooks: `#hero-section`, `#quote-section`, `#brand-pillars-grid`, `#featured-wear-grid`.
*   [styles.css](file:///e:/ANBA%20Website/styles.css): Custom animations (blink cursor, reveal/fade transitions), custom cursor, bracket-button hover mechanics, parallax container rules, gallery hover overlays, and typography overrides (`.header-text`, `.quote-text-white-premium`, `.quote-dark-block`).
*   [scripts.js](file:///e:/ANBA%20Website/scripts.js): Interaction engine — scroll-reveal observer, parallax math, glass-nav logic, custom cursor tracking, global modal open/close, sidebar toggle, infinite marquee auto-scroll with drag support, hero stagger animation, FAQ accordion, and Feather Icons initialization.
*   [tailwind-config.js](file:///e:/ANBA%20Website/tailwind-config.js): Custom Tailwind theme — defines the `odd-*` color palette, font families (`display`=Outfit, `body`=Inter, `quote`=Funnel Display), custom easing, and marquee keyframes.

### Logic & Injection
*   [content-loader.js](file:///e:/ANBA%20Website/content-loader.js): The DOM synthesis engine. Dynamically builds: Navbar, Footer, Mobile Sidebar, Legal Modal (Section 1); Hero, Quote, Brand Pillars, Featured Wear (Section 2); Article Grid (Section 3); Post Page (Section 4).
*   [head-loader.js](file:///e:/ANBA%20Website/head-loader.js): Centralized `<head>` management — loads Tailwind CDN, Google Fonts (Inter, Outfit, Funnel Display, Playfair Display), Feather Icons, and `styles.css`.

### Content (Data Layer)
*   [content/home.js](file:///e:/ANBA%20Website/content/home.js): Homepage configuration — Hero text/background, Quote text/image, Brand Pillars array, Featured Wear product array.
*   [content/global.js](file:///e:/ANBA%20Website/content/global.js): Universal configuration — Brand name, nav links, footer text, social links, contact info, legal (Privacy/Terms) HTML content.
*   [content/articles.js](file:///e:/ANBA%20Website/content/articles.js): Blog/journal feed — article objects with id, title, date, summary, image, paragraphs, heading, and quote.

### Secondary Pages
*   [about.html](file:///e:/ANBA%20Website/about.html): Brand mission, "Our Heritage" layout with parallax hero and stats grid.
*   [gallery.html](file:///e:/ANBA%20Website/gallery.html): Immersive photo grid with hover overlays and parallax effects.
*   [article.html](file:///e:/ANBA%20Website/article.html): Blog index page — dynamically populates article cards from `articles.js`.
*   [post.html](file:///e:/ANBA%20Website/post.html): Dynamic single-post template — reads `?id=` URL parameter to render the correct article from `articles.js`.
*   [contact.html](file:///e:/ANBA%20Website/contact.html): Minimalist contact form with Name, Email, Subject, and Message fields.

---

## 4. Maintenance & Modifications

### To Change Text or Images:
**Do not edit the HTML files.** Open the corresponding file in the `content/` folder (e.g., `content/home.js`). Update the string values or image paths. The site updates instantly on refresh.

### To Change Animation Speed:
Open [styles.css](file:///e:/ANBA%20Website/styles.css) and look for the `.reveal`, `.reveal-text`, or `.fade-reveal` classes. Adjust the `transition` duration value (currently `1.8s`).

### To Add New Blog Posts:
1.  Open [content/articles.js](file:///e:/ANBA%20Website/content/articles.js).
2.  Add a new object to the `ArticlesContent` array following the existing schema.
3.  Follow the instructions in [HOW_TO_BLOG.md](file:///e:/ANBA%20Website/HOW_TO_BLOG.md) for detailed steps.

### To Change Fonts:
1.  Update the Google Fonts URL in [head-loader.js](file:///e:/ANBA%20Website/head-loader.js).
2.  Update the font family mappings in [tailwind-config.js](file:///e:/ANBA%20Website/tailwind-config.js).
3.  If needed, update any direct `font-family` references in [styles.css](file:///e:/ANBA%20Website/styles.css).

---

## 5. Design Rules for Future Changes
*   **Natural Color**: All images render without `grayscale` or `mix-blend-multiply` filters.
*   **High-Contrast Text**: Use Pure White (`#FFFFFF`) with `.header-text` or Deep Graphite with `.quote-text-white-premium` depending on background brightness. Use `text-shadow` or semi-transparent backdrops (`bg-black/40`) for legibility.
*   **No hardcoded text in HTML**: All visible text must be injected via `content-loader.js` from the `content/*.js` files.
*   **Branding**: All references should use **ANBA After Wear** — never "Odd Ritual" or "Nivora".
