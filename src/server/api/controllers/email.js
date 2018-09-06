"use strict";
const nodemailer = require("nodemailer");
/*{
    "name": "abc",
    "email": "abc@gmail.com",
    "stage": "abc"
    }*/
exports.sendEmail = function(request, response, next) {
  const email = request.body.email;
  const name = request.body.name;
  const stage = request.body.stage;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "SynergyTestEmail123@gmail.com",
      pass: "AnthonyWong"
    }
  });

  const mailOptions = {
    from: "SynergyTestEmail123@gmail.com",
    to: email,
    subject: "Congratulations",
    text:
      "Congratulations " +
      request.body.name +
      "! You have moved onto the " +
      request.body.stage +
      " stage."
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  response.statusCode = 200;
  // response.setHeader('Content-Type', 'text/html; charset=utf-8');
  // response.write("Hello World!");
  response.end();
};
