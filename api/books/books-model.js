const db = require('../../data/db-config')

const find = () => {
  return db('books')
}

const findBy = (filter) => {
  return db('books').where(filter)
}

const findById = (id) => {
  return db('books')
    .where('book_id', +id)
    .first()
}

const insert = (data) => {
  return db('books')
    .insert(data)
    .then((ids) => ({ id: ids[0] }))
  // .then((ids) => findById(ids[0c]))
}

const update = (id, book) => {}

const destroy = (id) => {
  return db('books')
    .where('book_id', +id)
    .del()
}

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  destroy,
}
