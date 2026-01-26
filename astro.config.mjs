// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tessaurwin.github.io",
  base: "/tess-portfolio",
  vite: {
    plugins: [tailwindcss()],
  },
});

