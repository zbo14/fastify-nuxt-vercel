exports.GET = (req, reply) => {
  reply.send('Hello')
}

exports.POST = (req, reply) => {
  reply.send('Hello ' + req.body.text)
}

exports.POST.opts = {
  schema: {
    body: {
      type: 'object',
      required: ['text'],
      properties: {
        text: {
          type: 'string'
        }
      }
    }
  }
}
