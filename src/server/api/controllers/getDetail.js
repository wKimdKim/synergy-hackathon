"use strict";

exports.getDetail = function(request, response, next) {
  const applicantID = request.body.email;

  console.log(applications);
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
};
