const db = require("../../data/db-config")

const getAll = () => {
  // DO YOUR MAGIC
  return db("accounts")
}

const getById = id => {
  // DO YOUR MAGIC
  return getAll()
    .where({ id })
    .first()
}

const create = account => {
  // DO YOUR MAGIC
  return getAll()
    .insert(account)
    .then(([id]) => getById(id))
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
  return db("accounts")
    .where({ id })
    .update(account)
    .then(count => count ? getById(id) : null)
}

const deleteById = id => {
  // DO YOUR MAGIC
  return getById(id).del()
}

const checkName = name => {
  return getAll()
    .where({ name })
    .then(accounts => accounts.length)

}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  checkName
}
