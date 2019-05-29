const mysql = require('mysql');
const { IS_DEV } = require('./constants');

const connection = IS_DEV
  ? mysql.createPool({
    connectionLimit : 10,
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'Users'
  })
  : mysql.createPool({
    connectionLimit : 10,
    host     : '<database>',
    user     : '<root>',
    password : '<password>',
    database : '<database>'
  });

module.exports = connection;