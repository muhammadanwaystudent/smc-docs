// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "My Docs",
      social: {
        discord: "https://discord.com/invite/cjxQfvmBkD",
      },
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
      ],
      customCss: ["./src/styles/custom.css"],
    }),
  ],
});
