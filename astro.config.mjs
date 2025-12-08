// @ts-check
import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

import sitemap from "@astrojs/sitemap";
import node from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "http://localhost:4321/",
  integrations: [
    sanity({
      projectId: "wwfac1ax",
      dataset: "production",
      // Set useCdn to false if you're building statically.
      useCdn: false,
      apiVersion: "2025-08-28",
      studioBasePath: "/studio",
    }),
    react(),
    sitemap({
      /** Type: (page: string) => boolean
      All pages are included in your sitemap by default. By adding a custom filter function, you can filter included pages by URL. */
      filter: (page) =>
        page !== "https://example.com/secret-vip-lounge-1/" &&
        page !== "https://example.com/secret-vip-lounge-2/" &&
        page !== "https://example.com/secret-vip-lounge-3/" &&
        page !== "https://example.com/secret-vip-lounge-4/",
      /** An array of externally-generated pages to be included in the generated sitemap file.
      Use this option to include pages in your sitemap that are a part of your deployed site but are not created by Astro. */
      customPages: [
        "https://example.com/external-page1",
        "https://example.com/external-page2",
      ],
      /** To localize a sitemap, pass an object to this i18n option. */
      i18n: {
        defaultLocale: "en", // All urls that don't contain `es` or `fr` after `https://example.com/` will be treated as default locale, i.e. `en`
        locales: {
          en: "en-US", // The `defaultLocale` value must present in `locales` keys
          es: "es-ES",
          fr: "fr-CA",
        },
      },
      /** An object of XML namespaces to exclude from the generated sitemap.
      Excluding unused namespaces can help create more focused sitemaps that are faster for search engines to parse and use less bandwidth. For example, if your site doesn’t have news content, videos, or multiple languages, you can exclude those namespaces to reduce XML bloat.
      By default, all configurable namespaces (news, xhtml, image, and video) are included in your generated sitemap XML. To exclude one or more of these namespaces from your sitemap generation, add a namespaces configuration object and set individual options to false: */
      namespaces: {
        news: false,
        xhtml: false,
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  adapter: node(),
});
