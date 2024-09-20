<h1 align="center"><a href="https://github.com/ElanYoung/vite-vue-js-starter-template" target="_blank">🚀 Vite - Vue 3  Starter Template 🚀</a></h1>

<p align="center">
  <a href="https://nodejs.org/en/about/releases/">
    <img src="https://img.shields.io/node/v/vite.svg" alt="node compatility" />
  </a>
  <a href="https://cn.vitejs.dev" rel="nofollow">
    <img src="https://img.shields.io/badge/vite-5.0.5-3963bc.svg" alt="vite" style="max-width:100%;" />
  </a>
  <a href="https://github.com/vuejs/vue">
    <img src="https://img.shields.io/badge/vue-3.4.29-brightgreen.svg" alt="vue" />
  </a>
  <a href="https://github.com/vuejs/router">
    <img src="https://img.shields.io/badge/vue--router-4.3.3-brightgreen.svg" alt="vue-router" />
  </a>
  <a href="https://github.com/vuejs/pinia">
    <img src="https://img.shields.io/badge/pinia-2.1.7-brightgreen.svg" alt="pinia" />
  </a>
  <a href="https://doc.starimmortal.com">
    <img alt="author" src="https://img.shields.io/badge/author-Florent--V-blue.svg" />
  </a>
  <a href="https://github.com/ElanYoung/vite-vue-js-starter-template/blob/master/LICENSE">
    <img alt="LICENSE" src="https://img.shields.io/github/license/ElanYoung/vite-vue-js-starter-template.svg" />
  </a>
</p>
This template should help get you started developing with Vue 3 in Vite.


![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)



Vite Vue3 Template is a starter template for building Vue3 applications using Vite as the build tool.
It comes pre-configured with
several essential dependencies that will help you get started with your Vue3 project right away.

## Features

### Vue3
+ ⚡️ [Vite 5](https://github.com/vitejs/vite) - born with fastness
+ [PWA Plugin](https://www.npmjs.com/package/vite-plugin-pwa): A Vite plugin that helps you build progressive web applications (PWA) by generating a service worker and a manifest file for your application.
+ 🖖 [Vue 3](https://github.com/vuejs/core) - Composition API and `<script setup>`
+ 🚦 [Vue Router](https://github.com/vuejs/router) - The official router for Vue.js.
+ 📦 [Pinia](https://github.com/vuejs/pinia) - Intuitive, type safe and flexible Store for Vue
+ 🔗 [Axios](https://github.com/axios/axios) - Promise based HTTP client for the browser and node.js

### Testing

+ [Nightwatch](https://nightwatchjs.org/): A testing library for running end-to-end tests in your application.
+ [Vitest](https://vitest.dev/): A unit testing library, can also be used to test components with `vue test utils`.

### Styling

+ [Tailwind CSS](https://tailwindui.com/): A utility-first CSS framework that helps you build custom user interfaces.
+ [Sass](https://sass-lang.com/): A CSS preprocessor that allows you to use variables and functions in your CSS.

### Code Quality

+ [ESLint](https://eslint.org/): A linting tool for JavaScript and TypeScript code.
+ [Prettier](https://prettier.io/): A code formatter that ensures consistency in your code style.


## GitHub Template

[Create a repo from this template on GitHub](https://github.com/Florent-V/starter-vue/generate).

### Clone to local

If you prefer to do it manually with the cleaner git history

## Checklist

When you use this template, try follow the checklist to update your info properly

- [ ] Change the author name in `LICENSE`
- [ ] Change the title in `App.vue`
- [ ] Change the hostname in `vite.config.js`
- [ ] Change the favicon in `public`
- [ ] Remove the `.github` folder which contains the funding info
- [ ] Clean up the READMEs and remove routes

## Recommended IDE Setup

[WebStorm](https://www.jetbrains.com/webstorm/)

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Nightwatch](https://nightwatchjs.org/)

```sh
# When using CI, the project must be built first.
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chrome
npm run test:e2e -- --env chrome
# Runs the tests of a specific file
npm run test:e2e -- tests/e2e/example.js
# Runs the tests in debug mode
npm run test:e2e -- --debug
```
    
### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```

### Generate Assets

```sh
pwa-assets-generator --preset 2023 public/favicon.svg
```


### Test deploy
    
```sh
npm install -g serve
npm run build
serve -s dist -l 4000
```
