const mysql = require('mysql');
const { IS_DEV } = require('./constants');

const connection = IS_DEV
  ? mysql.createPool({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'users',
    socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
    connectionLimit : 10,
  })
  : mysql.createPool({
    host     : '<database>',
    user     : '<root>',
    password : '<password>',
    database : '<database>',
    connectionLimit : 10,
  });

module.exports = connection;