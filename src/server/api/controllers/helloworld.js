'use strict';

// let json = '{"job_description":"SQL Developer", "reference_number":42, closing_date:"12/10/2018 00:00:00"}';
exports.sayHello = function (request, response, next) {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    // console.log(request.body);
    // console.log(request.body.job_description);
    let job_data = response.body + ''.split(",");
    // job_data.append(response.body);
    console.log(typeof job_data)
    let test = job_data.split(",");
    console.log(test);

    response.write("TEST");

    response.end();


}
