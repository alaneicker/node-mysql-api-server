const routes = require('express').Router();
const { query } = require('./db-connection');

routes.get('/api/:table', async (req, res) => {
  try {
    const { 
      params: { table }, 
      query: { columns = '*' },
    } = req;
    const response = await query(`SELECT ${columns} FROM ${table}`);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.get('/api/:table/:id', async (req, res) => {
  try {
    const {
      params: { table, id },
      query: { columns = '*' }
    } = req;
    const response = await query(`SELECT ${columns} FROM ${table} WHERE id = ${id}`);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.post('/api/:table/add', async (req, res) => {
  try {
    const {
      params: { table },
      body,
    } = req;
    const response = await query(`INSERT INTO ${table} SET ?`, body);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.put('/api/:table/update/:id', async (req, res) => {
  try {
    const {
      params: { table, id },
      body,
    } = req;
    const columns = Object.keys(body).map(column => `${column} = ?`).join(',');
    const response = await query(
      `UPDATE ${table} SET ${columns} WHERE id = ${id}`
      , Object.values(body)
    );
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.delete('/api/:table/delete/:id', async (req, res) => {
  try {
    const {
      params: { table, id },
    } = req;
    const response = await query(`DELETE FROM ${table} WHERE id = ${id}`);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = routes;
