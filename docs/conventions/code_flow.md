# Code flow

Here is a list of all the available [git hooks](https://githooks.com/), we'll implement a few of them.

## Post merge hook
- your code is merged from a PR
- you get back to the master branch
- you _should_ have a PNPM install out of the box (not tested yet)

## Pre-commit hook
- you write your code
- you add + start commiting your code
- it will be CSS linted (Stylelint) + JS linted (ESLint + Prettier)
- if there is any issue at all at this point, it will just crash until you resolve the issues
- if everything is fine in term of linting, we may check your actual git commit message and see if it's structured enough (Commitlint)
- your commit is done! ✅

::: danger
All of these validators can all be bypassed by suffixing `--no-verify` flag to your git commit message, please try to stick to it 99% of the time tho! 🙏👼
:::

## Pre-push hook
- when we'll get some tests
- run them locally, before even pushing them remotely

## Explanation of the package.json scripts
- `pnpm dev` is used to have a working environment for development
- `pnpm build` is used to build the app on production (Netlify)
- `pnpm lint:js` is used to check if there are no ESlint errors, this is done on the **whole** project (not only the edited files) and it is to be used as read-only (it does not fix those issues)
- `pnpm lint:js:fix` is used by `.lintstagedrc`: it looks for errors and fixes them before committing, this is applied **only** to modified files.
  - You don't need to run this, it is done for you by the git hooks, just code, add files and commit!
  - Also, you need to have 0 errors to commit.

## Git workflow

### Github pull requests

A `PULL_REQUEST_TEMPLATE.md` file is available in `.github` to preset for some details on the pull request send by a collaborator. Please fill in the gaps to give more context on your work! 💪

### Draft Pull Request

Please do follow the following rules when creating a pull request:
- create it when you start to code, as `draft` (you'll pass it to `open` when you're done coding)
- ping the people concerned, especially when you're done coding and expect a review
- name your dev branch with the `type/scope` pattern eg. `fix/navbar-toggle`
- keep a [clean history](http://localhost:1234/conventions/code_flow.html#git-history) when merging into `dev` (`main` is reserved to the exposed production code)
- [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/) is globally a really good read when it comes down to code reviews

![](https://i.imgur.com/NP4b9OH.png)

### Git history

A squash and merge on Github should be prefered at the end of a Pull request to keep a consistent and keep git history. Otherwise, [an interactive rebase](https://youtu.be/f1wnYdLEpgI) (`git rebase -i`) is the best option.

![](https://i.imgur.com/MSYqQyM.png)
