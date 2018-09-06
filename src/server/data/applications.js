'use strict';

var database = {
  applications: []
};

// const exampleStructure = {
//   referenceNo: "",
//   email: ""
// }

exports.putCandidate = function(data) {
  database.applications.push(data);
  console.log(JSON.stringify(database, null, 2));
}

exports.getCandidate = function(referenceNo) {
  for(var application of database.applications) {
     console.log('found: ', application.referenceNo);
     return application;
  }
}
