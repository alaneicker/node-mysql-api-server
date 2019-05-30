const connection = require('./db-connection');
const records = require('./seed-data.json');

const up = () => {
  return new Promise(resolve => {
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
      resolve();
    });
  });
};

const down = () => {
  return new Promise(resolve => {
    connection.query('DROP TABLE users', (error, results) => {
      if (error) {
        throw new Error(error);
      };
    
      console.log('DATABASE TABLE DROPPED: ', results);
      resolve();
    });
  });
};

const seed = () => {
  return new Promise(resolve => {
    connection.query(`
      INSERT INTO users (username, password) VALUES ?
    `, [records], (error, results) => {
      if (error) {
        throw new Error(error);
      };

      console.log('DATABASE TABLE SEEDED: ', results);
      resolve();
    });
  });
};

const setup = () => {
  up().then(seed());
}

module.exports = { up, down, seed, setup };

require('make-runnable');