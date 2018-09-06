"use strict";

var applications = {
  jobs: {
    "SQL Developer": [
      { email: "wkimdkim@gmail.com" },
      { email: "abc@gmail.com" },
      { email: "def@gmail.com" }
    ],
    "Front-End Developer": [
      { email: "wkimdkim@gmail.com" },
      { email: "abc@gmail.com" },
      { email: "def@gmail.com" }
    ],
    "Back-End Developer": [
      { email: "wkimdkim@gmail.com" },
      { email: "abc@gmail.com" },
      { email: "def@gmail.com" }
    ]
  }
};

exports.getDetail = function(request, response, next) {
  const applicantID = request.body.email;
  for (const application of applications.jobs) {
    console.log(application);
  }
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");
};
