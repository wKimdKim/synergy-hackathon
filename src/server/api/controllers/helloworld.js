"use strict";

exports.sayHello = function(request, response, next) {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/html; charset=utf-8");

  let json = request.body;
  // let job_list = [];

  for (var element in json) {
    job_list.push([element, json[element]]);
  }

  // console.log(job_list);

  // for (var i = 0; i<job_list.length; i++) {
  //     console.log(job_list[i][0]);
  //     console.log(job_list[i][1]);
  //     console.log("");
  // }

  // response.write("TEST");

  response.end();
};
