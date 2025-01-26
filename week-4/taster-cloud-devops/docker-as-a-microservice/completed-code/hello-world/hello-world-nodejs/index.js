const express = require('express')
const process = require('process');

const app = express()
app.get('/', function (req, res) {
    res.send('{"message":"Hello World JavaScript v3"}')
})
app.listen(5000, () => {
    console.log('Ready on port 5000!')
})

/* To Handle Ctrl C*/
process.on('SIGINT', function () {
    process.exit();
});