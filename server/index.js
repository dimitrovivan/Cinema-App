const express = require('express');
const app = express();
const cors = require('./middlewares/cors');
const { PORT } = require('./config/base');
app.use(cors);

app.get('/test', ( req, res) => {
    res.json({asd: 123});
})

app.listen(PORT, console.log(`Server listenning on port ${PORT}...`));