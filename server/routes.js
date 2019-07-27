const routes = require('express').Router();

const {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} = require('./queries');

routes.get('/api/:table', async (req, res) => {
  try {
    const { table } = req.params;
    const { columns } = req.query;
    const response = await getAllRecords(table, columns);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.get('/api/:table/:id', async (req, res) => {
  try {
    const { table, id } = req.params;
    const { columns } = req.query;
    const response = await getRecordById(table, columns, id);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.post('/api/:table/add', async (req, res) => {
  try {
    const { table } = req.params;
    const { body } = req;
    const response = await addRecord(table, body);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.put('/api/:table/update/:id', async (req, res) => {
  try {
    const { table, id } = req.params;
    const { body } = req;
    const response = await updateRecord(table, body, id);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

routes.delete('/api/:table/delete/:id', async (req, res) => {
  try {
    const { table, id } = req.params;
    const response = await deleteRecord(table, id);
    res.send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = routes;