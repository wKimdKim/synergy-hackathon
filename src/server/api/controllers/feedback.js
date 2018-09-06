"use strict";

const applicationHandler = require("../../data/applications");

// {
//   referenceNumber: 123,
//   email: test@test.com
// }
exports.requestFeedback = function(request, response, next) {

  var referenceNumber = request.body.referenceNumber;
  var email = request.body.email;

  var application = applicationHandler.getApplication(referenceNumber, email);
  application.requestingFeedback = "1";

  response.statusCode = 200;
  response.end();
};
