import { defineConfig } from "astro/config";
import yaml from "@rollup/plugin-yaml";
import editableRegions from "@cloudcannon/editable-regions/astro-integration";

// https://astro.build/config
export default defineConfig({
  site: "https://synergyadvisorsllc.com",

  // The original site lived at /firm.html, /services.html, and so on.
  // "file" output keeps those exact URLs instead of moving to /firm/.
  build: { format: "file" },
  trailingSlash: "never",

  // CloudCannon's Visual Editor re-renders components client side.
  integrations: [editableRegions()],

  vite: {
    // Lets components `import site from "../../data/site.yml"`.
    plugins: [yaml()],
  },
});
