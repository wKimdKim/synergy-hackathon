"use strict";

const candidateHandler = require("../../data/candidates");
const jobHandler = require("../../data/jobs");
const applicationHandler = require(".../data/applications");

exports.createCandidate = function(request, response, next) {
  var candidate = {
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    email: request.body.email
  };

  candidateHandler.putCandidate(candidate);

  // var getCandidate = candidates.getCandidate("contact@anthonywong.co.nz");
  // console.log("Found candidates: " + candidate.FirstName + " " + candidate.LastName);
  console.log(JSON.stringify(candidate, null, 2));

  response.statusCode = 200;
  response.end();
};

exports.getCandidate = function(request, response, next) {
  let result = {};

  const candidateEmail = request.body;
  const candidate = candidateHandler.getCandidate(candidateEmail);
  result.push(candidate);
  const applications = applicationHandler.getApplication(candidateEmail);
  result.push(applications);

  for (var application of result.applications) {
    const job = jobHandler.getJob(application.referenceNumber);
    application.push(job.jobTitle);
    application.push(job.jobDescription);
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.write(JSON.stringify(result, null, 2));

  response.end();
};
