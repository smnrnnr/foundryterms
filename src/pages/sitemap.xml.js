import data from "../data/foundries.json";

// Generates /sitemap.xml at build time. Lists every page so search engines
// can find them. New foundries appear automatically (read from foundries.json).
// URLs use the `site` value from astro.config.mjs — change the domain there
// once and this updates with it.
export async function GET({ site }) {
  // Trailing slashes match Astro's canonical URLs (it builds /guide/index.html).
  // lastmod: foundry pages use their "geprueft" month; the overview uses the newest one.
  const newest = data.foundries.map((f) => f.geprueft).sort().at(-1);
  const paths = [
    { p: "", lastmod: newest },
    { p: "guide/" },
    { p: "imprint/" },
    { p: "privacy/" },
    ...data.foundries.map((f) => ({ p: `foundry/${f.slug}/`, lastmod: f.geprueft })),
  ];

  const urls = paths
    .map(({ p, lastmod }) =>
      `  <url><loc>${new URL(p, site).href}</loc>${lastmod ? `<lastmod>${lastmod}</lastmod>` : ""}</url>`)
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
