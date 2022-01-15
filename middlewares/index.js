exports.validateBook = (req, res, next) => {
  if (!req.body.author || !req.body.title)
    next({ status: 400, message: 'book title and author are required' })
  next()
}
