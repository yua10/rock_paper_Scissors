const express = require("express");
const cors = require("cors");
// Imports
const logger = require("./logger");
const countryRouter = require('./routers/countries');

const app = express();
app.use(cors());
app.use(express.json());
app.use(logger);

app.use('/countries', countryRouter)

module.exports = app;