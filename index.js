var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'todo list'
});
 
connection.connect();
 
connection.query('SELECT * FROM todo', function (error, results, fields) {
  if (error) throw error;
  console.log('ผลลัพธ์: ', results );
});
 
connection.end();