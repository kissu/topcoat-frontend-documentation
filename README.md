# Documentation for the frontend

![](https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=400&q=80)

This documentation is focused on the Frontend part.

Run `npm install -g pnpm` if not already done.

To read this one, you can do
```bash
pnpm i # install all dependencies
pnpm dev # runs the actual documentation
```

Or you can even use [`ni`](https://github.com/antfu/ni) if you'd like, that way you could type `nr` and have all the available package json's scripts available for you with a friendly UI.

This is using [Vite](https://vitejs.dev/), so you'll get some super fast launch and refresh.

For any configuration, the main entry point is `/docs/.vuepress/config.js` and the documentation for this Vuepress project is located here on [this Github](https://v2.vuepress.vuejs.org/).

PS: There is not linting or alike here, please still try to keep some consistency in your git commit messages.
