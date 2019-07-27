const routes = require('express').Router();

const {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} = require('./queries');

routes.get('/api/get-all-records', async (req, res) => {
  try {
    const response = await getAllRecords(req.body);
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

routes.get('/api/get-record/:id', async (req, res) => {
  try {
    const response = await getRecordById(req.body, req.params.id);
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

routes.post('/api/add-record', async (req, res) => {
  try {
    const response = await addRecord(req.body);
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

routes.put('/api/update-record/:id', async (req, res) => {
  try {
    const response = await updateRecord(req.body, req.params.id);
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

routes.delete('/api/delete-record/:id', async (req, res) => {
  try {
    const response = await deleteRecord(req.body, req.params.id);
    res.send(response);
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = routes;