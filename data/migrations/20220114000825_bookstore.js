exports.up = function (knex) {
  return knex.schema
    .createTable('books', (tbl) => {
      tbl.increments('book_id')
      tbl.string('title', 255).notNullable()
      tbl.string('author', 255).notNullable()
      tbl.string('description', 1024)
    })
    .createTable('users', (tbl) => {
      tbl.increments('user_id')
      tbl.string('username', 255).notNullable().unique()
      tbl.string('password', 255).notNullable()
      tbl.string('role', 64)
    })
}

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('books')
}
