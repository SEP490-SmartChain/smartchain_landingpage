# SmartChain Landing Page Conventions

- This repository contains the public marketing experience only. Admin pages,
  authentication state and business API clients belong in `smartchain_fe`.
- Keep composed landing sections in `src/components/landing/` and assemble them
  in `src/pages/LandingPage.tsx`.
- Use Tailwind CSS v4 for layout and `src/styles/globals.css` or
  `src/styles/tokens.css` for global tokens and complex animations.
- Read the admin origin from `VITE_ADMIN_URL`; do not hardcode an admin host or
  a local `/login` route.
- Preserve reduced-motion, keyboard and semantic HTML behavior when changing
  animated or interactive sections.
- Run TypeScript, lint, formatting and production build checks before delivery.
