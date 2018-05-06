require('./config/config');

const express = require('express');
const app = express();

// midlewares
const bodyParser = require('body-parser');

// parse application/json
app.use(bodyParser.json());

app.get('/', (req, res) => {
    // res.send('Hello World')
    res.json('Hello World')
});

app.post('/checkout', (req, res) => {
    const body = req.body;

    res.json({
        amount: 0.00,
    })
})

app.listen(process.env.PORT, () => {
    console.log('Escuchando puerto: ', process.env.PORT);
});