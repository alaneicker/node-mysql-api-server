const mysql = require('mysql');
const path = require('path');
const { promisify } = require('util');

require('dotenv').config({ 
  path: path.resolve(__dirname, `../env/.env.${process.env.NODE_ENV}`) 
});

const {
  DB,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_CONNECTION_LIMIT,
  SOCKET_PATH,
} = process.env;

const config = Object.assign(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB,
  }, 
  (DB_CONNECTION_LIMIT 
    ? { connectionLimit: DB_CONNECTION_LIMIT } 
    : null),
  (DB_PORT 
    ? { port: DB_PORT } 
    : null),
  (SOCKET_PATH 
    ? { socketPath: SOCKET_PATH } 
    : null),
);

const connection = mysql.createPool(config);
const query = promisify(connection.query).bind(connection);

module.exports = {
  connection,
  query,
};
