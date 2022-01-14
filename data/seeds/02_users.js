exports.seed = async function (knex) {
  await knex('users').truncate()
  await knex('users').insert([
    { username: 'bob', password: 'bobpass', role: 'admin' },
    { username: 'tony', password: 'tonypass', role: 'seller' },
  ])
}
