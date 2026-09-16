/**
 * Temporary diagnostic for the tombstone Array Editable Region.
 *
 * Loaded only inside CloudCannon's Visual Editor (see BaseLayout.astro).
 * It reports what CloudCannon's own API resolves for the data file that backs
 * the transaction grid, so the correct "data-prop" can be read off rather than
 * guessed. Delete this file and its import once the binding is confirmed.
 *
 * Open the browser console on the Transactions page in the Visual Editor and
 * look for the "[tombstones]" table.
 */
const CANDIDATE_PATHS = [
  "/data/tombstones.yml",
  "data/tombstones.yml",
  "./data/tombstones.yml",
];

const describe = (value) =>
  value === undefined ? "undefined" : value === null ? "null" : Array.isArray(value) ? `array(${value.length})` : typeof value;

async function probeFile(path) {
  const row = { path, file: "—", data: "—", tombstones: "—", error: "" };
  try {
    const file = globalThis.CloudCannon?.file?.(path);
    row.file = file ? "resolved" : "undefined";
    if (!file) return row;
    row.file = globalThis.CloudCannon?.isAPIFile?.(file) ? "isAPIFile: true" : "isAPIFile: FALSE";
    const data = await file.data?.get?.();
    row.data = describe(data);
    row.tombstones = describe(data?.tombstones);
  } catch (error) {
    row.error = String(error?.message ?? error);
  }
  return row;
}

async function probeDataset(key) {
  const row = { path: `@data[${key}]`, file: "—", data: "—", tombstones: "—", error: "" };
  try {
    const dataset = globalThis.CloudCannon?.dataset?.(key);
    row.file = dataset ? (globalThis.CloudCannon?.isAPIDataset?.(dataset) ? "isAPIDataset: true" : "isAPIDataset: FALSE") : "undefined";
    if (!dataset) return row;
    const items = await dataset.items?.();
    row.data = describe(items);
    row.tombstones = Array.isArray(items) ? "(dataset returns items directly)" : describe((await items?.data?.get?.())?.tombstones);
  } catch (error) {
    row.error = String(error?.message ?? error);
  }
  return row;
}

(async () => {
  if (!document.querySelector("#tombstone-grid")) return;

  const rows = [];
  for (const path of CANDIDATE_PATHS) rows.push(await probeFile(path));
  rows.push(await probeDataset("tombstones"));

  console.info("[tombstones] Which reference does CloudCannon resolve? The row where 'tombstones' reads array(96) is the one to use in data-prop.");
  console.table(rows);

  try {
    const all = await globalThis.CloudCannon?.files?.();
    const paths = (all ?? []).map((file) => file.path ?? file).filter((path) => String(path).includes("tombstone"));
    console.info("[tombstones] Paths CloudCannon lists for this site that mention 'tombstone':", paths.length ? paths : "(none found)");
  } catch (error) {
    console.info("[tombstones] CloudCannon.files() unavailable:", error?.message ?? error);
  }
})();

export {};
