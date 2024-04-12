import { defineConfig } from 'astro/config';
import taildwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
    integrations: [
        taildwind(),
        mdx(),
        react(),
        vue(),
        svelte(),
    ]
});
