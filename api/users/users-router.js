const router = require('express').Router()
const Users = require('./users-model')

router.get('/bob', (req, res) => {
  Users.find()
    .then((users) => res.status(200).json(users))
    .then(() => console.log('GET'))
    .catch((err) => res.status(500).json({ message: 'server error' }))
})

router.get('/', async (req, res, next) => {
  try {
    const users = await Users.find()
    console.log(users)
    res.status(200).json(users)
  } catch (err) {
    next({ status: 418 })
  }
})

router.get('/:user_id', async (req, res, next) => {
  const id = req.params.user_id

  try {
    const user = await Users.findById(id)
    if (!user) return next({ status: 404, message: 'user not found' })
    res.json(user)
  } catch (error) {
    next({ status: 500, message: 'server error by id' })
  }
})

module.exports = router
