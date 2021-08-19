exports.GET = (req, reply) => {
  reply.send('Hello ' + req.params.param)
}
