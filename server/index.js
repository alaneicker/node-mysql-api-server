const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const routes = require('./routes');
const app = express();

const { ENV, PORT, STATIC_DIR } = require('./constants');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(STATIC_DIR));
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} mode on port ${PORT}`);
});