# Doi Lom Elephant Rescue Sanctuary — Design System

Complete reference for rebuilding the Doi Lom design system in Figma (or any design tool).

**Pair with:** `design-tokens.json` (importable into Figma via Tokens Studio plugin)

---

## 1. Brand foundations

| | |
|---|---|
| **Personality** | Warm · Editorial · Heritage · Calm · Earthy |
| **Inspiration** | Mountain forest, slow tourism, family-owned sanctuary |
| **Avoid** | Cold corporate, neon/saturated digital, busy/clinical |

---

## 2. Color tokens

### Surfaces

| Token | Hex | Use |
|---|---|---|
| `bg` | `#fffdf9` | Page background — warm off-white |
| `paper` | `#fffdf9` | Card surface |
| `surface` | `#faf6ec` | Lighter tinted surface |
| `bone` | `#f5ede3` | Warm beige surface (chip backgrounds, soft sections) |
| `cream` | `#f2eae0` | More saturated warm section background |
| `amber-surface` | `#fbf5ee` | Anti-scam / warning surface |

### Borders & lines

| Token | Hex | Use |
|---|---|---|
| `line` | `#ead9c5` | Default border/divider |
| `line-amber` | `#edd9bf` | Amber-themed borders (warnings) |
| `line-sage` | `#c8ddb8` | Sage-themed borders (positive callouts) |

### Forest green family (brand primary)

| Token | Hex | Use |
|---|---|---|
| `leaf-50` | `#f0f5ec` | Lightest sage tint (callout bg) |
| `leaf-100` | `#c8ddb8` | Light sage (frame placeholder bg) |
| `leaf-200` | `#b4cfa6` | Mid-light sage |
| `leaf-300` | `#9dc27e` | Sage green |
| `leaf-400` | `#7a9e6c` | Mid forest |
| **`forest`** | **`#3a5c2a`** | **PRIMARY brand — CTA buttons, eyebrow-green, links** |
| `forest-dark` | `#2c4a1e` | Hover state of primary + hero overlay |
| `forest-darker` | `#1a3010` | Gradient overlay |
| `canopy` | `#0d1f08` | Tree silhouette |
| `overlay` | `#162810` | Modal backdrop |

### Earth & accent

| Token | Hex | Use |
|---|---|---|
| `clay` | `#d4b48a` | Warm earth tint (image placeholders) |
| `amber` | `#a0674a` | Shield/warning icon color |
| `warn-yellow` | `#f0e4c4` | Difficulty chip — Easy bg |
| `warn-orange` | `#f5d5b8` | Difficulty chip — Moderate bg |
| `warn-red` | `#c66454` | Destructive (form errors) |

### Text

| Token | Hex | Use |
|---|---|---|
| `ink` | `#1a1a14` | Primary heading + body |
| `soil` | `#3a3024` | Secondary body |
| `mute` | `#6b5f4a` | Muted (captions, labels) |
| `stone` | `#8a7560` | Lightest muted (small hints) |

### Footer (dark)

| Token | Hex | Use |
|---|---|---|
| `footer` | `#2c1f14` | Footer background |
| `footer-line` | `#3a2c1a` | Footer divider |

### Brand — WhatsApp

| Token | Hex | Use |
|---|---|---|
| `wa` | `#25d366` | WhatsApp green (FAB, buttons) |
| `wa-dark` | `#128c4d` | WhatsApp hover |

---

## 3. Typography

### Font families

| Token | Family | Use |
|---|---|---|
| `font-display` | **DM Serif Display** | h1-h5, hero, brand name, card titles |
| `font-body` | **Inter** (300–700) | Body text, buttons, labels, navigation |
| `font-mono` | JetBrains Mono | (reserved — not used yet) |

**Google Fonts CDN:**
```
https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Inter:wght@300..700&display=swap
```

### Heading scale (responsive via `clamp()`)

| Element | Size (min / preferred / max) | Line-height | Letter-spacing |
|---|---|---|---|
| `h1` | `2.5rem` / `5.5vw` / `3.4rem` | 1.08 | -0.018em |
| `h2` | `1.75rem` / `3.8vw` / `2.4rem` | 1.08 | -0.018em |
| `h3` | `1.25rem` / `2vw` / `1.5rem` | 1.08 | -0.018em |
| `h4` | `1.05rem` / `1.4vw` / `1.25rem` | 1.25 | -0.018em |

