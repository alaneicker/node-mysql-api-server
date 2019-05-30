const connection = require('./db-connection');

const getAllRecords = (table) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const getRecordById = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const addRecord = (table, reqBody) => {
  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, reqBody, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const updateRecord = (table, id, reqBody) => {
  const columns = Object.keys(reqBody).map(column => `${column} = ?`).join(',')
  const values = Object.values(reqBody);

  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ${columns} WHERE id = ${id}`, values, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const deleteRecord = (table, id) => {
  return new Promise((resolve, reject) => {
    connection.query(`DELETE FROM ${table} WHERE id = ${id}`, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

module.exports = {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
};