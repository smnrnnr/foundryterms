# Type Foundry Terms

A reference database comparing how type foundries license their fonts — who
needs a licence, how desktop and web use are priced, logo and trademark
surcharges, trials, and discounts. Made for graphic designers and studios.

Live: **https://foundryterms.com**

## Tech

A static site built with [Astro](https://astro.build). No framework, no
database — all content lives in JSON files under `src/data/`, and the Astro
templates render them to static HTML.

## Develop

Requires [Node.js](https://nodejs.org) 18+.

```sh
npm install     # install dependencies
npm run dev     # local preview at http://localhost:4321
npm run build   # build the static site into dist/
```

## Content

Content is kept separate from presentation:

- `src/data/foundries.json` — the foundries (table cells, key facts, detail blocks)
- `src/data/columns.json` — the overview table columns
- `src/data/guide.json` — the buying guide
- `src/data/legal.json` — legal notice and privacy policy

Each foundry entry is sourced from that foundry's published licence terms. The
site is a reference guide, not legal advice — always refer to the current EULA
of the respective foundry.

## Deployment

Pushing to `main` builds and deploys automatically to GitHub Pages via
`.github/workflows/deploy.yml`.

## Contributing

Spotted an error, or want to contribute? Get in touch: **mail@foundryterms.com**
