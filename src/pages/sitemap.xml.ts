import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { navigation, site } from "../lib/data";

/**
 * Built from the pages collection so a new page added in CloudCannon appears
 * automatically. Change frequency and priority live under each page's SEO
 * settings; a page set to "noindex" is left out.
 */
export const GET: APIRoute = async () => {
  const pages = await getCollection("pages");

  // Home first, then the navigation order, then anything else alphabetically.
  const navOrder = (navigation.items ?? []).map((item: any) =>
    String(item.url ?? "").replace(/^\//, "").replace(/\.html$/, "")
  );
  const rank = (id: string) => {
    if (id === "index") return -1;
    const index = navOrder.indexOf(id);
    return index === -1 ? navOrder.length : index;
  };

  const entries = pages
    .filter((page: any) => !String(page.data?.seo?.robots ?? "").includes("noindex"))
    .sort((a: any, b: any) => rank(a.id) - rank(b.id) || a.id.localeCompare(b.id))
    .map((page: any) => {
      const seo = page.data?.seo ?? {};
      const loc = seo.canonical_url || `${site.url}/${page.id === "index" ? "" : `${page.id}.html`}`;
      const sitemap = seo.sitemap ?? {};
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        sitemap.change_frequency ? `    <changefreq>${sitemap.change_frequency}</changefreq>` : "",
        sitemap.priority ? `    <priority>${sitemap.priority}</priority>` : "",
        "  </url>",
      ].filter(Boolean).join("\n");
    });

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join("\n")}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
