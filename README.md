# Web Admin Project

This project provides a clean, production-ready, and highly scalable foundation for our Next.js Web Admin application, applying the Feature-Sliced Design (FSD) model to ensure the source code is easy to read, maintain, and scale.

## 📂 Directory Structure

The project applies **Feature-Sliced Design (FSD)**. New features MUST NOT be crammed into `src/components`. They must be separated by Domain/Feature.

```text
src/
├── app/                  # Routing, Layouts & Global Pages (Server Components)
│   ├── (admin)/          # Group route for internal pages (with AppLayout)
│   └── login/            # Public pages without admin layout
├── components/           # Shared UI Components (Atoms/Molecules)
│   ├── Common/           # Complex components (DataTable, FileViewer)
│   └── ui/               # Basic components (Button, Badge, Pagination)
├── features/             # Core Domain logic
│   └── [feature_name]/   # E.g., customers, orders, products...
│       ├── api/          # API calls for this feature
│       ├── components/   # UI Components specific to this feature
│       └── schemas/      # TypeScript Interfaces & Zod Schemas
├── hooks/                # Global custom hooks (useAppStore, useAuth...)
├── i18n/                 # next-intl configuration (request.ts) for i18n
├── services/             # Global services (apiClient.ts)
├── styles/               # Global CSS
└── proxy.ts              # Next.js 16+ Middleware (Replaces middleware.ts)
```

## 📐 Best Practices & Conventions

### 1. Rendering Rules (Server vs Client)
- **Server Components (Default):** `page.tsx` files in `app/` must be Server Components (NO `"use client"` directive). Used for fetching data directly, SEO handling, and passing props to Client Components.
- **Client Components (`"use client"`):** Use only when the component needs direct user interaction (`onClick`, `onChange`), state management (`useState`, `useEffect`), or custom hooks (`useAppStore`, `useForm`). Files located in `src/features/[name]/components/` are typically Client Components.

### 2. Routing & Middleware (Next.js 16+)
- **Middleware:** Starting from Next.js 16, `middleware.ts` is renamed to `proxy.ts`. All server-side routing logic and auth checks reside in `src/proxy.ts`.
- **Internationalization (i18n):** Uses `next-intl` with cookie-based locale persistence (`NEXT_LOCALE`) to keep URLs clean (e.g., no `/vi/dashboard`). Managed via `src/i18n/request.ts` (does NOT use `next-intl/middleware`).

### 3. State & Form Management
- **Validation:** ANY Form must have its Schema defined using **Zod** before building the UI. Store Schema files at `src/features/[name]/schemas/`.
- **Form Management:** Always use `useForm` (from `react-hook-form`) combined with `@hookform/resolvers/zod`. DO NOT manually create state (`useState`) for individual form inputs.

### 3. Naming Conventions
- **Feature Folders:** lowercase, plural (e.g., `customers`, `orders`, `products`).
- **Component Files:** PascalCase (e.g., `CustomersTable.tsx`, `CustomerForm.tsx`).
- **Hook Files:** camelCase, starting with "use" (e.g., `useAppStore.ts`).
- **Variables/Functions:** camelCase (e.g., `fetchCustomers`, `handleSubmit`).
- **Interfaces/Types:** PascalCase (e.g., `Customer`, `UserRole`).

### 4. Code UI & CSS
- **CSS Modules:** Default to using CSS Modules (`Component.module.css`) to scope CSS and avoid global class name conflicts.
- **UI Reusability:** If a piece of UI (like a button, badge, or search bar) appears in 2 or more places, it MUST be extracted into a reusable Component within `src/components/ui/`.
- **Color Variables:** Prioritize using global CSS variables defined in `globals.css` (e.g., `var(--gray-500)`) instead of hardcoding HEX colors.

### 5. Workflow for Developing a New Feature
When assigned to build a new page (e.g., **Products List**), follow this exact sequence:

1. **Step 1:** Create the domain directory `src/features/products/`.
2. **Step 2:** Define data structures in `src/features/products/schemas/productSchema.ts` (Zod schema, interfaces).
3. **Step 3:** Create the UI Component `src/features/products/components/ProductsTable.tsx` (Client component to render the table and buttons).
4. **Step 4:** Create the Server page `src/app/(admin)/products/page.tsx` to fetch data from the API and pass it into `<ProductsTable />`.
5. **Step 5:** (Optional) Write API functions inside `src/features/products/api/`.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production & start
npm run build && npm start
```

## 🛠️ Built With
- Next.js (App Router)
- CSS Modules
- TypeScript
- Zod & React Hook Form
