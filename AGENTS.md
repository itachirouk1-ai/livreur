# Livreur - Agent Customization Guide

## Project Overview

**Livreur** is a multi-service delivery platform for Marrakech built with Next.js 16, React 19, and TypeScript. It enables users to order from restaurants, pharmacies, supermarkets, florists, and other vendors with real-time delivery tracking.

### Tech Stack
- **Framework:** Next.js 16.2.10 (App Router with async params)
- **React:** 19.2.4 with React Server Components
- **Styling:** Tailwind CSS 4 + Framer Motion 12 for animations
- **UI Components:** shadcn/ui + Base UI + custom components
- **Language:** TypeScript 5 (strict mode)
- **Code Quality:** ESLint 9 + Prettier 3
- **Build/Run:** `npm run dev | build | start | lint`

---

## Critical Next.js 16 Breaking Changes

⚠️ **This is NOT the Next.js you know.** Next.js 16 has significant breaking changes from earlier versions.

### Key Differences
1. **Async Params/SearchParams** - All route params and search params are Promises
   ```typescript
   interface Props {
     params: Promise<{ slug: string }>;
     searchParams: Promise<{ lang?: string }>;
   }
   ```
   Must `await` them or use `.then()` before accessing values.

2. **Server vs Client Components** - Carefully distinguish `'use client'` components from server components
3. **metadata/generateMetadata** - Return values directly; no need for object wrapping

**Always check [Next.js 16 documentation](node_modules/next/dist/docs/) before implementing features that involve routing, data fetching, or metadata.**

---

## Architecture & Key Concepts

### Routing Structure
- **Dynamic services:** `src/app/[slug]/page.tsx` → `/restaurants`, `/pharmacies`, etc.
- **Vendor detail pages:** `src/app/[slug]/[vendor]/page.tsx` → `/restaurants/vendor-name`
- **Home page:** `src/app/page.tsx` with hero, services, and featured vendors
- **Language routing:** `?lang=en` query param (not URL segments)

### Data Models
- **ServiceDetail** - Full details for a service category (title, description, vendors, features)
- **ServiceVendor** - Individual vendor/store (name, logo, rating, description)
- **ServiceCategory** - Sub-category within a service (e.g., Burgers, Pizzas under Restaurants)
- Located in [src/lib/services-data.ts](src/lib/services-data.ts)

### Multi-Language Support
- Locales: `'fr'` (French) and `'en'` (English)
- Content centralized in [src/lib/site-content.ts](src/lib/site-content.ts)
- Use `getLocaleFromQuery()` to extract locale from search params
- Default locale: French (`fr`)
- **Convention:** Always use `siteContent[locale].key` pattern for content strings

### Styling & Theming
- **Tailwind 4** with custom PostCSS config
- **Dark mode:** Toggle via [src/components/sections/darklightmode.tsx](src/components/sections/darklightmode.tsx)
- **Theme provider:** [src/components/ui/theme-provider.tsx](src/components/ui/theme-provider.tsx) with Context API
- **Color gradients:** Service cards use predefined gradient classes (`from-orange-400 via-orange-500 to-red-600`)
- **Animations:** Framer Motion for smooth transitions and entrance effects

### Component Organization
```
src/components/
  sections/          # Page sections & full features
  ui/               # Reusable UI primitives (buttons, dropdowns, switches)
```

---

## Developer Workflow

### Starting Development
```bash
npm run dev        # Start dev server on port 3000
npm run build      # Production build
npm run start      # Run production build
npm lint           # Check for ESLint/Prettier issues
```

### Adding a New Service
1. Define service in [src/lib/services-data.ts](src/lib/services-data.ts) with `ServiceDetail` interface
2. Add vendors using `ServiceVendor` interface
3. Routing automatically works via `[slug]` dynamic route
4. Update [src/lib/site-content.ts](src/lib/site-content.ts) if adding new translatable content

### Adding UI Components
1. Create in `src/components/ui/` for primitives (buttons, dropdowns, etc.)
2. Use shadcn/ui patterns and class-variance-authority for variants
3. Apply `clsx()` and `twMerge()` for class composition
4. Export from component file; no index re-exports needed

### Styling Best Practices
- Use Tailwind utility classes exclusively
- Leverage `class-variance-authority` for component variants
- Avoid inline styles; use Tailwind's `@apply` in CSS modules if needed
- Group dark mode styles with `dark:` prefix
- Test animations in both light and dark modes

---

## Important Files & Patterns

| File | Purpose |
|------|---------|
| [src/app/layout.tsx](src/app/layout.tsx) | Root layout with metadata, theme/locale providers |
| [src/app/page.tsx](src/app/page.tsx) | Home page with hero, services grid, featured vendors |
| [src/app/[slug]/page.tsx](src/app/[slug]/page.tsx) | Service detail pages (restaurants, pharmacies, etc.) |
| [src/lib/services-data.ts](src/lib/services-data.ts) | Service & vendor data + TypeScript interfaces |
| [src/lib/site-content.ts](src/lib/site-content.ts) | Multi-language content strings & locale utilities |
| [src/lib/use-locale.tsx](src/lib/use-locale.tsx) | LocaleProvider & useLocale hook |
| [tailwind.config.ts](tailwind.config.ts) | Tailwind theme customization |
| [next.config.ts](next.config.ts) | Next.js configuration (currently minimal) |

---

## Common Pitfalls & Solutions

### 1. **Forgetting to `await` params/searchParams**
```typescript
// ❌ Wrong
const slug = params.slug;

// ✅ Correct
const { slug } = await params;
// OR
const locale = await getLocaleFromSearchParams(searchParams);
```

### 2. **Not handling missing services gracefully**
Use `notFound()` from `next/navigation` when service doesn't exist.

### 3. **Locale inconsistency**
Always extract locale via `getLocaleFromQuery()` before accessing `siteContent[locale]`.

### 4. **Dark mode not applying**
Ensure `ThemeProvider` wraps app and HTML has `suppressHydrationWarning` on root layout.

### 5. **Animation performance issues**
Use `will-change` sparingly; prefer GPU-accelerated properties (transform, opacity) in Framer Motion.

---

## Expert Tips

- **Type Safety:** Leverage TypeScript strict mode; define interfaces for all data shapes
- **Reusability:** Extract logic into `src/lib/` utilities; compose UI from small, focused components
- **SEO:** Update metadata in service pages; alternate lang links are configured
- **Performance:** Use React Server Components by default; `'use client'` only where interactivity needed
- **Testing:** Focus on data/utility functions; component testing via visual regression
- **i18n Pattern:** Never hardcode strings; always use `siteContent[locale]` for user-facing text

---

## Quick Refs

**Path aliases:** `@/*` → `src/*`  
**Port:** `3000`  
**Default locale:** `fr`  
**Supported locales:** `['fr', 'en']`  
**CSS framework:** Tailwind 4 + PostCSS 4  
**Component library:** shadcn/ui + Base UI
