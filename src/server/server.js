const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Routing handlers
const helloWorld = require("./api/controllers/helloworld");
const emailer = require("./api/controllers/sendEmail");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static HTML as well
app.use(express.static(path.resolve(__dirname + "/../client")));

// Log all requests
app.all("*", function(request, response, next) {
  console.log(request.method + ": " + request.originalUrl);
  next(); // pass control to the next handler
});

// ROUTES
app.route('/helloworld')
  .post(function (request, response, next) {
    return helloWorld.sayHello(request, response, next);
  });
app.route("/sendEmail").put(function(request, response, next) {
  return emailer.sendEmail(request, response, next);
});

// Handle errors
app.use(function(error, request, response, next) {
  console.error(error);
  response
    .status(error.status || 500)
    .json({ status: error.status, message: error.message });
});

app.listen(port);

console.log("Server started: " + port);
