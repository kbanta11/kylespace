# kylespace

A MySpace-homage personal site — blue chrome bar, module cards with uppercase header
strips, profile photo + mood, blurbs, Top 8 — with five switchable personality themes.

CRA + TypeScript + react-router. No UI framework: one stylesheet, one CSS-variable theme
layer.

```bash
npm start        # dev server on http://localhost:3000
npm run build    # production bundle into build/
npm run add-link # add a project (fetches its og:image, appends to projects.ts)
npm run make-favicon # regenerate the icon set from public/favicon.svg
```

## Editing content

All copy lives in typed data files under `src/data/` — no JSX to touch.

| File | What it drives |
| --- | --- |
| `profile.ts` | Name, subtitle, mood, avatar, About Me copy, contact links |
| `projects.ts` | Every card on `/work` + the profile's top-projects rows |
| `blurbs.ts` | The "kyle's blurbs" card (books, movies, tv, music, now building) |
| `top8.ts` | The Top 8 tiles, the footnote, and `showTop8` to hide the card |
| `photos.ts` | The `/photos` grid |
| `experience.ts`, `education.ts`, `stack.ts` | The `/resume` page |

### Projects

Every card on `/work` opens its own detail route at `/work/<slug>`, rendered as a native
`<dialog>` over the still-mounted grid. The route is real: it is linkable, the back button
closes it, and the copy is in the HTML rather than hidden behind a click. `status` drives
the tag and what the detail overlay says when there is no `url` (`not out yet` for
`unreleased`, `no live site` otherwise); the outbound link lives inside the overlay, so
cards without a site are still worth clicking.

Per project, the overlay shows:

- `bullets` — 2-4 scannable points. A bullet starting with `↳` renders in mono as a
  visible TODO, same convention as a placeholder `description`.
- `stack` — tech chips. Only list what the project actually used; leave it off otherwise.

`topProjectSlugs` picks the four rows shown on the profile.

Thumbnails are **16:10, never square** — square crops cut off og:images. Per project, in
order of preference:

1. `image` + `imageFit: 'cover'` — the site's og:image
2. `image` + `imageFit: 'contain'` + `imageBg` — a logo on the brand color
3. no `image` — renders the striped placeholder slot with `placeholderLabel`

`npm run add-link` handles the first case for you: it fetches the URL, finds the best
og:image or icon, caches it into `public/link-icons/`, and appends the entry to
`projects.ts` at the `// ks:add-link` marker. Don't hotlink remote images.

## Theming

Five themes: `regular`, `surf`, `titans`, `nerd`, `hike`. The choice persists to
localStorage, and `?theme=<id>` in the URL wins over it (the old `surfs-up`, `titan-up`,
`nerd-mode`, `lets-hike` slugs still resolve).

`src/theme/themes.ts` holds one token set per theme, written onto `.ks-root` as CSS custom
properties. Every rule in `src/styles/kylespace.css` reads `var(--token)` and knows nothing
about which theme is active. To add a theme, add an entry to `THEMES` and `THEME_ORDER`.

Token contract: `--bg --chrome --accent --accent-ink --cta --surface --soft --ink --muted
--border --name --link --font`.

`--cta` is deliberately separate from `--accent`: in Titan Up the accent is the same navy
as the backdrop, so navy-on-navy buttons and the active nav tab disappeared. Don't collapse
them.

Photo backgrounds sit under a per-theme scrim so cards stay legible, on a fixed layer
(`.ks-backdrop`) rather than `background-attachment: fixed`, which iOS Safari ignores.
`prefers-reduced-data` falls back to the flat gradient.

## Icons

`public/favicon.svg` is the only file you edit — a white lowercase `ks` on the `--chrome`
blue. `npm run make-favicon` rasterizes it into `favicon.ico` (16/32/48), `logo192.png`,
`logo512.png`, and `apple-touch-icon.png`, all of which are committed.

The Apple icon is rendered with the corner radius zeroed out, because iOS applies its own
mask and would otherwise round already-rounded corners. `sharp` is a devDependency and
never reaches the bundle.

The mark is deliberately light-stroked: at 16px a heavier `ks` closes up its counters and
reads as a blob in the tab strip. If you ever want it unmistakable at tab size, a single
`k` is the move — drop the third `<path>` and widen the remaining two.

## Type

- **Archivo** — display and body
- **JetBrains Mono** — metadata, micro-labels, placeholders (and all body copy in Nerd Mode)
- **Tahoma** — module header strips, nav tabs, buttons. This is the MySpace tell; it is not
  a bug, don't "fix" it to Archivo.

## Deploy

Netlify, from `main`. `netlify.toml` has the SPA fallback so every route survives a direct
visit or refresh.
