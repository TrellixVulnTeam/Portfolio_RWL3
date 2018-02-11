let port = process.env.PORT || 3000;
const express = require('express');
var bodyParser = require('body-parser');

const app = express();
var path = require('path');
var http = require('http');

app.use("/", express.static(path.join(__dirname + '/')));

app.get('/', function(req, res) {
    res.sendFile('index.html',{root:path.join(__dirname,'./html/')});
});



app.listen(port, function () {
    console.log('Server started on port 3000!')
});


'use strict';
const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
nodemailer.createTestAccount((err, account) => {

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        }
    });

// setup email data with unicode symbols
let mailOptions = {
    from: 'akshaychougule04@gmail.com', // sender address
    to: 'achougul@syr.edu', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
// Preview only available when sending through an Ethereal account
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
});
