const mysql = require('mysql');

// Create a mysql connection

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Pa5Sw0rD',
  database: 'node_mysql_crud_db'
});

dbConn.connect(function(err){
  if (err) throw err;
  console.log('Database connected successfully');
});

module.exports = dbConn;
