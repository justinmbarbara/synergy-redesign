/// <reference types="astro/client" />

// The YAML data files in /data are imported directly (see astro.config.mjs).
declare module "*.yml" {
  const data: any;
  export default data;
}

declare module "*.yaml" {
  const data: any;
  export default data;
}
