# Intro
A component library based on Gada Design System

## File Organization

* `src/components` : used for all the react components
  * `/core` : contains all those components that have finalized design on figma
  * `/lab` : contains all the experimental components that shouldn't be exported with the npm package
* `src/hocs` : contains generic higher order components 
* `src/styles` : contains all the stuff related to theming, including tokens for colors, typography and mui component's overrides etc.

## Branch Structure

The repo has 3 main branches:

- `main` -> Production
- `develop` -> Development

## Conventions for branch name

- Use `feature/GUD-ticket-number-feature-name` for any feature development
- Use `fix/GUD-ticket-number-fix-name` for any fixes
- Use `improve/GUD-ticket-number-feature-to-improve-name` for any improvements

## How to run
- Run storybook
```sh
yarn storybook
```

## For development

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

## Publish to NPM
Will update it later

## Contribution
* Clone the repo to your local
```sh
git clone https://github.com/gudangada/gada-ui.git
```
* Checkout `develop` branch
```sh
git checkout develop
```
* Install dependencies
```sh
yarn install
```
* Run the project
```sh
yarn storybook
```
* Pick any unimplemented component from [Design System's Figma](https://www.figma.com/file/5yyvvVhEf2a9oDB5RBdhGt/%5BWIP%5D-Design-System?node-id=615%3A3862) project
* Assign an existing unassigned task to yourself from [Design System - Web](https://linear.app/gudangada/project/design-system-web-497cf010dce4/GUD) project on **linear**, or create a new one if it doesn't exist.
* Specify the `Estimate` points (1 point being 2 hours) to your ticket
* Checkout your feature branch (Follow **Conventions for branch name** section's guideline)
* Implement the feature
* Create a PR against `develop` branch
* Post it in the `#design-system-web-trackers` channel on slack
* Get that PR approved
* Merge the PR to `develop` (with a meaningful message - can use PR's title)
* Don't forget to keep updating your linear ticket's status
