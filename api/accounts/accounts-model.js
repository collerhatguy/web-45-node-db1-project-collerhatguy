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
  return getById(id)
    .update(account)
    .then(() => getById(id))
}

const deleteById = id => {
  // DO YOUR MAGIC
  getById(id).del()
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
