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
  for(var application of database.applications) {
     console.log('found: ', application.email);
     return application;
  }
}
