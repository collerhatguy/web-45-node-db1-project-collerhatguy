const express = require("express")
const accountEndpoints = require("./accounts/accounts-router")

const server = express()

server.use(express.json())
server.use("/api/accounts", accountEndpoints)

module.exports = server;
