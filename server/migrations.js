const { query, connection } = require('./db-connection');
const records = require('./seed-data.json');

const up = async () => {
  try {
    const response = await query(`
      CREATE TABLE user_login (
        id INT NOT NULL AUTO_INCREMENT, 
        username VARCHAR(15) NOT NULL, 
        password VARCHAR(75) NOT NULL,
        PRIMARY KEY (id)
      )
    `);
    connection.end();
    return response;
  } catch (err) {
    return err;
  }
};

const down = async () => {
  try {
    const response = await query('DROP TABLE user_login');
    connection.end();
    return response;
  } catch (err) {
    return err;
  }
};

const seed = async () => {
  try {
    const response = await query(`INSERT INTO user_login (username, password) VALUES ?`, [records]);
    connection.end();
    return response;
  } catch (err) {
    return err;
  }
};

module.exports = { up, down, seed };

require('make-runnable');
