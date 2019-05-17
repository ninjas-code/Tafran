const express = require('express');
const app = express();
const PORT = 3500;
const bodyparser = require('body-parser')
const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user:'root',
    password:"1111",
    database: 'foodApp'
});
console.log("Hi")
connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results[0].solution);
  });
app.get('/',(req, res) => res.send("Hello"));

app.get('/',(res,req) => res.sendfile('index.html'));


app.listen(PORT, () => console.log("The Server is working on "+PORT));

connection.end();
