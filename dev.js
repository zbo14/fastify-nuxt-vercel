const dotenv = require('dotenv')
dotenv.config()

const createFastify = require('fastify')
const cookie = require('fastify-cookie')
const nuxt = require('fastify-nuxtjs')
const routes = require('./api/routes')

const main = async (req, res) => {
  const { COOKIE_SECRET, SERVER_PORT } = process.env

  const fastify = createFastify({ ignoreTrailingSlash: true })
  const cookieOpts = {}

  if (COOKIE_SECRET) {
    cookieOpts.secret = COOKIE_SECRET
  }

  fastify.register(cookie, cookieOpts)

  fastify.register(nuxt).after(() => {
    fastify.nuxt('*')
  })

  routes(fastify)

  const port = +SERVER_PORT || 3000

  await fastify.ready()
  await fastify.listen(port)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
