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
      customCss: ["./src/styles/custom.css"],
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        "pt-br": {
          label: "Português (Brasil)",
          lang: "pt-br",
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
          autogenerate: { directory: "guides" },
          translations: {
            "pt-br": "Guias",
          },
        },
      ],
    }),
  ],
});
