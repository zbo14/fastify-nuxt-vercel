const createFastify = require('fastify')
const cookie = require('fastify-cookie')
const nuxt = require('fastify-nuxtjs')
const routes = require('./api/routes')

const main = async (req, res) => {
  const fastify = createFastify()

  fastify.register(cookie, {
    secret: process.env.SIGNING_SECRET
  })

  fastify.register(nuxt).after(() => {
    fastify.nuxt('*')
  })

  await routes(fastify)

  await fastify.ready()
  await fastify.listen(3000)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
