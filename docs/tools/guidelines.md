# Guidelines

## [PNPM](https://pnpm.io/)

We are PNPM, because it's still the fastest, keeps the whole `node_modules` to a minimal size and is powerful enough in case we'll need more of it's features.

For the most part, it will only be used to add and install NPM packages, so nothing to really worry about.

## [Vite](https://vite.dev/docs/getting-started)

Since we're on a modern bleeding-edge yet stable stack, rather use the fastest and greatest DX available today. Webpack is far too slow and will probably not need anything super advanced & specific to Webpack.

It is properly battle-tested, fits well with Windi and will be used accross all of our projects. This is also of course well mantained. If some specific browsers support is required, please refer to this [guide](https://vitejs.dev/guide/#browser-support).

## [Env variables](https://vitejs.dev/guide/env-and-mode.html#env-variables) with Vite

Get your variable into `.env` and call it in your template with

```js
data() {
  return {
    envVariable: import.meta.env.VITE_TEST,
  }
},
```
Then, you'll be able to use it in your template with the following
```html
<p>My env variable: {{ envVariable }}</p>
```

If you want to use an env variable into the `vite.config.ts` itself, use [the following](https://stackoverflow.com/a/66389044/8816585).

## [Pinia](https://pinia.esm.dev/)

Pinia is used as a global store, basically a replacement for Vuex with some QoL improvements and less boilerplate (no more mutations needed).

## [ESlint](https://eslint.org/) + [Prettier](https://prettier.io/)

Those tools will provide us some nice code formatting and linting, to avoid the most common errors. Please follow the [following config](./vscode.md#how-to-setup-eslint-prettier) for the full configuration.

This setup will apply on a pre-commit hook, so it will work great even if you don't use VScode. There should be **no errors** during the commit for it to be accepted tho.

## [Vue3 devtools](https://chrome.google.com/webstore/detail/vuejs-devtools/ljjemllljcmogpfapbkkighbhhppjdbg)

Since we'll be using Vue3 in all the upcoming projects, we may download the latest related devtools to properly debug our app. You can keep the 2 extensions running at the same time, no issues with it!

## [vite-plugin-pages](https://github.com/hannoeru/vite-plugin-pages)

This one is inspired from [Nuxt's routing system](https://github.com/hannoeru/vite-plugin-pages#file-system-routing) (directory-based >> `/src/pages`). Lazy importing is enabled by default, check [this one](https://github.com/hannoeru/vite-plugin-pages#importmode) if you need more details.

[vite-plugin-vue-layouts](https://github.com/JohnCampionJr/vite-plugin-vue-layouts) is also being used for layouts (`/src/layouts`).

## [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components)

[As in Nuxt](https://nuxtjs.org/tutorials/improve-your-developer-experience-with-nuxt-components/), you don't need to import the components yourself. Works even with some [UI libraries](https://github.com/antfu/unplugin-vue-components#importing-from-ui-libraries). And will lazy-load them if the route is lazy-loaded too (done by default in our configuration).

Composition API is also auto-imported thanks to [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)!

## [Commitlint](https://commitlint.js.org)

This tool will try to help us write more meaningful commits, by asking for a pattern of `type(scope?): subject` for example: `fix(navbar): toggle is not properly debounced`. A scope is not always mandatory but please try to do your best to write good commit messages. Checks on this will be done as a [pre-commit hook](/conventions/code_flow.html#pre-commit-hook) and the whole configuration can be found in the `commitlint.config.js` file.

## [UnoCSS' Pure CSS icons](https://github.com/antfu/unocss/tree/main/packages/preset-icons)

We are using this flow to have simple and quick icons available in an efficient and practical way.

All the icons can be found on [Icones JS](https://icones.js.org/), select an icon, prefix it with `i-` and add it's name like `i-fxemoji-chicken`. [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) is heavily recommended if you're working with VScode.

We could load only some icon libraries to not have all of them downloaded locally, but as of today we're loading [every one of them locally](https://github.com/antfu/unplugin-icons#icons-data). If we want to have only a subset, we should download only `@iconify-json/mdi` for example (for the Material Design Icons). Having all of them locally is **of course NOT** impacting the final production build.
