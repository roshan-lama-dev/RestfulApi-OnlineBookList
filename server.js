var express = require("express");

//creating a web server

var server = express();

//including the restful api
var onlineAPI = require("./controllerAPI/api-controller");

var bodyParser = require("body-parser");
const { Router } = require("express");

var cors = require("cors");
server.use(cors());

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

server.use("/api/books", onlineAPI);

server.listen(3070);
console.log("Server is running ");
