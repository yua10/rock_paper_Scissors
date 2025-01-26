const { Router } = require('express')

const countriesController = require("../controllers/countries")

countriesRouter = Router()

countriesRouter.get('/', countriesController.index)
countriesRouter.get('/:name', countriesController.show)
countriesRouter.post('/', countriesController.create)
countriesRouter.patch('/:name', countriesController.update)
countriesRouter.delete('/:name', countriesController.destroy)


module.exports = countriesRouter