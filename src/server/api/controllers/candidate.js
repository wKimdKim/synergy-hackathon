"use strict";

const candidates = require("../../data/candidates");

exports.createCandidate = function (request, response, next) {

    var candidate = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email
    }

    candidates.putCandidate(candidate);

    // var getCandidate = candidates.getCandidate("contact@anthonywong.co.nz");
    // console.log("Found candidates: " + candidate.FirstName + " " + candidate.LastName);
    console.log(JSON.stringify(candidate, null, 2));

    response.statusCode = 200;
    response.end();
};
