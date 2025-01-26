const Currency = require("../models/Currency")

const convert = async (req, res) => {
    const currencyOne = req.params.currencyOne
    const currencyTwo = req.params.currencyTwo
    const response = await Currency(currencyOne, currencyTwo)
    res.status(200).json({
        "success": true,
        "message": response
    })
}


module.exports = {
    convert
}