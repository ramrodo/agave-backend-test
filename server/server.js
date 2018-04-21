const express = require('express')
const app = express()

app.get('/', (req, res) => {
    // res.send('Hello World')
    res.json('Hello World')
})

app.listen(3000, () => {
    console.log('Escuchando puerto: ', 3000);
})