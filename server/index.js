import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import * as migration from 'mysql-migrations';
import routes from './routes';
import connection from './db-connection';
import { ENV, PORT, IS_DEV, STATIC_DIR } from './constants';

const app = express();

if (IS_DEV) {
  migration.init(connection, __dirname + './migrations');
} 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(STATIC_DIR));
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server running in ${ENV} mode on port ${PORT}`);
});