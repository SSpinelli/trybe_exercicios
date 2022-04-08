// hello-msc/models/connection.js

const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'joao',
  password: 'jg996167',
  database: 'model_example'
});

module.exports = connection;