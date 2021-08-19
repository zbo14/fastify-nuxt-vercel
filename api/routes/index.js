// *Do not* modify this file

const fs = require('fs')
const path = require('path')
const common = require('../common')

const ROUTES_DIRNAME = __dirname

module.exports = (fastify, dirname = '') => {
  const entries = fs.readdirSync(path.join(ROUTES_DIRNAME, dirname), { withFileTypes: true })

  entries.forEach(entry => {
    if (entry.isDirectory()) {
      module.exports(fastify, path.join(dirname, entry.name))
      return
    }

    if (dirname === ROUTES_DIRNAME && entry.name === 'index.js') {
      return
    }

    const basename = path.basename(entry.name, '.js')
    const routePath = '/' + path.join(dirname, basename === 'index' ? '' : basename)
    const route = require('.' + routePath)

    common.route(fastify, routePath, route)
  })
}
