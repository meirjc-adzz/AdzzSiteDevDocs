import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: 'Adzz Dev Docs',
      logo: {
        src: './src/assets/AdzzFavicon.png',
      },
      social: {
        github: 'https://github.com/withastro/starlight',
      },
      sidebar: [
        {
          label: 'Quick Start',
          autogenerate: { directory: 'quick-start' },
        },
        {
          label: 'Theme and Style',
          autogenerate: { directory: 'theme-and-style' },
        },
        {
          label: 'Guides',
          items: [
            // Each item here is one entry in the navigation menu.
            { label: 'Example Guide', link: '/guides/example/' },
          ],
        },
        {
          label: 'Reference',
          autogenerate: { directory: 'reference' },
        },
        {
          label: 'Documentation Contribution',
          autogenerate: { directory: 'documentation-contribute' },
        },
      ],
    }),
  ],
})

// /Users/meirjc/Projects/ADZZ/Startlight-Adzz-Docs/src/content/docs/documentation-contribute/01-theme-and-style.md
