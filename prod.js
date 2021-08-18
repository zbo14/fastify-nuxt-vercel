const dotenv = require('dotenv')
dotenv.config()

const createFastify = require('fastify')
const cookie = require('fastify-cookie')
const routes = require('./api/routes')

const fastify = createFastify()

fastify.register(cookie, {
  secret: process.env.SIGNING_SECRET
})

export default async (req, res) => {
  await routes(fastify)
  await fastify.ready()
  fastify.server.emit('request', req, res)
}
