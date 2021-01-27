//mysql dependency
const mysql = require('mysql');


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

  let connection;
  //create a connection 
  connection.connect((err) => {
    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
    connection.end();

  });
  if(process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
  
  } else {
    connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'whatitDo2You',
      database: 'burger_db'
    });
  }

//export this connection to other files
  module.exports = connection;