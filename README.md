# abbasq.com

Personal portfolio for Abbas Qadir — BSc Computer Science graduate, software developer.

Single-page site: hero, selected work, technical skills, about, contact.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router), React 19, TypeScript |
| Styling | Tailwind CSS v4 (CSS-first `@theme` in `src/app/globals.css`) |
| Fonts | Space Grotesk (display) + Inter (body), self-hosted via `next/font` |
| Hosting | Vercel |
| Contact form | FormSubmit (AJAX endpoint) |

## Local development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — also runs lint + typecheck
npm run lint
```

## Where things live

```
src/
├── app/
│   ├── layout.tsx      metadata, fonts, JSON-LD (Person), reveal bootstrap
│   ├── page.tsx        section order
│   ├── globals.css     palette tokens, type scale, animations
│   ├── icon.svg        favicon (apple-icon.png + favicon.ico alongside)
│   ├── manifest.ts     web app manifest
│   ├── robots.ts       robots.txt
│   └── sitemap.ts      sitemap.xml
├── components/         Navbar, Hero, Work, Skills, About, Contact, Footer
└── lib/site.ts         ALL content — identity, projects, skills, timeline
```

**`src/lib/site.ts` is the single source of truth for content.** Adding a
project or a skill means editing that file, not the JSX.

## Conventions worth knowing

**Content is visible by default.** Scroll reveals are driven by an inline
script in `layout.tsx` that adds `.js` to `<html>` and then owns the whole
reveal lifecycle via `IntersectionObserver`. Nothing waits on the React bundle
downloading or hydrating, so the page still reads correctly with JavaScript
off. All motion sits inside `@media (prefers-reduced-motion: no-preference)`.

**No `overflow-x: hidden` on `html`.** It was previously masking a real
horizontal-overflow bug. Check for regressions rather than re-adding it — see
the overflow check in the layout notes below.

**Colour.** Defined once as custom properties on `:root` and exposed to
Tailwind through `@theme inline`. Use `text-ink` / `bg-ground` / `text-accent`
rather than raw hex or Tailwind's default palette, so the scheme stays
changeable in one place.

**ESLint.** `next/typescript` is deliberately not extended — routed through
`FlatCompat` it resolves `@typescript-eslint` v8 via its legacy entry point and
dies with `couldn't find the config ./configs/base`. `typescript-eslint`'s own
flat config gives the same rules. See the comment in `eslint.config.mjs`.

## Checking a change

```bash
npm run build && npx next start -p 3123
npx lighthouse http://localhost:3123 --chrome-flags="--headless=new" --view
```

Verify no horizontal overflow at 375 / 390 / 768 / 1440 px — `scrollWidth`
should equal `clientWidth` at every width.

## Images

Source images live in `public/` and are served through `next/image`, which
emits AVIF/WebP (configured in `next.config.ts`). Keep sources roughly 2× their
largest rendered size; every `fill` image needs a `sizes` attribute or the
browser downloads the 3840px variant.
