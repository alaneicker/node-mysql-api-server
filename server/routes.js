const routes = require('express').Router();

const {
  getAllRecords,
  getRecordById,
  addRecord,
  updateRecord,
  deleteRecord,
} = require('./queries');

routes.get('/api/:table', (req, res) => {
  getAllRecords(req.params.table)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.get('/api/:table/:id', (req, res) => {
  getRecordById(req.params.table, req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.post('/api/:table/add', (req, res) => {
  addRecord(req.params.table, req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.put('/api/:table/update/:id', (req, res) => {
  updateRecord(req.params.table, req.params.id, req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.delete('/api/:table/delete/:id', (req, res) => {
  deleteRecord(req.params.table, req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

module.exports = routes;