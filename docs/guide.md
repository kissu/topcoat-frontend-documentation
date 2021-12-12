# How to run any project

::: tip
You'll need PNPM to get started with any frontend project

For this, run `npm install -g pnpm`

In case of a problem, please refer to the [Known Issues](/known_issues.html) section.
:::

Then, read the `README.md`, we'll try to keep those as up-to date as possible!

A more product oriented documentation can be found on [Notion](https://github.com/orgs/topcoat-data/projects/1).

##### Misc informations, no specific order:
- this documentation currently based on Vuepress-vite2 beta will probably be replaced by [Docus](https://nuxtlabs.com/docus) when the stable <Badge type="tip" text="v2" vertical="top" /> will be out
- this documentation is aimed towards the private team, this is not the public documentation that you can find [here](https://docs.topcoatdata.com/), which is for the end-user clients
- this documentation is not hosted on Netlify anymore as of right now, we may probably either remove it from there or find a way to only use SPA + auth from Auth0, here is [one of kissu's repos](https://github.com/kissu/so-nuxt-docs-theme-auth-auth0) where he did setup properly `@nuxt/docs-theme` + Auth0, maybe check to hack it [here](https://v2.vuepress.vuejs.org/reference/config.html#templatessr)
- the search bar is working on some local code but can be also plugged to an Algolia service
- [here](https://v2.vuepress.vuejs.org/reference/default-theme/config.html#sidebar) is an example on how to setup properly the sidebar (+navbar) in the `config.js` file
