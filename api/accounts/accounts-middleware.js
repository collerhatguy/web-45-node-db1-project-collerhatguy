const { getById, checkName } = require("./accounts-model")


exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  const { name, budget } = req.body
  if (!name || (!budget && typeof budget === "undefined")) next({ status: 400, message: "name and budget are required" })
  if (typeof budget !== "number") next({ status: 400, message: "budget of account must be a number" })
  if (typeof name !== "string") next({ status: 400, message: "name of account must be a string" })

  const trimmedName = name.trim()
  const trueLength = trimmedName.length

  if (trueLength < 3 || trueLength > 100) next({ status: 400, message: "name of account must be between 3 and 100" })
  if (budget < 0 || budget > 1000000) next({ status: 400, message: "budget of account is too large or too small" })
  req.accountPayload = { name: trimmedName, budget: budget }
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
  checkName(req.accountPayload.name).then(length => {
    if (length) next({ status: 400, message: "that name is taken" })
    next()
  })
}

exports.checkAccountId = (req, res, next) => {
  // DO YOUR MAGIC
  const { id } = req.params
  getById(id).then(account => {
    if (account) {
      req.account = account
      next()
    }
    next({ status: 404, message: "account not found" })
  }).catch(next) 
}
