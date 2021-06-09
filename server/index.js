const express = require('express');
const app = express();
const { PORT } = require('./config/base');
const router = require('./router');

require('./config/express')(app);
require('./config/mongoose')();

app.use(router);

app.listen(PORT, () => console.log(`Server listenning on port ${PORT}...`));