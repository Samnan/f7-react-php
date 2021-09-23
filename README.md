# Framework7 + React + PHP 🔥
This is a clean split view template generated from framework7 cli, and includes a simple php api backend.

## Frontend
- Framework7 v6
- React

## Backend
- PHP

# How to use
- clone the repo locally
- change all occurences of 'MyProject' and 'myproject' in the folder to the actual name of your project
- after that, simply:
```
# install frontend dependencies
npm install
cd public
# install backend dependencies
composer install
```

### Optional
- copy `.env.template` in `public/` folder to `.env`. Add any configuration you need and it will be available in your php code.

### Fire up
- Once everything is setup, just run
`npm start`

This will start php backend on `localhost:8000`. Access it however you like in your frontend code.

Enjoy.

# 🎉🎉🎉 Special Thanks 🎉🎉🎉
Goes to Vladimir Kharlampidi (@nolimits4web) :+1: for converting the generated templated to v6 on request.

# FAQ
- How do I use a different php backend (e.g. Laravel) with this?
  The `public` folder contains php backend code project. Replace it with your Laravel (or other) backend code and start using it.

- Can I remove F7 or React from the frontend?
  Yes you can, but that kills the purpose of using this template for your project.

## Framework7 CLI Options

Framework7 app was created with following options:

```
{
  "cwd": "",
  "type": [
    "web",
    "pwa"
  ],
  "name": "F76",
  "framework": "react",
  "template": "split-view",
  "bundler": "webpack",
  "cssPreProcessor": "less",
  "theming": {
    "customColor": false,
    "color": "#007aff",
    "darkTheme": false,
    "iconFonts": false,
    "fillBars": false
  },
  "customBuild": true,
  "customBuildConfig": {
    "rtl": false,
    "darkTheme": true,
    "lightTheme": true,
    "themes": [
      "ios",
      "md",
      "aurora"
    ],
    "components": [
      "appbar",
      "dialog",
      "popup",
      "login-screen",
      "popover",
      "actions",
      "sheet",
      "toast",
      "preloader",
      "progressbar",
      "sortable",
      "swipeout",
      "accordion",
      "contacts-list",
      "virtual-list",
      "list-index",
      "timeline",
      "tabs",
      "panel",
      "card",
      "chip",
      "form",
      "input",
      "checkbox",
      "radio",
      "toggle",
      "range",
      "stepper",
      "smart-select",
      "grid",
      "calendar",
      "picker",
      "infinite-scroll",
      "pull-to-refresh",
      "lazy",
      "data-table",
      "fab",
      "searchbar",
      "messages",
      "messagebar",
      "swiper",
      "photo-browser",
      "notification",
      "autocomplete",
      "tooltip",
      "gauge",
      "skeleton",
      "menu",
      "color-picker",
      "treeview",
      "text-editor",
      "elevation",
      "typography"
    ]
  },
  "webpack": {
    "developmentSourceMap": false,
    "productionSourceMap": false,
    "hashAssets": false,
    "preserveAssetsPaths": true,
    "inlineAssets": true
  }
}
```

## NPM Scripts

* 🔥 `start` - run development server
* 🔧 `dev` - run development server
* 🔧 `build-dev` - build web app using development mode (faster build without minification and optimization)
* 🔧 `build-prod` - build web app for production

## WebPack

There is a webpack bundler setup. It compiles and bundles all "front-end" resources. You should work only with files located in `/src` folder. Webpack config located in `build/webpack.config.js`.

Webpack has specific way of handling static assets (CSS files, images, audios). You can learn more about correct way of doing things on [official webpack documentation](https://webpack.js.org/guides/asset-management/).

## PWA

This is a PWA. Don't forget to check what is inside of your `service-worker.js`. It is also recommended that you disable service worker (or enable "Update on reload") in browser dev tools during development.
## Assets

Assets (icons, splash screens) source images located in `assets-src` folder. To generate your own icons and splash screen images, you will need to replace all assets in this directory with your own images (pay attention to image size and format), and run the following command in the project directory:

```
framework7 assets
```

Or launch UI where you will be able to change icons and splash screens:

```
framework7 assets --ui
```

## Documentation & Resources

* [Framework7 Core Documentation](https://framework7.io/docs/)

* [Framework7 React Documentation](https://framework7.io/react/)

* [Framework7 Icons Reference](https://framework7.io/icons/)
* [Community Forum](https://forum.framework7.io)

## Support Framework7

Love Framework7? Support project by donating or pledging on patreon:
https://patreon.com/vladimirkharlampidi
