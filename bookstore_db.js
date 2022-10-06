var express = require("express");

var dbcon = require("./database");

//connect to database
var connection = dbcon.getconnection();
connection.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

// Creating a database name bookstore_db
// var sql = "CREATE DATABASE bookstore_db";
// connection.execute(sql, (err, rec) => {
//   if (err) {
//     console.log("Error while executing the SQL query");
//   } else {
//     console.log("Database is created");
//   }
// });

//Creating a table
// var sqltable =
//   "CREATE TABLE book (book_id int(5), title varchar(50), author varchar(50), price decimal(10,2), description LONG VARCHAR, category_id int(5), PRIMARY KEY (book_id))";

// connection.execute(sqltable, (err, records) => {
//   if (err) {
//     console.log("Error while executing the SQL");
//   } else {
//     console.log("SQL is executed");
//   }
// });

//Creating category table
// var sql =
//   "CREATE TABLE category (category_id int(5), name varchar(50), PRIMARY KEY(category_id))";

// connection.execute(sql, (err, records) => {
//   if (err) {
//     console.log("Error while executing the category SQL query");
//   } else {
//     console.log("Category Table is Created");
//   }
// });

//Inserting records into book table
// var sql = new Array();

// sql[0] =
//   "INSERT INTO book values(1, 'Harry Potter', 'J.K Rowling', 250, 'This is harry Potter Book', 1)";

// sql[1] =
//   "INSERT INTO book values(2, 'Mindset', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 4)";

// sql[2] =
//   "INSERT INTO book values(3, 'The 48 Laws of Power', 'Robert Greene', 180.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 4)";

// sql[3] =
//   "INSERT INTO book values(4, 'Atomic Habits', 'Carol Dweck', 200.52, 'Secrets of Mental Math will have you thinking like a math genius in no time. Get ready to amaze your friends—and yourself—with incredible calculations you never thought you could master, as renowned “mathemagician” Arthur Benjamin shares his techniques for lightning-quick calculations and amazing number tricks.', 2)";

// sql[4] =
//   "INSERT INTO book values(5, 'Secrets of Mental Math', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 4)";

// sql[5] =
//   "INSERT INTO book values(6, 'Beginning Programming with Python for Dummies', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 4)";

// sql[6] =
//   "INSERT INTO book values(7, 'SQL for Dummies', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 2)";

// sql[7] =
//   "INSERT INTO book values(8, 'Encyclopedia of Database Systems', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 1)";

// sql[8] =
//   "INSERT INTO book values(9, 'Handbook of graph theory', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 3)";

// sql[9] =
//   "INSERT INTO book values(10, 'Pattern Recognition and Machine Learning', 'Carol Dweck', 200.52, 'World-renowned Stanford University psychologist Carol Dweck, in decades of research on achievement and success, has discovered a truly groundbreaking idea-the power of our mindset.', 4)";

// for (var i = 0; i < sql.length; i++) {
//   connection.execute(sql[i], (err, records) => {
//     if (err) {
//       console.log("There is an error");
//     } else {
//       console.log("It is a success");
//     }
//   });
// }

// clear
