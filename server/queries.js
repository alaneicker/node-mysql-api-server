const { query } = require('./db-connection');

const getAllRecords = (reqBody) => {
  const { table, columns = ['*'] } = reqBody;
  
  return new Promise(async (resolve, reject) => {
    try {
      const result = await query(`
        SELECT ${columns.join(',')}
        FROM ${table}
      `);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const getRecordById = (reqBody, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { table, columns = ['*'] } = reqBody;
      const result = await query(`
        SELECT ${columns.join(',')}
        FROM ${table}
        WHERE id = ${id}
      `);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const addRecord = (reqBody) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { table, ...values } = reqBody;
      const result = await query(`
        INSERT INTO ${table} 
        SET ?
      `, values);
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const updateRecord = (reqBody, id) => {
  return new Promise((resolve, reject) => {
    try {
      const { table, ...values } = reqBody;
      const columns = Object.keys(values).map(column => `${column} = ?`).join(',');
      const result = query(`
        UPDATE ${table}
        SET ${columns}
        WHERE id = ${id}
      `, Object.values(values));
      resolve(result);
    } catch (err) {
      reject(err);
    }
  });
}

const deleteRecord = (reqBody, id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { table } = reqBody;
      const result = await query(`
        DELETE FROM ${table}
        WHERE id = ${id}
      `);
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