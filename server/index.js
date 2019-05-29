import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import path from 'path';
import routes from './routes';

import './db-connection';

const app = express();
const ENV = process.env.NODE_ENV || 'development';
const PORT = process.env.PORT || 9000;

const staticDir = ENV === 'development' 
  ? path.join(__dirname, '..', 'dist')
  : path.join(__dirname, '..');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(staticDir));
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} mode on port ${PORT}`);
});