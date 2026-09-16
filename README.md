# Synergy Advisors

The Synergy Advisors website, built with [Astro](https://astro.build) and edited
in [CloudCannon](https://cloudcannon.com). It is a static site: every page is
rendered to plain HTML at build time.

## Running it locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # writes the site to dist/
npm run preview  # serves dist/
```

Node 20.19 or newer is required.

## How the project is organised

```
data/                    Shared content, edited in CloudCannon under "Site content"
  site.yml               Company details, logos, top bar, SEO defaults
  navigation.yml         Header navigation and the header button
  footer.yml             Footer columns and the legal bar
  tombstones.yml         Every transaction tombstone (Transactions + homepage)
  transaction-filters.yml Market/sector/service labels used by the filters
  case-studies.yml       Case studies on the Transactions page
  team.yml               Team member biographies

src/
  content/pages/*.md     One file per page: SEO, layout options, page sections
  pages/[slug].astro     Turns each of those files into a page
  pages/sitemap.xml.ts   Builds sitemap.xml from the pages
  layouts/BaseLayout     Head, top bar, header, footer, closing call to action
  components/PageBuilder Renders a page's list of sections
  components/blocks/     One component per section type
  lib/                   Small helpers (data loading, markdown, links)
  scripts/register-components.js  Registers blocks with CloudCannon's editor

public/                  Copied to the site root as-is
  styles.css             The site's stylesheet, unchanged from the original site
  site.js                Navigation, scroll animations, transaction filters,
                         case study anchors, contact form
  assets/                Images, logos and tombstone artwork
```

### URLs

`astro.config.mjs` sets `build.format: "file"`, so `src/content/pages/firm.md`
is published at `/firm.html` — the same URLs the previous static site used.
Adding a page in CloudCannon publishes it at `/<its-slug>.html` automatically.

### Page sections

Each page's `content_blocks` list names the sections that make up the page.
Every entry has a `_name` matching a component in `src/components/blocks/`, so
editors can add, remove and reorder sections without touching HTML. There are
22 section types, from the home hero through to the transaction explorer.

Adding a new section type means three things:

1. Add `src/components/blocks/MyBlock.astro`.
2. Add it to the map in `src/components/PageBuilder.astro` and to
   `src/scripts/register-components.js`.
3. Add an entry under `_structures.content_blocks` in `cloudcannon.config.yml`
   so it appears in the "add section" menu.

### Transactions

`data/tombstones.yml` is the single source of truth for transaction data. Both
the Transactions page and the homepage's featured grid read from it, so a
transaction is never described in two places.

Each entry lists the sectors it belongs to; the Healthcare / General Middle
Market filter follows from those, as does the transaction's market label.

There are two independent ordering concepts:

- **List order** — the order of the array. This is what visitors see on the
  Transactions page with no sector filter selected, and it is the tie-breaker
  everywhere else. Editors drag items in CloudCannon to change it.
- **`sector_order`** — an optional per-sector position that preserves the
  hand-curated ordering inside a single sector filter, which differs from list
  order for four of the seven sectors. A tombstone with no entry for a sector
  appears at the end of that sector's list, so it can be left alone.

`featured` adds a transaction to the homepage grid and `featured_order` sets its
position there (lowest first, unnumbered last). The homepage block's "Maximum to
show" caps how many appear.

The whole grid is rendered at build time, so the tombstones are in the HTML for
search engines. `public/site.js` only handles filtering and sorting — adding a
transaction never requires a code change.

## CloudCannon

`cloudcannon.config.yml` configures the two collections (Pages and Site
content), the inputs shown for every field, and the section types available in
the page builder. `.cloudcannon/schemas/page.md` is the starting point for new
pages.

Build settings in CloudCannon:

- **Build command:** `npx astro build`
- **Output path:** `dist`
- **Install command:** `npm install`

Editable Regions are wired up throughout: headings, intro paragraphs and images
can be edited directly on the page in the Visual Editor, and sections can be
added, removed and reordered from the page itself. Longer prose is edited in
the side panel.
