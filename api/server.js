const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const booksRouter = require('./books/books-router')
const usersRouter = require('./users/users-router')

const server = express()

// middlewares
server.use(helmet())
server.use(morgan('dev'))
server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).json({
    status: 200,
    message: 'this server is live',
    time: new Date().toLocaleTimeString(),
  })
})

server.use('/api/v1/books', booksRouter)
server.use('/api/v1/users', usersRouter)

server.use((err, req, res, next) => {
  console.log(err.message || 'broken')
  res.status(err.status || 500).json({
    status: err.status,
    message: err.message,
  })
})

module.exports = server
