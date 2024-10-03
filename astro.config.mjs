// @ts-check
import { defineConfig } from 'astro/config';
import reactPlugin from '@vitejs/plugin-react';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://astronaut.github.io',
  integrations: [react()],
});