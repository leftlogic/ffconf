# FFConf — Style Guide

A catalogue of the visual language used across [ffconf.org](https://ffconf.org),
captured from the live stylesheets in [`src/css/`](../src/css) and the Eleventy
layouts in [`src/_includes/layouts/`](../src/_includes/layouts). Use it as the
reference for future design work — new pages, components, and any consolidation
of the CSS.

Companion files:

- **[`src/css/tokens.css`](../src/css/tokens.css)** — the **live source of
  truth**. Every value below as named CSS custom properties (`--ff-*`), loaded
  before `base.css` in [`layouts/base.njk`](../src/_includes/layouts/base.njk).
  It also defines the legacy aliases (`--primary`, `--salmon`, …) the existing
  stylesheets reference, so it is the single place those variables are declared.
- **[`tokens.json`](tokens.json)** — the same set, machine-readable, for
  tooling / Figma / build pipelines. Mirror of `tokens.css`; keep in step.

> **Status note.** `tokens.css` is wired into the build and is the only place
> the CSS custom properties are declared — `base.css` no longer carries its own
> `:root`. The `--ff-*` superset is fully defined; the **values are still
> hard-coded inline** throughout the page-scoped sheets, so migrating those
> rules to reference the tokens is the remaining (incremental) work — see §13.

---

## 1. Brand character

FFConf is a developer/JavaScript conference in Brighton, UK. The visual tone is
**clean, warm, and confident**: lots of white space, a single hot accent
(salmon), near-black text, soft grey panels, minimal chrome, gently rounded
corners, and fast, subtle motion. No drop shadows on content — depth is reserved
for transient UI (menus, dropdowns).

A signature detail: the body face **BasierSquare** ships with a custom ligature
that renders `FFC` as a stylised `ffc` lockup ([`base.css:1`](../src/css/base.css)).
A hidden alternate (`Inter`) can be toggled with `?font=inter`.

---

## 2. Colour

### Brand

| Token | Value | Swatch role |
| --- | --- | --- |
| `--ff-color-salmon` | `#ff7063` | The accent. CTAs, active pills, link-hover, blockquote rule, selected nav underline, focus rings. |
| `--ff-color-salmon-dark` | `#c04001` | Hover/pressed for salmon surfaces (buttons, pill links). |

### Ink (text)

| Token | Value | Use |
| --- | --- | --- |
| `--ff-color-ink` | `#333333` | Default body + heading text (`--primary`). |
| `--ff-color-ink-muted` | `#796a6a` | Secondary/meta: footer, captions, dates, feed meta (`--dark-grey`). |
| `--ff-color-ink-quote` | `#767676` | Blockquote body only. |
| `--ff-color-ink-code` | `#272727` | Code foreground. |

### Surface

| Token | Value | Use |
| --- | --- | --- |
| `--ff-color-white` | `#ffffff` | Page background, cards on top of grey bands. |
| `--ff-color-box` | `#f4f4f4` | Default soft panel: pills, inputs, list cards, job/article rows (`--box`). |
| `--ff-color-box-alt` | `#f9f9f9` | `.image-and-text` feature block. |
| `--ff-color-code-bg` | `#f3f3f3` | `<pre>`/`<code>` fill; schedule table row borders. |
| `--ff-color-mark-bg` | `#dddddd` | `<mark>` callout banner. |
| `--ff-color-overlay-dark` | `#1e1e1e` | Foot of the talk-card image gradient. |

### Line / border

| Token | Value | Use |
| --- | --- | --- |
| `--ff-color-border` | `#efefef` | Hairlines, card borders, dividers (`--light-grey`). |
| `--ff-color-border-strong` | `#cccccc` | Code-block + playlist-tab borders. |

### Notes & gotchas

- The accent is referenced both as the `--salmon` variable **and** as raw
  `#ff7063` / rainbow stops in a couple of places — prefer the token.
- Dead values to ignore (commented-out in source): `#7e7070`, `#979797`,
  `#D95E39`.
- The `.shimmer` button uses a full-spectrum rainbow gradient — it's a one-off
  novelty, not part of the palette.
- **No dark mode** exists today.

---

## 3. Typography

### Families

- **Body / UI:** `BasierSquare, sans-serif` (`--font-family`). Self-hosted
  woff2/woff, weights 400 + 500, preloaded in the base layout. Carries the
  `FFC → ffc` ligature.
- **Alternate:** `Inter, sans-serif` via `html.inter` (set with `?font=inter`,
  persisted in `localStorage` as `ffconf-font=inter`).
- **Mono:** `'ubuntu mono', menlo, monaco, consolas, courier, 'courier new',
  'lucida console', monospace` — code blocks.

### Weights

`400` regular (body) · `500` medium (**headings, links, nav, card titles**) ·
`600` strong (`<strong>`). Everything is `font-weight: normal` by default (set
on `*`), so weight is opted into deliberately.

### Scale

Sizes are authored in `px`. Most type steps up at the **700px** breakpoint.

| Token | px | Where |
| --- | --- | --- |
| `--ff-text-2xs` | 11 | Feed-card meta line |
| `--ff-text-xs` | 12 | Footer |
| `--ff-text-s` | 13 | Feed-card talk title |
| `--ff-text-sm` | 14 | Body copy @ mobile; small print |
| `--ff-text-base` | 16 | Secondary body; form controls; feeds UI |
| `--ff-text-md` | 18 | Body @ ≥700px; nav links; buttons; `.back` |
| `--ff-text-lg` | 22 | Sub-headings (h2 in talk/links); talk-card title; home h2 @ mobile |
| `--ff-text-xl` | 24 | Job `h1` |
| `--ff-text-2xl` | 32 | `h1`; article section `h2`; newsletter `h2` |
| `--ff-text-3xl` | 42 | Home hero `h2` @ ≥700px |
| `--ff-text-4xl` | 56 | `h1` @ ≥700px; home hero `h2` @ ≥900px |

Fluid exceptions: article `h1` uses `clamp(2.4rem, 6vw, 3.6rem)` line-height
([`article.css`](../src/css/article.css)).

### Line height

`1.2` display (`h1`) · `1.27` headings/card titles · `1.33` dense lists ·
`1.4` body paragraphs · `1.3` global default (set on `*`).

### Measure

Long-form text is capped at **`70ch`** (`--ff-max-prose`) — articles, talk
descriptions, blockquotes, simple pages.

---

## 4. Spacing

A loose **4 px grid**; `8` and multiples dominate. `32px` is the workhorse —
it's the default page gutter and card padding. `18px` / `28px` appear in body
rhythm (off-grid but intentional).

`4 · 8 · 12 · 16 · 18 · 20 · 24 · 28 · 32 · 40 · 48 · 60 · 68 · 80 · 88 · 100`

Gutters:

- `--ff-gutter` **32px** — default content/section padding.
- `--ff-gutter-mobile` **20px** — applied ≤700px.
- `--ff-gutter-wide` **40px** — `main`/footer padding ≥700px.

---

## 5. Radius

| Token | Value | Use |
| --- | --- | --- |
| `--ff-radius-xs` | 2px | Cards, images, soft panels (the default rounding) |
| `--ff-radius-sm` | 3px | Code blocks |
| `--ff-radius` | 4px | `img.soft`, content boxes, schedule callouts |
| `--ff-radius-md` | 6px | Feed-card sub-elements (photo, latest pill) |
| `--ff-radius-lg` | 8px | Feeds filter body, playlist tabs |
| `--ff-radius-pill` | 9999px | Pills, buttons, inputs (`999px` is used interchangeably — standardise on `9999px`) |
| `--ff-radius-circle` | 50% | Avatars |

---

## 6. Elevation (shadow)

Shadows appear **only on transient/floating UI**, never on static content.

| Token | Value | Use |
| --- | --- | --- |
| `--ff-shadow-dropdown` | `0 20px 20px 0 rgba(51,51,51,.2)` | Filter flyout |
| `--ff-shadow-menu` | `0 7px 10px 0 rgba(0,0,0,.11)` | Open mobile menu |
| `--ff-shadow-card` | `0 4px 12px 0 rgba(51,51,51,.08)` | Feeds filter body |

Selection state uses a 1px salmon ring instead of a shadow
(`box-shadow: 0 0 0 1px var(--salmon)` on checked feed cards).

---

## 7. Motion

Transitions are short and `ease-out`. Colour fades on links/hover; transforms on
the mobile menu and logo-list hover lift.

| Token | Value | Use |
| --- | --- | --- |
| `--ff-dur-fast` | 60ms | Checkbox tick |
| `--ff-dur-quick` | 80ms | Feed-card border/box hover |
| `--ff-dur-snappy` | 100ms | Button hover (`ease-in`) |
| `--ff-dur` | 150ms | Link colour transition |
| `--ff-dur-slow` | 200ms | Mobile menu slide |

Keyframe animations: `glowing` (shimmer button, 10–80s rainbow sweep) and
`textExplosion` (`.attention`, a 1.2s glow/scale pulse for highlighting copy).
`scroll-behavior: smooth` globally, disabled under `html.quick`.

---

## 8. Layout & responsive

- **Shell:** `<body>` is `max-width: 1200px`, centred, with y-scroll-snap.
- **Per-page caps:** prose `70ch` · talk `920px` · feeds `1100px`.
- **Breakpoints** (mobile-first; CSS can't tokenise these):

  | px | Effect |
  | --- | --- |
  | 460 | Feeds → single column, hide card icons, tighter gutters |
  | **700** | **Primary switch** — gutters, type scale, nav (hamburger → bar), most layouts |
  | 720 | Feeds → 2 columns; playlist heading → row |
  | 800 | Posts → 2 masonry columns |
  | 840 | Wider menu item spacing |
  | 900 | Home hero `h2` → 56px |

  Newer stylesheets (`feeds`, `talk`, `article`, `playlist`) use **nested**
  `@media` inside rules; older ones keep media queries in
  [`mq.css`](../src/css/mq.css). Both patterns are live.

---

## 9. Component catalogue

Each entry lists the selector(s) and the file to read for the canonical markup.

### Navigation & chrome

- **Header / menu** — `#menu` ([`base.css`](../src/css/base.css),
  [`mq.css`](../src/css/mq.css)). Sticky logo, horizontal nav ≥700px collapsing
  to a slide-down hamburger panel below. Selected item gets a 2px salmon
  underline. JS toggles `.menu-open` on `<html>`.
- **Footer** — `.body > footer`. "Over the years" year links,
  `.footer-links` (pipe-separated), Left Logic SVG logo, muted 12px text.
- **Skip link** — `.skip`, off-screen until focused, then salmon-on-ink chip.

### Pills & buttons

- **`.pill`** — rounded grey chip (`--box`), 16px. `.pill.active` → salmon fill,
  white text. On grey cards the pill flips to white (`.post-item .pill`).
- **`.pill-button`** — solid salmon CTA, 18px, `15px 28px`, hover →
  `--salmon-dark`. Disabled (feeds) → grey.
- **`.pill-cta`** — same look used inside article body, `fit-content`, centred.
- **`.checkbox-pill`** — a `.pill` wrapping a hidden checkbox; `:checked`
  fills salmon. Used for filters.
- **`.pill-list`** — flex-wrap row of pills; stacked lists divided by a
  `--light-grey` top border.
- **`.link-button`** — text-only underlined action (feeds "select all").
- **`.shimmer`** — novelty rainbow-border button.

### Cards

- **`.talk-card`** ([`base.css`](../src/css/base.css)) — 360px image tile with a
  dark-to-`#1e1e1e` gradient that turns salmon on hover; white title (22px) +
  pill. 45% width / 2-up ≥700px.
- **`.article-list li`** / **`.job-list li`** — grey (`--box`) rows, 18px medium,
  stack on mobile → row ≥700px, 2px radius. External links get an icon suffix.
- **`.post-item`** ([`posts.css`](../src/css/posts.css)) — social-feed card in a
  2-column masonry; avatar header, `1.25em` emoji, multi-image CSS grid
  (1–4 image layouts).
- **`.feed-card`** ([`feeds.css`](../src/css/feeds.css)) — the most elaborate
  component: CSS-grid layout (photo / who / talk / latest / checkbox), custom
  SVG-tick checkbox via `:has()`, salmon ring when selected, hover border.
- **`.job-single aside`** — sticky-ish info panel on the job detail grid.

### Forms & inputs

- **Newsletter** — `.newsletter` band: salmon top/bottom borders, decorative
  corner SVGs, pill-shaped grey inputs with a salmon focus underline
  ([`base.css`](../src/css/base.css)).
- **Feeds search** — pill-shaped search field; `details/summary` filter that
  turns salmon when `[open]`.

### Content blocks

- **Blockquote** — 4px salmon left border, italic `#767676`, capped `50ch`.
- **Code** — `<pre>`/`<code>` on `#f3f3f3`, `#ccc` border, mono stack
  ([`details.css`](../src/css/details.css)).
- **Schedule table** — `#schedule + table`, headerless, tabular-nums first
  column, hairline rows.
- **`.image-and-text`** — `#f9f9f9` two-column feature (image | text) ≥700px.
- **`<mark>`** — full-width centred `#ddd` banner (used as an inline notice).
- **`.back`** link — back-arrow SVG + label, used atop detail pages.
- **`.ext`** — appends a faded external-link glyph after off-site links.

### Media & galleries

- **`.speaker-image`** — `aspect-ratio: 1.6` cover image on talk pages.
- **Media headings** — `.audio/.video/.slide h2::before` swap in icon SVGs.
- **`.photos-list`** — CSS columns masonry (2 → 4 cols ≥700px).
- **`.playlist-tab`** — Spotify/YouTube radio tabs with bottom-rounded chips.

### Utilities

`.solid-box` · `.centre` · `.visuallyhidden` / `.u-hiddenVisually` · `.skip` ·
`[hidden]` (forced `display:none`) · `.col`/`.grid` (column layouts) ·
`img.soft` (rounded, fluid).

---

## 10. Iconography

Single-colour SVGs in [`src/images/`](../src/images), sized ~12–30px and placed
as `background-image` or `::before`/`::after`:

- **Wayfinding:** `back.svg`, `arrow-white.svg`, `arrow-coral.svg`,
  `external.svg` / `external-link.svg`, `close.svg`, `hide.svg`, `filter.svg`.
- **Content:** `calendar.svg`, `post.svg`, `newsletter.svg`, `audio.svg`,
  `video.svg`, `slides.svg`.
- **Social:** `twitter.svg`, `bsky.svg`, `linkedin.svg`, `mastodon.svg`,
  `github.svg`, `rss.svg`, `spotify-icon.svg`.
- **Brand:** `logo.svg` (menu), `leftlogic.svg` (footer).

Social links on talk pages are matched by `href` prefix and given the right
icon automatically ([`base.css` `.talk .urls`](../src/css/base.css)) — note the
long Mastodon-instance allow-list there.

---

## 11. Page-type catalogue

| Page type | Body/root | Layout | Key CSS | Notes |
| --- | --- | --- | --- | --- |
| **Home** | `#home` | base | [`home.css`](../src/css/home.css) | Salmon hero band with 3 speaker photos, giant fluid `h2`, next-event/latest-post links, talk-text-cards row. |
| **Talk** | `.talk` | base | [`talk.css`](../src/css/talk.css) | Speaker image, audio/video/slide media, `70ch` descriptions, links list, AI session-summary `details`. Max 920px. |
| **Article** | `.article` | `article.njk` | [`article.css`](../src/css/article.css) | Long-form `70ch`, responsive `h1` clamp, embedded video, `.image-and-text`, `.pill-cta`, coupon-link styling. |
| **Articles index** | `.articles` | base | [`articles.css`](../src/css/articles.css) | Grey list rows, tag pills, external-link affordance. |
| **Posts (social)** | `.post-list` | base | [`posts.css`](../src/css/posts.css) | 2-col masonry, avatars, 1–4 image grid collages. |
| **Jobs** | `.job-list` / `.job-single` | base | [`jobs.css`](../src/css/jobs.css) | List rows + detail grid (header/aside/body), sticky aside panel, `.button` CTA. |
| **Feeds** | `.feeds` | base | [`feeds.css`](../src/css/feeds.css) | RSS subscription builder: search, `details` filter, selectable grid cards, custom checkboxes. Max 1100px. |
| **Photos** | `.photos` | base | [`photos.css`](../src/css/photos.css) | Column masonry gallery. |
| **Playlist** | — | `playlist.njk` | [`playlist.css`](../src/css/playlist.css) | Spotify/YouTube radio-tab switcher. |
| **History / about** | `.history` | base | [`history.css`](../src/css/history.css) | Team photo, `.involved` people list, `.logo-list` sponsor grid with hover-lift. |
| **Details / schedule** | `.article .body.details` | `text.njk` | [`details.css`](../src/css/details.css) | Imports `article.css`; adds code blocks, schedule table, offline-state hooks; links render salmon. |
| **Simple pages** | `.article` | `simple.njk` | [`simple-page.css`](../src/css/simple-page.css) | Code of conduct, privacy, terms, inclusion (has a decorative bg image), etc. `70ch`, centred. |

### How CSS is wired

The base layout always loads [`base.css`](../src/css/base.css) first and
[`mq.css`](../src/css/mq.css) last; each page/layout injects its own sheet via a
`css:` front-matter key (string or array) into
[`layouts/base.njk`](../src/_includes/layouts/base.njk). So **`base.css` + `mq.css`
are global; everything else is page-scoped.**

---

## 12. Accessibility conventions

- Visible **skip link** to `#main-content`.
- `:focus-visible` salmon outline on interactive feed cards; salmon focus
  underline on newsletter inputs.
- `.visuallyhidden` / `.skip` / `.u-hiddenVisually` for screen-reader-only text.
- `abbr` carries `title`; feeds use dotted-underline `abbr` with `cursor:help`.
- Decorative icons are CSS backgrounds (not content); meaningful images carry
  `alt`.

**Watch-outs for future work:** salmon `#ff7063` on white is ~2.7:1 — fine for
large text and non-text accents, **below 4.5:1 for body-size text**, so don't use
it for small copy. Muted ink `#796a6a` on white passes for normal text (~5.3:1).

---

## 13. Adopting the tokens

1. ✅ **Done** — [`src/css/tokens.css`](../src/css/tokens.css) is loaded before
   `base.css` in [`layouts/base.njk`](../src/_includes/layouts/base.njk), and
   `base.css`'s old `:root` has been removed. The legacy aliases mean nothing
   broke; the variables now have one home.
2. Migrate hard-coded values to `--ff-*` opportunistically as you touch each
   sheet — start with colours and radii (highest duplication). e.g. replace a
   stray `#f4f4f4` with `var(--ff-color-box)`, a `2px` radius with
   `var(--ff-radius-xs)`.
3. Keep this document and [`tokens.json`](tokens.json) in step with
   `tokens.css` when the language evolves; treat a new raw hex/size in a PR as a
   prompt to add (or reuse) a token.
