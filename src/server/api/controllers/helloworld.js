"use strict";

const jobs = require("../../data/jobs");

exports.sayHello = function(request, response, next) {

  var job = {
    referenceNumber: request.body.referenceNumber,
    jobTitle: request.body.jobTitle,
    jobDescription: request.body.jobDescription
  }

  jobs.putJob(job);

  var getJob = jobs.getJob("1234");
  console.log("Found job: " + job.jobTitle);

  response.statusCode = 200;
  response.end();
};
