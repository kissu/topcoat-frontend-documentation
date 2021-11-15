---
sidebar: auto
---

# Packages

## State of the packages

| Package                                                              | Vue2         | Vue3                          |
| -------------------------------------------------------------------- | ------------ | ----------------------------- |
| [Vuetify](https://vuetifyjs.com/en/) | ✅            |  🚧 [ETA Feb 2022, currently alpha](https://vuetifyjs.com/en/introduction/roadmap/#v3-0-titan) |
| [VeeValidate v4](https://vee-validate.logaretm.com/v4/)                                                                  | ❌ only [v3](https://vee-validate.logaretm.com/v3)     | ✅ |
| [HeadlessUI](https://headlessui.dev/)                                                        | ❌            | ✅                             |
| [SWRV](https://github.com/Kong/swrv)                                                       | ❌    | ✅                       |
| [Windi CSS v3](https://windicss.org/)                                                       | ✅    | ✅                       |
| Vuex                                                       | ✅ ([v3](https://vuex.vuejs.org/))    | ✅ ([v4](https://next.vuex.vuejs.org/))                      |
| Vue router                                                       | ✅ ([v3](https://router.vuejs.org/installation.html))    | ✅ ([v4](https://next.router.vuejs.org/))                      |
| [Pinia 🍍](https://pinia.esm.dev/)                                                       | ❌    | ✅                      |
| [Storybook](https://github.com/storybookjs/storybook/)                                                       | ✅    | ✅                      |

## May be used

- [UnoCSS](https://github.com/antfu/unocss), may be really interesting but Windi v4 may come with it baked-in and the current state of Uno is not [production ready](https://twitter.com/kissu_io/status/1457447519114481671)
- **TODO:** [twind's discussions](https://github.com/tw-in-js/twind/discussions?discussions_q=runtime), maybe it is yet capable of being run on runtime?
- As [answered here](https://github.com/antfu/unocss/discussions/80), [windicss-runtime-dom](https://github.com/antfu/windicss-runtime-dom) is being able to run some dynamic CSS (based on Windi) at runtime. Another solution is also available, with [Twind/shim](https://twind.dev/handbook/the-shim.html#frontmatter-title). Even tho, with the [upcoming of UnoCSS](https://antfu.me/posts/reimagine-atomic-css) on Windi v4, kissu recommends to use Windi v3, then make a smooth transition to Windi v4!
- For error tracking, we may use a combo of [Sentry](https://sentry.io) + ([Rollbar](https://rollbar.com/) or [LogRocket](https://logrocket.com/)).
