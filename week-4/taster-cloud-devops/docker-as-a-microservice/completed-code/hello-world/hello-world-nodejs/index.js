const express = require('express')
const process = require('process');

const app = express()
app.get('/', function (req, res) {
    res.send({"message":"Hello World JavaScript v3"})
})
app.listen(process.env.PORT, () => {
    console.log(`Ready on port ${process.env.PORT}!`)
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});