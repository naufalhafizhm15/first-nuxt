// https://nuxt.com/docs/api/configuration/nuxt-confi g
import {resolve} from "path";
export default defineNuxtConfig({
  alias:{
    "@": resolve(__dirname, ","),
  },
  css: [
    "~/assets/main.scss"
  ],
  modules: [
    '@pinia/nuxt',
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