All headings: `font-family: DM Serif Display`, `font-weight: 400`, `color: ink`.

### Body / utility scale

| Use | Size | Weight | Family |
|---|---|---|---|
| **Body default** | 16px (`1rem`) | 400 | Inter |
| Body large | 1.05rem | 400 | Inter |
| Body small | 0.92rem | 400 | Inter |
| Caption | 0.85rem | 400 | Inter |
| Tiny | 0.74rem | 400 | Inter |
| **Eyebrow** | 0.66rem | 600 | Inter, uppercase, letter-spacing 0.18em |
| Button | 0.92rem | 500 | Inter |

### Eyebrow (overline label)

```
FONT-FAMILY: Inter
SIZE: 0.66rem (~10.5px)
WEIGHT: 600
LETTER-SPACING: 0.18em
TRANSFORM: uppercase
COLOR: mute (#6b5f4a)
VARIANT: .eyebrow-green → color: forest
```

---

## 4. Spacing scale (4/8dp system)

Tailwind default scale applied — common values used in the site:

| Token | Value | Common use |
|---|---|---|
| `0.5` | 2px | hairline gap |
| `1` | 4px | tight gap |
| `2` | 8px | chip gap |
| `3` | 12px | card padding inset |
| `4` | 16px | button padding |
| `5` | 20px | card padding |
| `6` | 24px | section gap inside cards |
| `8` | 32px | major card gap |
| `10` | 40px | section spacing |
| `12` | 48px | between major sections |
| `16` | 64px | page section break |
| `20` | 80px | hero padding |

### Container

- **max-width:** 1200px
- **inline padding:** clamp(1.25rem, 4vw, 2rem)
- **utility class:** `.wrap`

---

## 5. Border radius

| Token | Value | Use |
|---|---|---|
| `radius-sm` | 6px | Small chips, tags |
| `radius-md` | 8px | Buttons, form inputs |
| `radius-lg` | 12px | Cards, frames |
| `radius-xl` | 16px | Large cards, modals |
| `radius-2xl` | 20px | Hero containers |
| (full) | 9999px | Pills, chips |

---

## 6. Shadows

| Token | Value | Use |
|---|---|---|
| `shadow-soft` | `0 1px 2px rgba(26,26,20,.04), 0 4px 12px -4px rgba(26,26,20,.08)` | Subtle surface lift |
| `shadow-card` | `0 2px 4px rgba(26,26,20,.06), 0 12px 28px -12px rgba(26,26,20,.14)` | Default card shadow |
| `shadow-lift` | `0 18px 48px -20px rgba(26,26,20,.28)` | Card hover lift |

---

## 7. Component anatomy

### Buttons

