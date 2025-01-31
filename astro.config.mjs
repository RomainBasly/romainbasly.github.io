// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import mdx from "@astrojs/mdx";
import astroIcon from "astro-icon";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  outDir: "dist",
  site: "https://romainbasly.github.io",
  integrations: [react(), mdx(), astroIcon(), sitemap()],
  output: "static",
});
