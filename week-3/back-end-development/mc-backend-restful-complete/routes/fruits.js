const express = require("express");
const router = express.Router();
const fruits = require("../controllers/fruits")

router.get('/', fruits.index)

router.get("/:name", fruits.show);

module.exports = router
