# Intro
A component library based on Gada Design System

## File Organization

* src/components : used for all the react components
  * /core : contains all those components that have finalized design on figma
* src/hocs : any 
* src/styles : contains all the stuff related to theming, including tokens for colors, typography and mui component's overrides

## Branch Structure

The repo has 3 main branches:

- `main` -> Production
- `develop` -> Development

**Conventions for branch name:**

- Use `feature/GUD-ticket-number-feature-name` for any feature development
- Use `fix/GUD-ticket-number-fix-name` for any fixes
- Use `improve/GUD-ticket-number-feature-to-improve-name` for any improvements

## How to run:
- Run storybook
```sh
yarn storybook
```

## For development:

- Checkout `develop` branch

```sh
git checkout develop
```

- Make sure that you have latest changes from the remote `develop`

```sh
git pull origin develop
```

- Checkout a feature branch from `develop` and do your changes on that new branch

```sh
git checkout -b feature/GUD-ticket-number-feature-name
```

- Push all your changes to your feature branch and create a PR against `develop` branch.

## For release:

- Get that PR reviewed and address any feedback.
- Once approved, merge it using `Squash and merge` option.
- Test it on the `dev` instance
- Move the `develop` changes to `master` (production) branch by:

```sh
- git checkout master
- git pull origin develop
# Resolve any conflicts
- git push origin master
```
