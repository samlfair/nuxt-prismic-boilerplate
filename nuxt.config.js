const smConfig = require("./sm.json");

export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: "Loading...",
    meta: [
      {
        charset: "utf-8"
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      },
      {
        hid: "description",
        name: "description",
        content: ""
      }
    ]
  },
  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ["~/assets/reset.css"],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: ["~/plugins/seo-handler.js"],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ["@nuxtjs/prismic"],
  // Settings for prismic.
  prismic: {
    endpoint: smConfig.apiEndpoint
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    [
      "@nuxtjs/prismic",
      {
        endpoint: smConfig.apiEndpoint
      }
    ],
    ["nuxt-sm"]
  ],
  build: {
    transpile: ["vue-slicezone", "nuxt-sm"]
  },
  storybook: {
    stories: [
      "~/slices/**/*.stories.js",
      "~/node_modules/sams-slices/src/slices/**/*.stories.js"
    ]
  },
  ignore: ["**/*.stories.js"]
};
