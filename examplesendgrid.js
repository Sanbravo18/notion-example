// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs


const dotenv = require("dotenv")
const sgMail = require("@sendgrid/mail")

dotenv.config()
sgMail.setApiKey(process.env.SENDGRID_KEY)

const msg = {
  to: 'ship4.brv@gmail.com', // Change to your recipient
  from: 'daniel.brv@hotmail.cl', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })