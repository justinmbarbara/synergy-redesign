import type { MiddlewareHandler } from "astro";

/**
 * Static hosts serve dist/index.html at "/" on their own, but the dev server
 * only knows the route as "/index.html". This makes both work locally.
 */
export const onRequest: MiddlewareHandler = (context, next) => {
  if (context.url.pathname === "/") return context.rewrite("/index.html");
  return next();
};
