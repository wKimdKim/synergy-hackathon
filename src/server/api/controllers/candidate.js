"use strict";

const candidateHandler = require("../../data/candidates");
const jobHandler = require("../../data/jobs");
const applicationHandler = require("../../data/applications");

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
  let result = {
    firstName: "",
    lastName: "",
    email: "",
    applications: []
  };

  const candidateEmail = request.params.email;
  console.log('candidateEmail: ' + candidateEmail);

  const candidate = candidateHandler.getCandidate(candidateEmail);
  console.log('candidate: ' + JSON.stringify(candidate, null, 2));
  result.firstName = candidate.firstName;
  result.lastName = candidate.lastName;
  result.email = candidate.email;

  const applications = applicationHandler.getApplication(candidateEmail);
  console.log('applications: ' + JSON.stringify(applications, null, 2));
  for (var application of applications) {
    result.applications.push(application);
  }

  console.log(JSON.stringify(result, null, 2));

  result.applications.forEach(function(application) {
    const job = jobHandler.getJob(application.referenceNumber);
    console.log('job: ' + JSON.stringify(job, null, 2));
    application.jobTitle = job.jobTitle;
    application.jobDescription = job.jobDescription;
  });

  response.statusCode = 200;
  response.setHeader("Content-Type", "application/json; charset=utf-8");
  response.write(JSON.stringify(result, null, 2));

  response.end();
};
