const dotenv = require('dotenv')
dotenv.config()

const createFastify = require('fastify')
const cookie = require('fastify-cookie')
const routes = require('./api/routes')

const fastify = createFastify({ ignoreTrailingSlash: true })

fastify.register(cookie, {
  secret: process.env.SIGNING_SECRET
})

routes(fastify)

export default async (req, res) => {
  await fastify.ready()
  fastify.server.emit('request', req, res)
}
