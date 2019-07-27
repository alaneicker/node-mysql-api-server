# Node MySQL API Server

A simple API Server that can be used to query any MySQL database and table

**Powered By**

- Node
- Express
- MySQL

## Environment Variables

```
DB_HOST=<host>
DB_USER=<user>
DB_PASSWORD=<password>
DB_CONNECTION_LIMIT=20
DB=users
```

## Endpoints

### GET

#### `/api/get-all-records`

```javascript
const { data } = await axios.get('/api/get-all-records', { table: 'users' }); 
```

#### `/api/get-record/:id`

```javascript
const { data } = await axios.get('/api/get-record/1', { table: 'users' }); 
```

### POST

#### `/api/add-record`

```javascript
const { data } = await axios.post('/api/add-record', { 
  table: 'users', 
  username: 'my_username', 
  password: 'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG', 
}); 
```

### PUT

#### `/api/update-record/:id`

```javascript
const { data } = await axios.put('/api/update-record/1', { 
  table: 'users', 
  username: 'my_updated_username', 
}); 
```

### DELETE

#### `/api/delete-record/:id`

```javascript
const { data } = await axios.delete('/api/delete-record/1', { table: 'users' }); 
```