const express = require('express');
const { restart } = require('nodemon');

const app = express();

const cors = require('./middlewares/cors');

app.use(cors);

app.get('/test', ( req, res) => {
    res.json({asd: 123});
})

app.listen(5000, console.log('Server listenning on port 5000'));