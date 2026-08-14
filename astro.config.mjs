// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  output: 'static',
  // TODO: Replace with the real production URL before deploying.
  site: 'https://marwa-attef.example.com',
});
