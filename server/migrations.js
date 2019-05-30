const connection = require('./db-connection');
const records = require('./seed-data.json');

module.exports = {
  up() {
    connection.query(`
      CREATE TABLE users (
        id INT NOT NULL AUTO_INCREMENT, 
        username VARCHAR(15) NOT NULL, 
        password VARCHAR(75) NOT NULL,
        PRIMARY KEY (id)
      )
    `, (error, results) => {
      if (error) {
        throw new Error(error);
      };

      console.log('DATABASE MIGRATED: ', results);
    });
  },
  down() {
    connection.query('DROP TABLE users', (error, results) => {
      if (error) {
        throw new Error(error);
      };
    
      console.log('DATABASE TABLE DROPPED: ', results);
    });
  },
  seed() {
    connection.query(`
      INSERT INTO users (username, password) VALUES ?
    `, [records], (error, results) => {
      if (error) {
        throw new Error(error);
      };

      console.log('DATABASE TABLE SEEDED: ', results);
    });
  },
};

require('make-runnable');