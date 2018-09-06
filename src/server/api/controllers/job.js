"use strict";

const jobs = require("../../data/jobs");

exports.createJob = function(request, response, next) {

  var job = {
    referenceNumber: request.body.referenceNumber,
    jobTitle: request.body.jobTitle,
    jobDescription: request.body.jobDescription
  }

  jobs.putJob(job);

  response.statusCode = 200;
  response.end();
};
