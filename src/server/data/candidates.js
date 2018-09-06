'use strict';

var database = {
  candidates: []
};

// const exampleStructure = {
//   firstName: "",
//   lastName: "",
//   email: ""
// }

exports.putCandidate = function(data) {
  database.candidates.push(data);
  console.log(JSON.stringify(database, null, 2));
}

exports.getCandidate = function(email) {
  for(var candidate of database.candidates) {
     console.log('found: ', candidate.email);
     return candidate;
  }
}
