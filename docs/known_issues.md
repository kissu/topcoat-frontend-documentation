# Known issues

A more generic approach about the whole product can be found [on Notion](https://www.notion.so/topcoat/Known-issues-9cc33d8f9c344b609ec0f1d6cff6af9a).

Here, we will mainly have front-end only focused mementos.

## Known issues with solution

- **Mainly on MacOS**: when installing something with NPM, if you get a `code EACCES` error, you can follow [this tutorial](https://medium.com/@ExplosionPills/dont-use-sudo-with-npm-5711d2726aa3) (or maybe this [SO question](https://stackoverflow.com/q/48910876/8816585)) to see how setup things properly.

::: danger
Please do not casually `sudo npm i -g pnpm`, this is a bad practice.
:::
- If you cannot reach the Builder FE due to some Auth0 issues, double check `localhost:2525` because auth is done there!
- EDIT (**see the tip below**): If you ever have this error of `TypeError: Invalid value used as weak map key`, it's probably because you've missed this into one of your pages
```html
<route lang="yaml">
meta:
  layout: home
</route>
```
![](https://i.imgur.com/1xpLJBX.png)

::: tip
Since we're using `nuxtStyle: true` in our [`vite-plugin-pages`](https://github.com/hannoeru/vite-plugin-pages#nuxtstyle) config to have the same behavior as Nuxt, the issue above is not really a matter anymore.
:::

- Meanwhile, this error can also occur in case we're having an auto-imported component used somewhere else, let's say `Footer.vue`. If we update the actual component but do not replace the occurences of `<footer></footer>` in the places it is used, [this error will occur](https://github.com/antfu/vite-ssg/issues/65#issuecomment-972781430).
- PNPM is now working great with `lint-staged` since the maintainer [fixed a regression](https://github.com/pnpm/pnpm/milestone/71?closed=1) in the latest `6.22` release.
- The current `tsconfig.json` config file is working great and not causing an ESlint error anymore, [here is](https://stackoverflow.com/questions/42609768/typescript-error-cannot-write-file-because-it-would-overwrite-input-file) a reference to an issue that we once faced.
- If you have this issue missing peer issue
![](https://user-images.githubusercontent.com/5133074/147968499-636975b5-04e9-4e4c-93c0-717ee9c3c7f4.png)

You can run `rm -rf node_modules`, then `pnpm i` and you will get your project working fine again, without any compatibility issues.

## Pending issues

Not sure how to run the build app in HTTPS. Even if it's [properly installed](https://github.com/FiloSottile/mkcert#linux) (pre-built binaries), we do have an `unexpected error`.
![image](https://user-images.githubusercontent.com/5133074/148989486-4f157737-0b53-4e78-9efa-d47208642961.png)

Not sure where this one comes from, but I found nothing neither on [Vitesse](https://github.com/antfu/vitesse/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc) nor on [Vite](https://github.com/vitejs/vite/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)'s GH issues.
