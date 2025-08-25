import { defineConfig } from 'astro/config';
import github from '@astrojs/github/actions';

export default defineConfig({
  site: 'https://vko65.github.io', // wichtig: dein Nutzername = VKo65 → Domain = vko65.github.io
  integrations: [github()],
});