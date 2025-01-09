// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import { defineNuxtPlugin } from "#app";

import theme from "../config/theme";

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    components,
    directives,
    ssr: true,
    theme: {
      options: { customProperties: true },
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            ...theme,
            // primary: "#023C64",
          },
        }
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
