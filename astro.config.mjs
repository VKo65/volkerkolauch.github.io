// @ts-check
import { defineConfig } from 'astro/config';
import github from "@astrojs/github/actions";

// https://astro.build/config
export default defineConfig({
  site: 'https://VKo65.github.io',
  integrations: [github()],
});