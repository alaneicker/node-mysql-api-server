const mysql = require('mysql');
const path = require('path');
const env = process.env.NODE_ENV;

require('dotenv').config({ 
  path: path.resolve(__dirname, `../env/.env.${env}`) 
});

const {
  IS_DEV,
  DB,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_PORT,
  DB_CONNECTION_LIMIT,
} = process.env;

const config = Object.assign(
  {
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB,
    connectionLimit: DB_CONNECTION_LIMIT,
  }, 
  (IS_DEV ? { socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock' } : null),
  (DB_PORT ? { port: DB_PORT } : null),
);

const connection = mysql.createPool(config);

module.exports = connection;