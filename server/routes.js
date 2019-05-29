import express from 'express';
import {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
} from './queries'

const routes =  express.Router();

routes.get('/api/users', (req, res) => {
  getUsers()
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.get('/api/users/:id', (req, res) => {
  getUserById(req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.post('/api/users/add', (req, res) => {
  addUser(req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.put('/api/users/update/:id', (req, res) => {
  updateUser(req.params.id, req.body)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

routes.delete('/api/users/delete/:id', (req, res) => {
  deleteUser(req.params.id)
    .then(resData => {
      res.send(resData);
    })
    .catch(err => console.log(err));
});

export default routes;