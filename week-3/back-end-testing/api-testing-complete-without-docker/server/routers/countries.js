// Access the router functionality from express
const { Router } = require("express");

// Bring in our controller to get information on a country
const countryController = require("../controllers/countries");

// Initiate our router
const countryRouter = Router();

// Define the route we want want to hit and the controller which will executed
countryRouter.get("/", countryController.index);
countryRouter.get("/:name", countryController.show);
countryRouter.post("/", countryController.create);
countryRouter.delete("/:name", countryController.destroy);

// Export our router
module.exports = countryRouter