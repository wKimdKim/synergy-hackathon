'use strict';

var database = {
  jobs: []
};

const exampleStructure = {
  referenceNumber: "",
  jobTitle: "",
  jobDescription: ""
}

exports.putJob = function(data) {
  database.jobs.push(data);
  console.log(JSON.stringify(database, null, 2));
}

exports.getJob = function(referenceNumber) {
  for(var job of database.jobs) {
     console.log('found: ', job.referenceNumber);
     return job;
  }
}
