import { defineConfig, envField } from "astro/config";
import partytown from "@astrojs/partytown";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://youmis.org/",

  server: {
    port: 80,
    host: true,
    allowedHosts: ["youmis.org"]
  },

  integrations: [
    tailwind(),
    icon(),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
    }),
  ],

  env: {
    schema: {
      GOOGLE_API_KEY: envField.string({ context: "server", access: "secret"}),
    }
  },

  adapter: node({
    mode: "standalone"
  })
});