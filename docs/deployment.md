# Deployment

You can try your build locally with `pnpm build && pnpm preview`.

`preview-https` is currently not working.

[expandable-modules](https://github.com/topcoat-data/expandable-modules) will be hosted on Netlify and does have pretty much all the configuration needed into `netlify.toml` aka `npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build`.

**TODO**: A proper clean Storybook exposed build still needs to be configured.

---

[topcoat-core-fe](https://github.com/topcoat-data/topcoat-core-fe) will follow pretty much the same steps for the deployment, no major differences.
