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
- please create a PR when you're starting to code on a new feature, new branch ➡️ new draft PR (you'll pass it to `open` when you're done coding and feel like it's ready to be merged)
- ping the people concerned, especially when you're done coding and expect a review
- name your dev branch with the `type/scope` pattern eg. `fix/navbar-toggle`
- keep a [clean history](/conventions/code_flow.html#git-history) when merging into `dev` (`main` is reserved to the exposed production code)
- [How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/) is globally a really good read when it comes down to code reviews

![](https://i.imgur.com/NP4b9OH.png)

### Git history

A squash and merge on Github should be prefered at the end of a Pull request to keep a consistent and keep git history. Otherwise, [an interactive rebase](https://youtu.be/f1wnYdLEpgI) (`git rebase -i`) is the best option.

![](https://i.imgur.com/MSYqQyM.png)

### Comments during Pull Requests
Rather than just selecting a single line of code for a comment, please select all the lines concerned by the comment. For example, below we want to give some feedback for the whole `:class` aka lines 35 to 39. Rather than just putting a comment on line 35 or 39, select all of them.

For that, scroll with your mouse button hold while being on the left of the line numbers, when you're satisfied with the selected lines, go to the last line and click on ➕ to add a multi-line comment! 💪

![image](https://user-images.githubusercontent.com/5133074/146698286-f047ef1c-2a50-466a-848d-f0d17115f69c.png)

### Verbose PR descriptions

Please write some summary of what happened in the PR, what was interesting, some nice links, some decision making etc... Anything that can be interesting without the need to scroll down all the conversations to find out what happened would be perfect.

Here is an [example of a verbose PR description](https://github.com/topcoat-data/expandable-modules/pull/2).

![image](https://user-images.githubusercontent.com/5133074/147717377-107ac33e-0d53-469a-97d8-77f3fe69a0b9.png)

### Improve the flow while solving conflicts

This [kind of thing](https://github.com/topcoat-data/expandable-modules/pull/2/commits/ae731cff6c971b4dd08075134fb244ceede4664d) may happen if somebody is merging `dev` after a PR merged into it. It will bring back all the diff of this PR into your own, like it was a real change coming from your side.

This is pretty messy, and even if it is not present in the final "Files changed" section, it is still bug-prone because it's not clear what was changed to solve the conflicts. There is maybe a clean rebase solution, otherwise writing a detailed body for a commit could be a quick and simple solution too! Some pair could also probably solve this issue (any ideas welcome! 👐).
