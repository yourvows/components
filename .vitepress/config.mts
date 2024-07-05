import { defineConfig } from 'vitepress'
import { componentPreview, containerPreview } from '@vitepress-demo-preview/plugin'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Components",
  description: "Composables, Directives, Components and util functions",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        items: [{text: 'Checklist', link: '/guides/checklist'},]
      },
      {
        text: 'Components',
        items: [
          {text: 'Button', link: '/guides/components/Button/button'},
          {text: 'Story', link: '/guides/components/Story/story'},
          {
            text:'Form', link:'/guides/components/Form/form', items: [
              {text: 'Input', link: '/guides/components/Form/input'},
              {text: 'Checkbox', link: '/guides/components/Form/checkbox'},
              {text: 'Nested Checkbox', link: '/guides/components/Form/nested-checkbox'},
              {text: 'Radio', link: '/guides/components/Form/radio'},
              {text: 'Step Range', link: '/guides/components/Form/step-range'},

            ]
          },
          {text: 'Collapse', link: '/guides/components/Collapse/collapse'},
          {text: 'Preloader', link: '/guides/components/Preloader/preloader'},
        ]
      },
      {
      text: 'Composables',
        items: [
          {text:'useCookie', link: '/guides/composables/useCookie/useCookie'},
        ]
      },
      {
        text: 'Utils',
        items: [
          {text: 'Functions', link: '/guides/utils/functions'},
          {text: 'Mixins', link: '/guides/utils/mixins'},
        ]
      },
      {
        text: 'Directives',
        items: [
          {text: 'Image Lazy Load', link: '/guides/directives/lazyLoad'},
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/yourvows' }
    ]
  },
  markdown:{
    lineNumbers: true,
    config(md) {
      md.use(componentPreview)
      md.use(containerPreview)
    }
  }
})
