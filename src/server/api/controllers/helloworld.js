'use strict';

exports.sayHello = function(request, response, next){
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text');

    response.write("Hello World!");

    reponse.end();


}