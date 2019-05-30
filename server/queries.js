const connection = require('./db-connection');

const getAllRecords = (reqBody) => {
  const { table } = reqBody;

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table}`, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const getRecordById = (reqBody, id) => {
  const { table } = reqBody;

  return new Promise((resolve, reject) => {
    connection.query(`SELECT * FROM ${table} WHERE id = ${id}`, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const addRecord = (reqBody) => {
  const { table, ...values } = reqBody;

  return new Promise((resolve, reject) => {
    connection.query(`INSERT INTO ${table} SET ?`, values, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const updateRecord = (reqBody, id) => {
  const { table, ...values } = reqBody;
  const columns = Object.keys(values).map(column => `${column} = ?`).join(',')

  return new Promise((resolve, reject) => {
    connection.query(`UPDATE ${table} SET ${columns} WHERE id = ${id}`, values, (error, results) => {
      if (error) {
        reject(error);
      };
      
      resolve(results);
    });
  });
}

const deleteRecord = (reqBody, id) => {
  const { table } = reqBody;
  
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