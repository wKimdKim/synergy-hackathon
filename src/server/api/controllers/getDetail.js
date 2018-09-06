"use strict";

var applications = [ [ 'reference_number', '1' ],
[ 'email', 'testing@synergy.com' ],
[ 'application_date', '05/05/2018' ] ];

exports.getDetail = function(request, response, next) {
  const applicantID = request.body.email;
  // console.log(applications.jobs);
  // for (const application of applications.jobs) {
  //   console.log(application);
  // }

  for (var i = 0; i < applications.length; i++){
    var obj = applications[i];
    console.log(obj);
  }

  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  response.end();
};
