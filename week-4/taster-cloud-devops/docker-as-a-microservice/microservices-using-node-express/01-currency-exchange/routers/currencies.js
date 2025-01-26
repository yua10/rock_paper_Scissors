const { Router } = require("express")

const currencyController = require("../controllers/currencies")

const currencyRouter = Router()

currencyRouter.get("/from/:currencyOne/to/:currencyTwo", currencyController.convert)

module.exports = currencyRouter