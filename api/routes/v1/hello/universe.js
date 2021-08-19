const signed = !!process.env.COOKIE_SECRET

exports.GET = (req, reply) => {
  reply
    .cookie('foo', 'bar', { signed })
    .send('Hello universe')
}
