import { defineConfig } from 'astro/config';
import taildwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    integrations: [
        taildwind(),
        mdx(),
        react()
    ]
});
