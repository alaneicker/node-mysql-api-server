const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const path = require('path');
const app = express();
const env = process.env.NODE_ENV;

require('dotenv').config({ 
  path: path.resolve(__dirname, `../env/.env.${env}`) 
});

const { PORT = 9000 } = process.env;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running in ${env} mode on port ${PORT}`);
});