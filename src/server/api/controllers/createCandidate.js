"use strict";

const candidates = require("../../data/candidates");

exports.createCandidate = function (request, response, next) {

    var candidate = {
        firstName: request.body.firstName,
        lastName: request.body.lastName,
        email: request.body.email
    }

    jobs.putJob(candidate);

    var getCandidate = candidates.getCandidate("1");
    console.log("Found emails for candidates: " + candidate.email);

    response.statusCode = 200;
    response.end();
};
