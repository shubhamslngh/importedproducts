import { defineNuxtConfig } from 'nuxt/config'
import type { AppConfigInput } from 'nuxt/schema'
export default defineAppConfig({

  awesome: {
    name: 'Imported Products',
    description:
      'Headless E-commerce website.',
    project: {
      links: {
        github: 'https://github.com/shubhamslngh/importedproducts.git',
      },
    },
    layout: {
      page: {
        navbar: {
          menus: [
            { type: 'link', title: 'Products', to: { name: 'products' } },
            { type: 'link', title: 'Subscriptions', to: { name: 'post' } },
            // { type: 'link', title: 'Travel', to: { name: 'travel' } },
            { type: 'link', title: 'Login', to: { name: 'login' } },



            {
              type: 'dropdown',
              title: 'Cart',
              children: [
                {
                  type: 'link',
                  title: 'My Cart',
                  to: { name: 'cart' },
                },
               
              ],
            },
            { type: 'button', title: 'Setting', to: { name: 'setting' } },
          ],
        },
      },
      footer: {
        year: new Date().getFullYear(),
      },
      welcome: {
        title: 'Nuxt&nbsp;3 Awesome Starter',
        disableInfoReplaceIndexInWelcomePage: true,
      },
    },
    author: {
      name: 'shubhamslngh',
      links: {
        github: 'https://github.com/shubhamslngh/importedproducts.git',
        website: 'www.importedproducts.in',
      },
    },
  },
})
