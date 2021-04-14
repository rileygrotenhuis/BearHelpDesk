// Nodemailer
const nodemailer = require('nodemailer');

// This function sends an email to a given client
exports.contactClient = (client, body) => {
    // Sets up the authentication for the use of email
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'rileygrotenhuis@gmail.com',
          pass: 'Aeiy=mpcdbvb1'
        }
      });
      
      // Sets up the mail options
      var mailOptions = {
        from: 'rileygrotenhuis@gmail.com',
        to: client,
        subject: 'Bear Help Desk',
        text: body
      };
      
      // Sends the email with the mail options and authentication provided above
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
}