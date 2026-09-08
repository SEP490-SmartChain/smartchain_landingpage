# SmartChain Landing Page

Public marketing site for SmartChain, built with React 19, Vite, Tailwind CSS v4,
GSAP, Motion and React Three Fiber.

The admin and workspace application lives in the separate `smartchain_fe`
repository. All calls to action that enter that application derive their URL
from `VITE_ADMIN_URL`.

## Local setup

```bash
cp .env.example .env.local
npm install
npm run dev
```

The landing page runs on `http://localhost:2325` by default. For local
development, `.env.example` points admin links to `http://localhost:2324`.

## Environment

| Variable         | Required | Description                                                              |
| ---------------- | -------- | ------------------------------------------------------------------------ |
| `VITE_ADMIN_URL` | Yes      | Base URL of the SmartChain admin site. `/login` is appended to this URL. |

## Source structure

```text
src/
├── components/landing/  # Marketing sections, 3D scene and interactions
├── config/site.ts       # Validated environment-derived site URLs
├── pages/LandingPage.tsx
├── styles/               # Global CSS and SmartChain design tokens
└── main.tsx
```

## Quality checks

```bash
npm run build
npm run lint
npm run format:check
```
