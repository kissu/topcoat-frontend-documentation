# Packages

## State of the packages

| Package                                                 | Vue2                                                 | Vue3                                                                                         |
| ------------------------------------------------------- | ---------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| [Vuetify](https://vuetifyjs.com/en/)                    | ✅                                                    | 🚧 [ETA Feb 2022, currently alpha](https://vuetifyjs.com/en/introduction/roadmap/#v3-0-titan) |
| [VeeValidate v4](https://vee-validate.logaretm.com/v4/) | ❌ only [v3](https://vee-validate.logaretm.com/v3)    | ✅                                                                                            |
| [HeadlessUI](https://headlessui.dev/)                   | ❌                                                    | ✅                                                                                            |
| [SWRV](https://github.com/Kong/swrv)                    | ❌                                                    | ✅                                                                                            |
| [Windi CSS v3](https://windicss.org/)                   | ✅                                                    | ✅                                                                                            |
| Vuex                                                    | ✅ ([v3](https://vuex.vuejs.org/))                    | ✅ ([v4](https://next.vuex.vuejs.org/))                                                       |
| Vue router                                              | ✅ ([v3](https://router.vuejs.org/installation.html)) | ✅ ([v4](https://next.router.vuejs.org/))                                                     |
| [Pinia 🍍](https://pinia.esm.dev/)                       | ✅                                                    | ✅                                                                                            |
| [Storybook](https://github.com/storybookjs/storybook/)  | ✅                                                    | ✅                                                                                            |

## Expandable-modules

### Quick explanation of the production packages

| Package                                                               | Notes                                                                 |
| --------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Vue                                                                   |                                                                       |
| Vue router                                                            |                                                                       |
| Pinia                                                                 | Used for our global store, Vuex-like                                  |
| [Vue-demi](https://www.npmjs.com/package/vue-demi)                    | Used to have packages working with Vue2 & 3 (may be removed)          |
| [Vueuse](https://vueuse.org/)                                         | Set of utilities                                                      |
| [Lodash](https://lodash.com/)                                         | Details [here](/tools/guidelines.html#lodash-es) |
| [windicss-runtime-dom](https://github.com/antfu/windicss-runtime-dom) | On the fly-generated WindiCSS utility classes (core SPA)              |

### Quick explanation of the development packages

| Package             | Notes                                                                                |
| ------------------- | ------------------------------------------------------------------------------------ |
| @babel/*            | Transpilling JS                                                                      |
| commitlint          | [Explanation](/tools/guidelines.html#commitlint)                |
| @iconify/json       | [Universal icons](/tools/guidelines.html#unocss-pure-css-icons) |
| @unocss/*           | [UnoCSS-related](https://antfu.me/posts/reimagine-atomic-css)                        |
| cross-env           | [Better OS support](https://www.npmjs.com/package/cross-env)                         |
| eslint/* + Prettier | Linting (+formatting) the JS                                                         |
| https-localhost     | Used for `preview-https` script                                                      |
| husky               | [More friendly git hooks](https://github.com/typicode/husky)                         |
| lint-staged         | [Linting only staged git files](https://github.com/okonet/lint-staged)               |
| vite-*              | [Vite related plugins](https://vitejs.dev/)                                          |
| unplugin-*          | [Unplugin ecosystem](https://github.com/unjs/unplugin)                               |

## May be used

- [UnoCSS](https://github.com/antfu/unocss), may be really interesting but Windi v4 may come with it baked-in and the current state of Uno is not [production ready](https://twitter.com/kissu_io/status/1457447519114481671). As of today, it's already configured in the project.
- As [answered here](https://github.com/antfu/unocss/discussions/80), [windicss-runtime-dom](https://github.com/antfu/windicss-runtime-dom) is being able to run some dynamic CSS (based on Windi) at runtime. Another solution is also available, with [Twind/shim](https://twind.dev/handbook/the-shim.html#frontmatter-title). Even tho, with the [upcoming of UnoCSS](https://antfu.me/posts/reimagine-atomic-css) on Windi v4, kissu recommends to use Windi v3, then make a smooth transition to Windi v4!
- For error tracking, ~~we may use a combo of [Sentry](https://sentry.io) + ([Rollbar](https://rollbar.com/) or [LogRocket](https://logrocket.com/))~~, we do have our own snowplow tracking.
- [Stylelint](https://stylelint.io/) may be used one day but as right now, there is no decent package that [works well with Vite](https://github.com/AMatlash/vite-plugin-stylelint), it's a pass for now.
- [rustywind](https://github.com/avencera/rustywind) or an alternative to organize the order of the utility classes.
