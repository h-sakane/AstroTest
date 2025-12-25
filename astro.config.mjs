import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import tailwind from '@astrojs/tailwind'
import compress from 'astro-compress'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  site: 'https://h-sakane.github.io',
  base: '/AstroTest',
  integrations: [
    mdx(),
    icon(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    compress(),
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: {
            warn: () => {},
          },
        },
      },
    },
  },
})
