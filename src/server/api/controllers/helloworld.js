'use strict';

exports.sayHello = function(request, response, next){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    response.write("Hello World!");

    response.end();


}
