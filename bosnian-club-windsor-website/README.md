
# Bosnian Club of Windsor (SPA)

## Project overview

This repository contains a single-page application (SPA) built with Vue 3 and TypeScript, demonstrating a polished, portfolio-ready front-end for the Bosnian Club of Windsor. The app is a demo/portfolio piece and includes three main views: Home, About, and Contact. Replace bracketed placeholders with verified club details before publishing.

## Key features

* Vue 3 + TypeScript single-page application (SPA)
* Vue Router for client-side navigation
* Centralized color palette via CSS custom properties
* Responsive, accessible components and layouts
* Pages: Home (hero + intro), About (detailed content), Contact (simple contact info)
* Minimal contact list (Facebook, phone, email) with placeholders
* Lightweight CSS (global stylesheet + scoped component styles)
* Easy to customize content and assets (logo, copy, contact details)

## Brand / color palette

Use the following CSS variables (defined in `src/assets/styles/global.css`):

\--color-primary:   #043c93  (primary accent)
\--color-secondary: #f8c21e  (secondary accent)
\--color-letter:    #37567c  (body / letter accent)
\--color-background:#ffffff  (page background)

## Project structure

src/
assets/
styles/global.css      # global CSS variables and base styles
(optional) logo files
components/
Navbar.vue
(optional) Hero.vue
views/
HomeView\.vue
AboutView\.vue
ContactView\.vue
router/
index.ts
App.vue
main.ts
public/
package.json
tsconfig.json
vite.config.ts (if using Vite)

## Installation

1. Clone the repository:
   git clone <your-repo-url>
   cd <repo-folder>

2. Install dependencies:
   npm install
   (or `yarn` / `pnpm` depending on your preference)

## Development

Run the development server with hot reload:

npm run dev

Open the local dev server (Vite usually serves at [http://localhost:5173](http://localhost:5173)). If using a different toolchain, adjust commands accordingly.

## Build for production

To build a production bundle:

npm run build

To preview the production build locally:

npm run preview

## Configuration & customization

* Global styles: update `src/assets/styles/global.css` to change fonts, spacing, or colors.
* Logo: add a logo image to `src/assets` and set the `logoSrc` in `HomeView.vue` (or import directly).
* Contact details: update the placeholders in `src/views/ContactView.vue` (facebookUrl, phoneRaw, phoneDisplay, email).
* About content: edit the bracketed placeholders in `src/views/AboutView.vue` (years active, membership counts, leadership names, program names, calendar items).
* Routes: the router is defined in `src/router/index.ts`. Add or lazy-load routes as needed.

## Accessibility & privacy notes

* Headings include `aria-labelledby` and sections include appropriate landmark roles where applicable.
* Focus management: the About page sets focus to the main heading on mount for keyboard users.
* Privacy: do not publish personal contact details without explicit consent. Use a central club email address if possible.

## Form behavior

The simple contact form included in the demo uses a `mailto:` fallback to open the user's email client. For production/real contact collection:

* Replace the `mailto:` behavior with a backend endpoint (e.g., `/api/contact`) or a trusted form provider (Formspree, Netlify Forms, etc.).
* Add spam protection (reCAPTCHA, honeypot fields) and server-side validation.

## Suggested next steps (optional)

* Convert static leadership/program lists into JSON data files (`/src/data/*.json`) and map them into components.
* Add small SVG icons for each contact method and program card.
* Add subtle animations (fade-in, reveal on scroll) via CSS or a lightweight library.
* Create reusable components for `ProgramCard` and `LeaderCard` for easier maintenance.
* Integrate Pinia for state management if you plan to add dynamic content or auth.
* Add unit tests for components with Vue Test Utils + Vitest.

## Deployment

* Host static build on Netlify, Vercel, GitHub Pages, or any static hosting provider.
* For Vercel/Netlify, connect the repository and set the build command to `npm run build` and publish directory to `dist`.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/your-change`)
3. Commit changes and push
4. Open a pull request describing the change

Before merging, ensure:

* No sensitive personal data is added without consent
* Placeholder values are replaced with verified information where applicable

## License

This repo uses the MIT license.

## Acknowledgements & credits

This SPA was created to serve the Bosnian Community in Windsor, Ontario. Replace this section with any logos, sponsor acknowledgements, or attributions you need to show.

## Contact

For questions about this repository, contact: [huzeir2k](mailto:huzeir2k@gmail.com).


