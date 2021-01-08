# nuxt-prismic-boilerplate

A basic boilerplate for Nuxt and Prismic.

## Features

- SCSS
- SEO

## To Do

- [ ] Head templates
- [ ] Custom types
- [ ] SliceZone
- [ ] Layout file
- [x] Emoji

## Noteworthy Files

```
.
├── app/
│   └── prismic/
│       └── link-resolver.js
├── components/
│   └── SliceZone.vue
├── custom_types/
├── layouts/
│   └── default.vue
├── pages/
│   ├── _uid.vue
│   └── index.vue
├── plugins/
│   ├── html-serializer.js
│   └── seo-handler.js
└── nuxt.config.js

```

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```