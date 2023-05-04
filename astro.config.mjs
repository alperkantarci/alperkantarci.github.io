import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import robotsTxt from 'astro-robots-txt';

import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false,
      },
    }),
    robotsTxt(),
    image(),
  ],
  site: 'https://alperk.dev',
  // github pages adds trailingSlash automatically
  trailingSlash: 'always',
});
