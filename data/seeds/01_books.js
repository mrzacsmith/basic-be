exports.seed = async function (knex) {
  await knex('books').truncate()
  await knex('books').insert([
    {
      title: 'how the west was won',
      author: 'jimmy',
      description: 'a book about how the west was won',
    },
    {
      title: 'how the east was won',
      author: 'tony',
      description: 'a book about how the east was won',
    },
  ])
}
