const signed = !!process.env.COOKIE_SECRET

exports.GET = (req, reply) => {
  // see https://www.npmjs.com/package/cookie#options-1
  // for cookie options
  reply
    .cookie('foo', 'bar', {
      httpOnly: true,
      path: '/',
      secure: true,
      signed
    })
    .send('Hello universe')
}
