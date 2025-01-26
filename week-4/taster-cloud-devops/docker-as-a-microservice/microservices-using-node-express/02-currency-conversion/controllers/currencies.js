const axios = require('axios')

const convert = async (req, res) => {
    const currencyExchangeServiceHost = process.env.CURRENCY_EXCHANGE_SERVICE_HOST
    const currencyOne = req.params.currencyOne
    const currencyTwo = req.params.currencyTwo
    const quantity = req.params.quantity

    const response = await axios.get(`${currencyExchangeServiceHost}/currency-exchange/from/${currencyOne}/to/${currencyTwo}`)

    res.status(200).json({
        "success": true,
        "total currency converted": response.data.message * quantity
    })
}


module.exports = {
    convert
}