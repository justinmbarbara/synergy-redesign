import { tombstones, transactionFilters } from "./data";

export interface TombstoneCard {
  image: string;
  alt: string;
  serviceLabel: string;
  sectorLabel: string;
  caseStudy: string;
  attrs: Record<string, string>;
}

export interface FeaturedCard {
  image: string;
  /** The raw description, so the caller can apply its own alt text suffix. */
  alt: string;
}

/**
 * Turns the editable tombstone records into the exact card data the original
 * tombstones.js produced, including the data-order-* attributes the filter
 * script sorts by.
 */
export function buildTombstoneCards(): TombstoneCard[] {
  const filters = transactionFilters ?? {};
  const marketOrder: string[] = (filters.markets ?? []).map((market: any) => market.id);
  const marketById = new Map<string, any>((filters.markets ?? []).map((market: any) => [market.id, market]));
  const sectorById = new Map<string, any>((filters.sectors ?? []).map((sector: any) => [sector.id, sector]));
  const serviceById = new Map<string, string>((filters.service_labels ?? []).map((service: any) => [service.id, service.label]));
  const allSectorIds: string[] = (filters.sectors ?? []).map((sector: any) => sector.id);

  return tombstones.map((item: any, index: number) => {
    const sectors: string[] = (item.sectors ?? []).filter((id: string) => sectorById.has(id));

    const markets: string[] = [];
    for (const id of sectors) {
      const market = sectorById.get(id)?.market;
      if (market && !markets.includes(market)) markets.push(market);
    }
    markets.sort((a, b) => marketOrder.indexOf(a) - marketOrder.indexOf(b));

    const attrs: Record<string, string> = {
      "data-market": markets.join(" "),
      "data-service": item.service ?? "",
      "data-sector": sectors.join(" "),
      "data-default-order": String(index),
    };
    for (const id of allSectorIds) {
      // Tombstones without a curated position sort after the curated ones.
      const rank = sectors.includes(id) ? (item.sector_order?.[id] ?? 1000 + index) : -1;
      attrs[`data-order-${id}`] = String(rank);
    }

    const altLabel = marketById.get(markets[0])?.alt_label ?? "";

    return {
      image: item.image,
      alt: `${item.alt} - Synergy Advisors ${altLabel} investment banking transaction`,
      serviceLabel: serviceById.get(item.service) ?? "",
      sectorLabel: sectors.map((id) => sectorById.get(id)?.label).filter(Boolean).join(" / "),
      caseStudy: item.case_study ?? "",
      attrs,
    };
  });
}

/**
 * The tombstones marked "featured" in data/tombstones.yml, for the homepage
 * grid. Sorted by "featured_order" first, then by their position in the main
 * list, so an editor can control the order without renumbering everything.
 */
export function buildFeaturedCards(limit?: number): FeaturedCard[] {
  const entries: Array<{ item: any; index: number }> = tombstones.map((item: any, index: number) => ({ item, index }));
  const rank = (entry: { item: any }) =>
    typeof entry.item.featured_order === "number" ? entry.item.featured_order : Number.POSITIVE_INFINITY;

  const featured: FeaturedCard[] = entries
    .filter((entry) => entry.item.featured === true)
    .sort((a, b) => rank(a) - rank(b) || a.index - b.index)
    .map((entry) => ({ image: entry.item.image, alt: entry.item.alt }));

  return typeof limit === "number" && limit > 0 ? featured.slice(0, limit) : featured;
}
