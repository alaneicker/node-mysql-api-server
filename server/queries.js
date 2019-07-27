const { query } = require('./db-connection');

const getAllRecords = (table, columns = '*') => {  
  return new Promise(async (resolve, reject) => {
    try {
      const result = await query(`SELECT ${columns} FROM ${table}`);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const getRecordById = (table, columns = '*', id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await query(`SELECT ${columns} FROM ${table} WHERE id = ${id}`);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const addRecord = (table, body) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await query(`INSERT INTO ${table} SET ?`, body);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const updateRecord = (table, body, id) => {
  return new Promise((resolve, reject) => {
    try {
      const columns = Object.keys(body).map(column => `${column} = ?`).join(',');
      const result = query(
        `UPDATE ${table} SET ${columns} WHERE id = ${id}`
        , Object.values(body)
      );
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const deleteRecord = (table, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await query(`DELETE FROM ${table} WHERE id = ${id}`);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

module.exports = {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
};