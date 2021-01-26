//mysql dependency
const sql = require('mysql');

const mysql = sql();

//connection to link to mysql workbench
const connection = mysql.createConnection({
    host: 'localhost',
  
    // port
    port: 3306,
  
    // MySQL username
    user: 'root',
  
    password: 'whatitDo2You',
  
    // Name of database
    database: 'burger_db',
  });
  //create a connection 
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.end();
  });
//export this connection to other files
  module.exports = connection;