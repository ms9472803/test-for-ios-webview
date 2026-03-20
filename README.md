# my-vue-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup


### Installation
```sh
yarn install
```

### Hot-Reload for Development

```sh
yarn dev
```

### Compile

```sh
yarn build
```

## CI/CD

This project uses GitHub Actions for CI/CD:

- `CI` runs `yarn build` on every push and pull request
- `Deploy to GitHub Pages` builds and publishes the `dist/` output from `main`

### GitHub Pages setup

Go to `Settings > Pages` in your repository and set the source to `GitHub Actions`.

After that, each push to `main` will deploy the latest production build automatically.

Because GitHub Pages is static hosting, the deployed app uses hash-based routes such as `/#/a` so page refreshes do not return a 404.
