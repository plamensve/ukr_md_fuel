# GTA Petroleum — Euro 5 Diesel Export

Lightweight, responsive, multilingual one-page B2B landing site for wholesale diesel buyers in Romania, Moldova and Ukraine.

## Site structure

- \`/index.html\` — English, \`en\` (default)
- \`/ro/index.html\` — Romanian, \`ro-RO\`
- \`/md/index.html\` — Romanian for Moldova, \`ro-MD\` (Moldovan market localization)
- \`/uk/index.html\` — Ukrainian, \`uk-UA\`
- \`/assets/site.css\` — shared responsive presentation
- \`/assets/site.js\` — accessible mobile navigation
- \`/sitemap.xml\`, \`/robots.txt\` — indexing assistance

Pure HTML/CSS/vanilla JS; no build step, server, cookies, tracking scripts or paid dependencies. Designed for GitHub Pages, branch \`main\`, folder \`/ (root)\`.

### Enable GitHub Pages

In **Settings → Pages → Build and deployment**, select **Deploy from a branch**, **main** and **/ (root)**. The expected URL is <https://plamensve.github.io/ukr_md_fuel/>.

### Notes

- Product wording uses **Euro 5 diesel** (environmental class) rather than incorrectly labeling diesel as European pump-label \`E5\` (which denotes gasoline). Specific lab parameters, sulfur level, bio-content, seasonal class and Incoterms must be confirmed against the relevant batch documentation before publication.
- Customer inquiry channels go directly to \`p.krustev@gtapetroleum.com\`, WhatsApp and Viber \`+359883427273\`; no contact data is stored by the page.
- Photography and brand-channel icon assets are referenced from the existing owned <https://svetoslavov.bg/> website/source repo. If it moves, replace external image URLs with local optimized assets.
- Claim sources: [GTA Petroleum](https://gtapetroleum.com/) and [Plamen Svetoslavov](https://svetoslavov.bg/). Figures shown are sourced to those sites and should be updated if operations change.

### Country flag icons

Language buttons use local SVG flag assets for the United Kingdom (English), Romania, Moldova and Ukraine. Flag icons: [flag-icons](https://github.com/lipis/flag-icons), copyright (c) 2013 Panayiotis Lipiridis; MIT licensed. The full license is in `assets/flags/LICENSE`.
