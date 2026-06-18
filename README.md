# Doi Lom Elephant Rescue Sanctuary — website

Brochure-style marketing website for Uncle Tony's ethical elephant sanctuary in Mae Taeng, Chiang Mai.

**Stack:** Astro 5 · Tailwind CSS v4 · TypeScript · static site (zero JS framework dependencies on the client side, ~5 KB of vanilla JS for the scroll-reveal and gallery filter).

## Run locally

```bash
npm install
npm run dev          # http://localhost:4321
```

## Build for production

```bash
npm run build        # output -> ./dist
npm run preview      # preview the production build locally
```

Drag-and-drop `dist/` onto Netlify or Cloudflare Pages. Or connect this repo to Vercel and it deploys automatically.

## Content edits

Everything you'd want to change lives in `src/data/`:

| File | What's in it |
| --- | --- |
| `site.ts` | WhatsApp number, founder name, location, hours, social links, brand stats |
| `elephants.ts` | The herd — names, ages, rescue stories, photos |
| `tours.ts` | All four programs — prices, itineraries, inclusions |
| `stays.ts` | The three cottages — features, prices, photos |
| `faq.ts` | Frequently asked questions, grouped by topic |
| `testimonials.ts` | Guest quotes |

### Replacing the WhatsApp number

Update `site.ts`:

```ts
whatsapp: {
  number: "+66 81 234 5678",     // displayed
  raw: "66812345678",            // used in wa.me link, digits only
  link: "https://wa.me/66812345678",
  ...
}
```

All `Book on WhatsApp` buttons across the site read from this one place.

### Replacing images

All images currently use Unsplash placeholders. Search for `images.unsplash.com` and swap each URL with the final asset path (or move them into `/public/img/` and reference as `/img/elephant-1.jpg`).

## Design system

The visual system lives in `src/styles/global.css` as CSS custom properties — terracotta / clay / olive / cream palette + Fraunces & Inter typography. Tailwind utility classes consume these via `var(--color-x)` references throughout the components.

## Pages

```
/                 Home
/our-elephants    Eleven elephants, full stories
/tours            Four programs · half-day → volunteer week
/stays            Three cottages
/gallery          Filterable photo masonry
/faq              Grouped FAQ with deep-link table of contents
/about            Tony's story, principles, timeline, team
/contact          WhatsApp-first contact, illustrated map
```

## Accessibility & performance

- All interactive elements meet 44×44pt touch target and 4.5:1 contrast.
- `prefers-reduced-motion` disables all animations.
- Images use `loading="lazy"` (and `fetchpriority="high"` only on the homepage hero).
- The site is statically rendered — there is no JavaScript framework running on the client.

## License

Designed and built for the Suriya family. The code is theirs to keep, adapt, and self-host.