| Variant | Height | Padding | Bg | Color | Border | Use |
|---|---|---|---|---|---|---|
| **`.btn-primary`** | 44px | 0 1.25rem | forest | white | none | Main CTA |
| `.btn-outline` | 42px | 0 1.15rem | transparent | ink | 1px line | Secondary |
| `.btn-outline-white` | 42px | 0 1.15rem | transparent | white | 1px white/50 | On dark hero |
| `.btn-whatsapp` | 44px | 0 1.25rem | wa (#25d366) | white | none | WhatsApp action |
| `.btn-ghost-light` | 40px | 0 1rem | leaf-50 | ink | none | Subtle CTA |

**All buttons:** `font-weight: 500`, `font-size: 0.92rem`, `border-radius: 8px (radius-md)`.

**Hover state primary:** `bg: forest-dark`, `translateY(-1px)`, shadow `0 8px 20px -6px rgba(58,92,42,.5)`.

### Chips

```
PADDING: 4px 10px
RADIUS: 9999px (full pill)
BORDER: 1px line
FONT-SIZE: 0.72rem
WEIGHT: 500
LINE-HEIGHT: 1.2
```

| Variant | Bg | Border | Color |
|---|---|---|---|
| `.chip` (default) | bone | line | soil |
| `.chip-sage` | leaf-50 | line-sage | forest |
| `.chip-easy` | warn-yellow | transparent | #8a6810 |
| `.chip-moderate` | warn-orange | transparent | #a04923 |
| `.trust-pill` | white/8% | white/32% | white/92% | (on dark hero) |

### Cards

```
.card
  border-radius: 12px (radius-lg)
  border: 1px line
  background: paper
  overflow: hidden

.card-lift (modifier — adds hover effect)
  transition: transform 300ms, box-shadow 300ms
  hover:
    transform: translateY(-3px)
    box-shadow: shadow-lift
```

### Frame (image placeholder container)

```
border-radius: 12px (radius-lg)
overflow: hidden
background: leaf-100 (sage placeholder)
```

### Form input

```
PADDING: 0.55rem 0.7rem
RADIUS: 7px
BORDER: 1px line
BG: paper
FONT-SIZE: 0.92rem
COLOR: ink

:focus
  border-color: forest
  box-shadow: 0 0 0 3px rgba(58,92,42,.12)
  outline: none
```

### Anti-scam notice (callout)

```
display: flex
gap: 0.6rem
background: amber-surface (#fbf5ee)
border: 1px line-amber (#edd9bf)
border-radius: radius-md (8px)
padding: 0.7rem 0.85rem
icon color: amber (#a0674a)
```

### Ulink (underlined link)

```
color: forest
font-weight: 500
text-decoration: none

::after (animated underline)
  position: absolute
  bottom: -2px
  height: 1px
  background: currentColor
  transform: scaleX(0)
  transition: transform 280ms ease-out

:hover::after
  transform: scaleX(1)
```

---

## 8. Icons (SVG library)

System: **Custom inline SVG** stored in `src/components/icons/Icon.astro` (50+ icons).

**Style:** Lucide-inspired stroke icons, `viewBox=0 0 24 24`, `stroke-width: 1.6`, `stroke: currentColor`, `fill: none` (most icons).

**Exceptions with custom viewBox:** `elephant` (512×512)

### Icon catalog (by category)

| Category | Icons |
|---|---|
| **Brand/Social** | `whatsapp`, `facebook`, `instagram` |
| **UI/Actions** | `x`, `x-circle`, `check`, `check-circle`, `plus`, `search`, `menu`, `chevron`, `chevron-down`, `chevron-up`, `arrow`, `arrow-left`, `external`, `copy`, `share`, `zoom`, `image` |
| **Info/Status** | `star`, `clock`, `pin`, `globe`, `language`, `mail`, `card`, `calendar`, `calendar-x`, `shield`, `certificate`, `user-circle` |
| **Nature/Theme** | `mountain`, `trees`, `paw`, `heart`, `apple`, `sun`, `cloud-sun`, `home`, `elephant` |
| **Stay/Tour stats** | `bed`, `ruler`, `eye`, `pool`, `users` |
| **Payment/Transport** | `transfer`, `qr`, `bank`, `car`, `taxi`, `bus` |
| **Misc** | `unlock`, `ban`, `fork` |

**Common sizes:** 11px (chip inline) · 12px (eyebrow) · 14px (button) · 16px (small CTA) · 18-22px (stat bar) · 48px (callout)

---

## 9. Animation

### Easing curves

| Use | Curve |
|---|---|
| **General UI** | `cubic-bezier(0.2, 0, 0.2, 1)` (custom ease-out) |
| Reveal | `cubic-bezier(0.2, 0, 0.2, 1)` |

### Timing

| Type | Duration | Notes |
|---|---|---|
| Micro-interaction (button hover) | 200ms | |
| Card lift | 300ms | |
| Reveal (scroll-in) | 600ms | opacity + translateY(12px) → 0 |
| Underline | 280ms | |

### Reveal pattern

Elements with `.reveal` class start:
```
opacity: 0
transform: translateY(12px)
transition: 600ms ease-out
```

When `.reveal.in` (toggled via IntersectionObserver):
```
opacity: 1
transform: none
```

**Respects `prefers-reduced-motion`** — disables animations.

---

## 10. Layout & responsive

### Breakpoints (Tailwind default)

| Name | Min-width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

### Common patterns

- **Mobile-first:** all base styles target mobile, then scale up
- **Grid columns:** 1 → 2 (sm+) → 3 (lg+) for card grids
- **Container max-width:** 1200px with adaptive horizontal padding

---

## 11. Sample component compositions

### Hero (dark image bg)

```
SECTION
  bg: forest-dark
  text: white
  background-image: hero photo (opacity 0.55-0.65)
  overlay: black/30%

  CONTAINER (.wrap)
    padding-block: 64px (mobile) → 80-112px (lg)

    EYEBROW (white)
    H1 (italic, white, font-display)
    P (white/85, body)
    BUTTON-PRIMARY + BUTTON-OUTLINE-WHITE
```

### Tour card

```
CARD (radius-lg, border-line, bg-paper, card-lift hover)
  IMG container (aspect 16:9, bg leaf-100, group-hover scale 1.05)
  CONTENT (padding 16px, flex-col)
    CHIPS row (duration, difficulty, group size)
    H3 (font-display, 1.15rem)
    P (0.88rem, soil, line-clamp-2)
    ICON CHIPS row (Elephant, Meals, Transport)
    BOTTOM (border-top, padding-top 16px)
      PRICE (font-display 1.3rem) + UNIT (0.7rem mute)
      BUTTONS (Read more outline + Book now primary)
```

### Stay/Tour stat bar

```
GRID (2 cols mobile → 4 cols md, divide-x line)
  CELL (padding 16px, text-center)
    ICON (18px, forest)
    VALUE (0.92rem, font-medium, ink)
    LABEL (0.72rem, mute, tracking-wide)
```

### Program note callout

```
DIV (radius-xl, bg-leaf-50, border 1px line-sage)
  PADDING: 20px (mobile) → 24px (lg)
  ICON (48px, forest-dark)
  TEXT (Inter body, forest-dark, font-medium, leading-relaxed)
```

---

## 12. Page sections cadence (background rhythm)

Apply alternating section backgrounds to create rhythm:

| Section type | Background |
|---|---|
| Hero | dark photo + black overlay |
| Primary content | `bg` (paper) |
| Featured/accent | `cream` + border-y |
| Secondary content | `bg` (paper) |
| Trust/social | `cream` or `bone` |
| CTA banner | `forest` with text-white |
| Footer | `footer` (dark brown) |

---

## 13. How to rebuild this in Figma

### Step 1: Install Tokens Studio plugin
[https://tokens.studio/](https://tokens.studio/) — free Figma plugin for design tokens.

### Step 2: Import `design-tokens.json`
1. Open Figma → run Tokens Studio
2. Import `design-tokens.json` (in this repo root)
3. Click **"Apply to document"** → tokens become Figma Variables + Styles

### Step 3: Create local styles
- **Text styles:** Display/H1, Display/H2, Display/H3, Body/Default, Body/Small, Caption, Eyebrow
- **Color styles:** mapped from tokens (Brand/Forest, Brand/Forest-dark, Surface/Paper, etc.)
- **Effect styles:** Shadow/Soft, Shadow/Card, Shadow/Lift

### Step 4: Build components
Build as **Auto Layout** components:
- Button (with variants — primary/outline/whatsapp/ghost)
- Chip (variants — default/sage/easy/moderate)
- Card (with auto-layout content)
- Form Input
- Icon (use Lucide icons free in Figma → swap to match SVG)
- Stat cell
- Trust pill

### Step 5: Page templates
Use the components to layout the 8 page types:
- Home · Our Elephants · Tours (listing + detail) · Stays (listing + detail) · Gallery · About · FAQ · Contact

---

## 14. Live reference

🌐 **Dev preview:** `http://localhost:4321/` (when `npm run dev` is running)
🗂 **Code repo:** This project root
🎨 **CSS source:** `src/styles/global.css`
🧩 **Components:** `src/components/`
📄 **Pages:** `src/pages/`

---

_Last updated: 2026-06-14 · maintained alongside `design-tokens.json`_
