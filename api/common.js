const http = require('http')

const route = (fastify, path, route) => {
  Object.entries(route).forEach(([method, handler]) => {
    method = method.toLowerCase()
    const opts = handler.opts || {}

    fastify[method](path, opts, async (req, reply) => {
      try {
        await handler(req, reply)
      } catch (err) {
        const code = err.code || 500
        const msg = (code !== 500 && err.message) || http.STATUS_CODES[code]
        reply.code(code).send(msg)
        console.error(err)
      }
    })
  })
}

// Define your own helper functions
// and export them below

module.exports = {
  route
}
