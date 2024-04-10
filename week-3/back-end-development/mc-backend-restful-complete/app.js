const express = require('express');
const app = express();
const fruits = require("./routes/fruits")

app.get('/', (req, res) => {
   res.send('Hello Fruity!');
})

app.use('/fruits', fruits);

module.exports = app