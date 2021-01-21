# nuxt-prismic-boilerplate

A basic boilerplate for Nuxt and Prismic. This boilerplate does not currently use Slice Machine, but it will be added in the future.

## Features

- Configured with SCSS.
- Has an SEO helper to generate `title`, `meta`, `og`, and `twitter` tags.
- Comes with a `config` and a `page` custom type with basic meta fields. It should be possible to create a repo with these files with the `theme` command in the Prismic CLI, or by copy-pasting them into a repo.
- `config` custom type includes an "Emoji Favicon" field, to set the site's favicon.
- Link Resolver
- HTML Serializer that handles Nuxt links
- One dynamic route (work in progress)
- One root route (work in progress)

## To Do

- [x] Emoji favicon
- [x] Custom types
- [ ] Finish dynamic route
- [ ] Finish root route
- [ ] SliceZone
- [ ] Layout file
- [ ] Map custom types
- [ ] Imgix image component?
- [ ] Map custom type fields?

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
