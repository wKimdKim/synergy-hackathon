'use strict';

var database = {
  applications: []
};

const exampleStructure = {
  referenceNumber: "",
  email: ""
}

exports.putApplication = function(data) {
  database.applications.push(data);
  console.log(JSON.stringify(database, null, 2));
}

exports.getApplication = function(email) {
  let result = [];
  for(var application of database.applications) {
     console.log('found: ', application.email);
     if (application.email === email) {
       result.push(application);
     }
  }
  return result;
}

exports.listApplications = function() {
  let result = [];
  for(var application of database.applications) {
     console.log('listing: ', application.email);
     result.push(application);
  }
  return result;
}
