const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql2');

const app = express(); // Define our app using express

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// default route
app.get('/hello', function (req, res) {
  return res.send({ error: true, message: 'hello' });
});

// connection configurations
// var dbConn = mysql.createConnection({
// });
// connect to database
// dbConn.connect();


// Retrieve all books 
app.get('/books', function (req, res) {
  // dbConn.query('select * from tb_book', function (error, results, fields) {
  //   if (error) throw error;
  //   return res.send({ error: false, data: results, message: 'books list.' });
  // });
});

const port = process.env.PORT || 3000; // Set the port

// Start the server
app.listen(port);
console.log('RESTful API demo server started on: ' + port);
