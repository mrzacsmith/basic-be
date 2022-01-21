const db = require('../../data/db-config')

const find = () => {
  return db('users').select('user_id', 'username', 'role')
}

const findById = (id) => {
  return db('users').where('user_id', id).select('user_id', 'username').first()
}

module.exports = {
  find,
  findById,
}
