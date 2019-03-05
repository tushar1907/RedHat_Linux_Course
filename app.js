var faker = require('faker');

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'tushar1907',  //your username
  database : 'join_us'         //the name of your db
});


// Selecting data
// var q = 'select * from users';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// Inserting data
// var q = 'insert into users (email) values ("tushar_19@hotmail.com")';
// connection.query(q, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

var person = {email: faker.internet.email()};

//var q = 'insert into users (email) values ("tushar_19@hotmail.com")';
connection.query('insert into users set ?',person, function (error, results, fields) {
  if (error) throw error;
  console.log(results);
});

connection.end();