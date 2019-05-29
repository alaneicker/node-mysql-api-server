import mysql from 'mysql';
import * as migration from 'mysql-migration';

const ENV = process.env.NODE_ENV || 'development';

const connection = ENV === 'development'
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

if (ENV === 'development') {
  migration.init(connection, __dirname + '/migrations');
} 