"use strict";

const candidateHandler = require("../../data/candidates");
const jobHandler = require("../../data/jobs");
const applicationHandler = require("../../data/applications");

exports.createApplication = function(request, response, next) {

  var application = {
    referenceNumber: request.body.referenceNumber,
    email: request.body.email
  }

  applicationHandler.putApplication(application);

  response.statusCode = 200;
  response.end();
};

exports.listApplications = function(request, response, next) {

  var result = applicationHandler.listApplications();
  console.log('Listing Applications');
  console.log(JSON.stringify(result, null, 2));

  result.forEach(function(application) {
    const candidate = candidateHandler.getCandidate(application.email);
    console.log('candidate: ' + JSON.stringify(candidate, null, 2));
    application.firstName = candidate.firstName;
    application.lastName = candidate.lastName;

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
