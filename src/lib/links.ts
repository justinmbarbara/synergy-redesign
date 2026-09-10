export interface SiteLink {
  text?: string;
  url?: string;
  new_tab?: boolean;
  download?: boolean;
}

/**
 * Builds the attributes for an <a> tag from an editable link object, so
 * "open in a new tab" and "download" stay checkboxes in CloudCannon.
 */
export function linkAttrs(link: SiteLink | undefined | null) {
  const attrs: Record<string, unknown> = { href: link?.url || "#" };
  if (link?.new_tab) {
    attrs.target = "_blank";
    attrs.rel = "noopener";
  }
  if (link?.download) attrs.download = true;
  return attrs;
}

/** Absolute URL for meta tags, from a site-root path or a full URL. */
export function absoluteUrl(pathOrUrl: string, base: string) {
  if (!pathOrUrl) return "";
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${base.replace(/\/$/, "")}${pathOrUrl.startsWith("/") ? "" : "/"}${pathOrUrl}`;
}
