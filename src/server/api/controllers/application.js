"use strict";

const applications = require("../../data/applications");

exports.createApplication = function (request, response, next) {

    var application = {
        referenceNumber: request.body.referenceNumber,
        email: request.body.email
    }

    applications.putApplication(application);

    response.statusCode = 200;
    response.end();
};
