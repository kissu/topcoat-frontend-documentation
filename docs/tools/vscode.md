# VScode tips settings/tips

## Packages recommended by Konstantin

[ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint), the main one to have installed <Badge type="danger" text="Highly recommended" vertical="top" />

IntelliSense for [Tailwind CSS](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) and [Windi CSS](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) <Badge type="danger" text="Highly recommended" vertical="top" />! 😍

[Vue2 VScode Snippets](https://marketplace.visualstudio.com/items?itemName=sdras.vue-vscode-snippets), to pair with [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur) <Badge type="danger" text="Highly recommended" vertical="top" /> <Badge type="tip" text="Vue2 only" vertical="top" />

[Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar), recommended for Vue3 + TS <Badge type="danger" text="Highly recommended" vertical="top" /> <Badge type="tip" text="Vue3 only" vertical="top" />

[Better comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments), perfect if you'd like some more visibility in your codebase <Badge type="warning" text="Nice to have" vertical="top" />

<details><summary>Konstantin's settings, we may add some as a team maybe? 😸</summary>

```json
"better-comments.tags": [
  {
    "tag": "?",
    "color": "#3498DB",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "//",
    "color": "#474747",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "todo",
    "color": "#ff7f7f",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "*",
    "color": "#f59e0b",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "doc",
    "color": "#333",
    "strikethrough": false,
    "backgroundColor": "#ff6347"
  },
  {
    "tag": "bug?",
    "color": "#9B5094",
    "strikethrough": false,
    "backgroundColor": "transparent"
  },
  {
    "tag": "!",
    "color": "red",
    "strikethrough": false,
    "backgroundColor": "#000"
  }
],
```
</details>

[Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify), since we're gonna be using this for our icons <Badge type="warning" text="Nice to have" vertical="top" />

[Peacock](https://marketplace.visualstudio.com/items?itemName=johnpapa.vscode-peacock) <Badge type="warning" text="Nice to have" vertical="top" />, nice one to have to quickly find out on which project you're working on.

[Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens), nazi but still nice to have ESlint's errors in front of your eyes by default <Badge type="warning" text="Nice to have" vertical="top" />

[Auto close tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag), useful to not waste time while writing templates and trying to match the brackets.

[Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag), pretty self explanatory, nice one to win few seconds.


[Bracket Pair Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer-2), not sure if it's still needed because VScode may have released it officially in it's core.

[Color Info](https://marketplace.visualstudio.com/items?itemName=bierner.color-info), can be useful to quickly find some HSL values for example.

[Colorize](https://marketplace.visualstudio.com/items?itemName=kamikillerto.vscode-colorize), inline background color for your colors written in text.

[es6-string-html](https://marketplace.visualstudio.com/items?itemName=Tobermory.es6-string-html), useful if you do write a lot of template literals but still want some syntax highlighting.

[Github Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot), if you do have access to it, try it out!

[Github Markdown Preview](https://marketplace.visualstudio.com/items?itemName=bierner.github-markdown-preview), useful when you want to have a quick visual of the markdown you just wrote.

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens), provides a good amount of information about your git status.

[Headwind](https://marketplace.visualstudio.com/items?itemName=heybourn.headwind), opinionated sorter for TW, didn't tried it yet with Windi tho.

[i18n Ally](https://marketplace.visualstudio.com/items?itemName=Lokalise.i18n-ally), mandatory extension once you do start to have i18n in the project, really!

[Image Preview](https://marketplace.visualstudio.com/items?itemName=kisstkondoros.vscode-gutter-preview), useful to preview images in your code.

[indent-rainbow](https://marketplace.visualstudio.com/items?itemName=oderwat.indent-rainbow), personal choice but can help with visibility.

[Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare), useful when you will need to have a pair programming session.

Some other useful markdown extensions: [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one), [Markdown Checkboxes](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-checkbox), [Markdown Emoji](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-emoji) and [Markdown Preview Github Styling](https://marketplace.visualstudio.com/items?itemName=bierner.markdown-preview-github-styles).

[npm Dependency Links](https://marketplace.visualstudio.com/items?itemName=herrmannplatz.npm-dependency-links), super nice one to quickly access specific NPM packages.

[Partial Diff](https://marketplace.visualstudio.com/items?itemName=ryu1kn.partial-diff), useful to see the changes in your codebase.

[Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense) and [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete) are both useful.

[Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint), can be useful to lint CSS too.

[SVG Previewer](https://marketplace.visualstudio.com/items?itemName=vitaliymaz.vscode-svg-previewer), to get a preview inside of VScode directly. And [SVGOCD](https://marketplace.visualstudio.com/items?itemName=shtian.svgocd) to optimize it one of the other.

## How to setup ESlint + Prettier

Open your `settings.json` file with `ctrl + shift + p` and type in `Open Settings (JSON)`, then append the following configuration if you don't already have it
```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll": true,
  },
  "eslint.options": {
    "extensions": [
      ".html",
      ".js",
      ".vue",
      ".jsx",
    ]
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "html",
    "vue",
  ],
}
```

Also, be sure of having **ONLY** [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) installed and activated in this project. **DO NOT** install the [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) extension alongside it.

Otherwise, you may have your own thing formatting it as you've set it up. Rather than running through ESlint's configuration matching your team's guidelines.
