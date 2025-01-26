const currency = (fromCurrency, toCurrency) => {
    const exchangeRates = {
        'USD_EUR': 0.85,
        'USD_INR': 74.15,
        'USD_GBP': 0.75,
        'EUR_USD': 1.18,
        'EUR_INR': 87.15,
        'EUR_GBP': 0.88,
        'INR_USD': 0.013,
        'INR_EUR': 0.011,
        'INR_GBP': 0.010,
        'GBP_USD': 1.33,
        'GBP_EUR': 1.14,
        'GBP_INR': 101.15
      };

      const key = `${fromCurrency}_${toCurrency}`
      return exchangeRates[key]
}

module.exports = currency