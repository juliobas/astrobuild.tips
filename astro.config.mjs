import { defineConfig } from 'astro/config';
import taildwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    integrations: [
        taildwind()
    ]
});
