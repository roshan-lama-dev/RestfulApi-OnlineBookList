var dbcon = require("../database");
var connection = dbcon.getconnection();
connection.connect();

var express = require("express");
const { request } = require("http");
const { response } = require("express");
var router = express.Router();

//Route to get all the data
router.get("/", (request, response) => {
  connection.query("SELECT * FROM book", (err, records, fields) => {
    if (err) {
      console.log("Error while retriving the data");
    } else {
      response.send(records);
    }
  });
});

// Display the records as per the category id

router.get("/:category_id", (req, res) => {
  connection.query(
    "Select * from book where category_id=" + req.params.category_id,
    (err, records, fields) => {
      if (err) {
        console.log("Error while getting the data as per the category id");
      } else {
        res.send(records);
      }
    }
  );
});

router.post("/", (req, res) => {
  var book_id = req.body.book_id;
  var title = req.body.title;
  var author = req.body.author;
  var price = req.body.price;
  var description = req.body.description;
  var category_id = req.body.category_id;

  connection.query(
    "INSERT INTO book VALUES(" +
      book_id +
      ",'" +
      title +
      "','" +
      author +
      "','" +
      price +
      "','" +
      description +
      "','" +
      category_id +
      "')",
    (err, result) => {
      if (err) {
        console.error("Error while retrieve the data" + err);
      } else {
        res.send({ insert: "success" });
      }
    }
  );
});

//PUT method using the book id
router.put("/", (req, res) => {
  var book_id = req.body.book_id;
  var title = req.body.title;
  connection.query(
    "UPDATE book SET title='" + title + "' where book_id=" + book_id,
    (err, result) => {
      if (err) {
        console.error("Error while Updating the data" + err);
      } else {
        res.send({ update: "success" });
      }
    }
  );
});

//Delete method using the book id
router.delete("/:id", (req, res) => {
  var id = req.params.id;
  connection.query(
    "delete from book where book_id=" + id,
    (err, records, fields) => {
      if (err) {
        console.error("Error while deleting the data");
      } else {
        res.send({ delete: "Delete Sucess" });
      }
    }
  );
});
module.exports = router;
