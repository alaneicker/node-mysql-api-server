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

#### `/api/:table`

```javascript
const response = await fetch('/api/users?&columns=username'); 
```

#### `/api/:table/:id`

```javascript
const response = await fetch('/api/users/users/1?&columns=username'); 
```

### POST

#### `/api/:table/add`

```javascript
const response = await fetch('/api/users/add', {
  method: 'POST',
  body: { 
    username: 'my_username', 
    password: 'bcrypt$2b$14$.5OgqP0JeLVbd/6qQ6O4S.SQyTjQkG/LSBFH3MjLR6G8mnGo1vMFG', 
  }
}); 
```

### PUT

#### `/api/:table/update/:id`

```javascript
const response = await fetch('/api/users/update/1', {
  method: 'PUT',
  body: { username: 'my_updated_username'},
}); 
```

### DELETE

#### `/api/:table/delete/:id`

```javascript
const response = await fetch('/api/users/delete/1', { method: 'DELETE' }); 
```