# Deployment

You can try your build locally with `pnpm build && pnpm preview`.

`preview-https` is currently not working.

[expandable-modules](https://github.com/topcoat-data/expandable-modules) is [hosted on Netlify](https://topcoat-expandable-modules.netlify.app/) and does have pretty much all the configuration needed into `netlify.toml` aka `npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build`.

[core-spa](https://github.com/topcoat-data/core-spa) is also [hosted on Netlify](https://topcoat-core-spa.netlify.app/).

**TODO**: A proper clean Storybook exposed build still needs to be configured.
