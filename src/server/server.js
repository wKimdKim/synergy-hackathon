const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Routing handlers
const emailer = require("./api/controllers/email");
const candidate = require("./api/controllers/candidate");
const job = require("./api/controllers/job");
const application = require("./api/controllers/application");

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
app.route("/job").post(function(request, response, next) {
  return job.createJob(request, response, next);
});
app.route("/candidate/:email").get(function(request, response, next) {
  return candidate.getCandidate(request, response, next);
});
app.route("/candidate").post(function(request, response, next) {
  return candidate.createCandidate(request, response, next);
});
app.route("/application").post(function(request, response, next) {
  return application.createApplication(request, response, next);
});
app.route("/application").get(function(request, response, next) {
  return application.listApplications(request, response, next);
});
app.route("/sendEmail").put(function(request, response, next) {
  return emailer.sendEmail(request, response, next);
});

// CLIENT-SIDE ROUTES
app.route("/candidates/:email").get(function(request, response, next) {
  var email = encodeURIComponent(request.params.email.toLowerCase());
  response.redirect(301, "/candidate.html?candidate=" + email);
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
