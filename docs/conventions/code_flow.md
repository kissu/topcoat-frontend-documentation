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

## Pre-push hook
- when we'll get some tests
- run them locally, before even pushing them remotely
