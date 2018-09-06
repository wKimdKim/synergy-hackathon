"use strict";

const applications = require("../../data/applications");

exports.createApplication = function (request, response, next) {

    var application = {
        referenceNumber: request.body.referenceNumber,
        email: request.body.email
    }

    applications.putApplication(application);

    // var getApplication = applications.getApplication("testing@gmail.com");
    // console.log("Found email for candidate: " + application.email);

    response.statusCode = 200;
    response.end();
};
