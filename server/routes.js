const routes = require('express').Router();

const {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} = require('./queries');

routes.get('/api/get-all-records', (req, res) => {
  getAllRecords(req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => { throw new Error(err) });
});

routes.get('/api/get-record/:id', (req, res) => {
  getRecordById(req.body, req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => { throw new Error(err) });
});

routes.post('/api/add-record', (req, res) => {
  addRecord(req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => { throw new Error(err) });
});

routes.put('/api/update-record/:id', (req, res) => {
  updateRecord(req.body, req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => { throw new Error(err) });
});

routes.delete('/api/delete-record/:id', (req, res) => {
  deleteRecord(req.body, req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => { throw new Error(err) });
});

module.exports = routes;