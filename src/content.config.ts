import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

// One Markdown file per page. The frontmatter holds the page's SEO values,
// layout options and its "content_blocks" page-building array.
// No schema is declared on purpose: blocks vary by type and CloudCannon
// editors should never be blocked by a build-time validation error.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/pages" }),
});

export const collections = { pages };
