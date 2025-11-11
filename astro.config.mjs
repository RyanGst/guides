// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightGiscus from "starlight-giscus";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "ryangst",
      plugins: [
        starlightGiscus({
          repo: "ryangst/guides",
          repoId: "R_kgDOQTxF8A",
          category: "Q&A",
          categoryId: "DIC_kwDOQTxF8M4CxsGx",
          lazy: true,
        }),
      ],
      logo: {
        src: "./src/assets/axe_logo.png",
        alt: "ryangst Logo",
        replacesTitle: true,
      },
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "pt-br": {
          label: "Português (Brasil)",
        },
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/ryangst",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
