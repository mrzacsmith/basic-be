const router = require('express').Router()
const Books = require('./books-model')
const { validateBook } = require('../../middlewares')
// const express = require('express')
// const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const books = await Books.find()
    res.status(200).json(books)
  } catch (error) {
    next({ status: 500, message: 'you done broke your server!' })
    // res.status(500).json({ message: 'Failed to get books' })
  }
})

router.get('/:bob_id', async (req, res, next) => {
  try {
    const id = req.params.bob_id
    const book = await Books.findById(id)
    if (!book) next({ status: 404, message: 'your book does not exist' })
    else res.status(200).json(book)
  } catch (error) {}
})

router.post('/', validateBook, async (req, res, next) => {
  try {
    const newBookId = await Books.insert(req.body)
    const newBook = await Books.findById(newBookId.id)
    res.status(201).json(newBook)
  } catch (error) {
    next({ status: 500, message: 'your book does not exist' })
  }
})

const bookExists = async (req, res, next) => {
  const id = req.params.book_id
  const bookExists = await Books.findById(id)

  if (!bookExists)
    next({ status: 404, message: `book with id ${id} does not exist` })
  next()
}

// TODO: check why this is not working!!!
// const idPassed = async (req, res, next) => {
//   console.log('ID PASSED')
//   const id = req.params.book_id
//   if (!id) next({ status: 400, message: 'please provide a book id' })
//   next()
// }

router.delete('/:book_id', bookExists, async (req, res, next) => {
  try {
    const id = req.params.book_id
    const delBook = await Books.destroy(id)
    res.status(200).json({ message: `book with id of ${id} has been deleted` })
  } catch (error) {
    next({ status: 500, message: error.message })
  }
})

module.exports = router
