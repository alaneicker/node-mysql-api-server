# Node MySQL API Server

A simple API Server that can be used to query any MySQL database and table

**Powered By**

- Node
- Express
- MySQL

## Project Setup

After cloning the repositiory, run the following command.

```
npm install
```

## Environment Variables

Navigate to `env/` directory and update the `.env.development` and `.env.production` files with your environment settings.

```
DB_HOST=<host>
DB_USER=<user>
DB_PASSWORD=<password>
DB_CONNECTION_LIMIT=20
DB=contacts
```

## Run the API Server

Development mode
```
npm run start:dev
```

Production mode
```
npm run start
```

## Endpoints

### GET

**Note:** Specific columns can be returned by adding them as paramerters to the URL - e.g. `?columns=name,email,phone`. By default, if no columns are specified, the returned response will include all columns. Column names are separated by a comma.

#### `/api/:table`

```javascript
const response = await fetch('/api/contacts?&columns=name,email,phone'); 
```

#### `/api/:table/:id`

```javascript
const response = await fetch('/api/contacts/1?&columns=name,email,phone'); 
```

### POST

#### `/api/:table/add`

```javascript
const body = { 
  name: 'Bob Smith', 
  email: 'b_smith1234@gmail.com', 
  phone: '555-555-1234',
};

const response = await fetch('/api/contacts/add', { method: 'POST', body }); 
```

### PUT

#### `/api/:table/update/:id`

```javascript
const body = { phone: '555-555-4321'};

const response = await fetch('/api/contacts/update/1', { method: 'PUT', body }); 
```

### DELETE

#### `/api/:table/delete/:id`

```javascript
const response = await fetch('/api/contacts/delete/1', { method: 'DELETE' }); 
```