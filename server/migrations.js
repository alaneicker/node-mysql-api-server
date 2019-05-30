const connection = require('./db-connection');

const records = [
  [
    'alaneicker',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'jdoe',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'frednelson',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'msmith',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'bobnewhart',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'paulmonson',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ],
  [
    'johnj',
    'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG'
  ]
];

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