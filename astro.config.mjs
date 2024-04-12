import { defineConfig } from 'astro/config';
import taildwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://astrobuilds.tips',
    integrations: [
        taildwind(),
        mdx(),
        react(),
        vue(),
        svelte(),
        sitemap(),
    ]
});
