import { Marked } from "marked";

// CommonMark-ish, matching the markdown engine configured in
// cloudcannon.config.yml so the editor and the build agree.
const marked = new Marked({ gfm: false, breaks: false, pedantic: false });

/**
 * Links to other sites open in a new tab, matching the convention used
 * everywhere else on the site. Markdown has no syntax for this, so it is
 * applied after rendering.
 */
function externalLinks(html: string): string {
  return html.replace(/<a href="(https?:\/\/[^"]*)"(?![^>]*\btarget=)/g, (match, href) =>
    href.includes("synergyadvisorsllc.com") ? match : `${match} target="_blank" rel="noopener"`
  );
}

/** Block-level markdown -> HTML (paragraphs, lists, headings). */
export function md(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  return externalLinks(marked.parse(value) as string);
}

/** Inline markdown -> HTML, with no wrapping <p>. */
export function mdInline(value: unknown): string {
  if (typeof value !== "string" || !value.trim()) return "";
  return externalLinks(marked.parseInline(value) as string);
}

/** Cycles the stagger classes the original markup used on card grids. */
export function delayClass(index: number, every = 3) {
  const step = index % every;
  return step === 0 ? "" : ` delay-${step}`;
}
