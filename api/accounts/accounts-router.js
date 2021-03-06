const router = require('express').Router()
const { getAll, create, updateById, deleteById } = require("./accounts-model")
const { checkAccountId, checkAccountNameUnique, checkAccountPayload } = require("./accounts-middleware")

router.get('/', (req, res, next) => {
  // DO YOUR MAGIC
  getAll().then(accounts => {
    res.status(200).json(accounts)
  }).catch(next)
})

router.get('/:id', checkAccountId, (req, res) => {
  // DO YOUR MAGIC
  res.status(200).json(req.account)
})

router.post('/', checkAccountPayload, checkAccountNameUnique, (req, res, next) => {
  // DO YOUR MAGIC
  create(req.accountPayload).then(account => {
    res.status(201).json(account)
  }).catch(next)
})

router.put('/:id', checkAccountId, checkAccountPayload, (req, res, next) => {
  // DO YOUR MAGIC
  const { params: { id }, accountPayload } = req
  updateById(id, accountPayload).then(updatedAccount => {
    res.status(200).json(updatedAccount)
  }).catch(next)
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  const { params: { id }, account } = req
  deleteById(id).then(() => {
    res.status(200).json(account)
  }).catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
  res.status(err.status || 500).json({
    message: err.message
  })
})

module.exports = router;
