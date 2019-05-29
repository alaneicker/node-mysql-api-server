const connection = require('./db-connection');

const getUsers = () => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users', (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const getUserById = id => {
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM users WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const addUser = reqBody => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO users SET ?', reqBody, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const updateUser = (id, reqBody) => {
  return new Promise((resolve, reject) => {
    connection.query(`
      UPDATE 
        users 
      SET 
        id = ?, 
        name = ?,
        email = ?,
        username = ?, 
        password = ?
      WHERE id = ?
    `, [Object.values(reqBody), id], (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const deleteUser = id => {
  return new Promise((resolve, reject) => {
    connection.query('DELETE FROM users WHERE id = ?', [id], (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
};