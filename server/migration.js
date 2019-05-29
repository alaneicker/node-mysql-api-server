const connection = require('./db-connection');
const migration = require('mysql-migrations');

migration.init(connection, __dirname + '/migrations');