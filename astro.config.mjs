import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://alanmflores.github.io',
  base: '/alanmflores-freelance-astro',
  integrations: [tailwind()]
});