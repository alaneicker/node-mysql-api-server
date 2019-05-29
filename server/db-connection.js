import mysql from 'mysql';
import { ENV } from './constants';

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

export default connection;