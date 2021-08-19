# fastify-nuxt-vercel

GitHub template for a [Fastify](https://www.fastify.io/) + [Nuxt](https://nuxtjs.org/) app that deploys to [Vercel](https://vercel.com)!

This project is intended for apps that require server-side rendering and/or business logic. If you don't have these requirements, it's better to stick with a [Jamstack](https://jamstack.org/) framework like [Gatsby](https://www.gatsbyjs.com/), [Gridsome](https://gridsome.org/), or the like.

[Tailwind CSS](https://tailwindcss.com/) comes included.

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

## Deployment

You can deploy via the Vercel dashboard *or* install the [CLI](https://vercel.com/cli) and run `vercel --prod`.

## Environment Variables

See `.env.example`. The actual values will be parsed from `.env` (gitignored).

### `COOKIE_SECRET`

The secret used to sign cookies (default: none).

### `SERVER_PORT`

The port the Fastify server listens on (default: 3000).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `api`

Contains (1) a `common` module with predefined and custom helper functions, and (2) a `routes` subdirectory with your API routes.

To clear the example API routes, run `yarn routes:clear`.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).

### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
