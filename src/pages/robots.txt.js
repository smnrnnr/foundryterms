// Generates /robots.txt at build time. Allows all crawlers and points them
// to the sitemap. The sitemap URL uses the `site` value from astro.config.mjs.
export async function GET({ site }) {
  const body = `User-agent: *
Allow: /

Sitemap: ${new URL("sitemap.xml", site).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain" },
  });
}
