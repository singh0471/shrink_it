const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});


const sendEmail = async (to, subject, message) => {
  try {
    
    const mailOptions = {
      from: process.env.EMAIL_USER, 
      to: to,  
      subject: subject, 
      text: message,  
    };

     
    const info = await transporter.sendMail(mailOptions);

    console.log(`Email sent to ${to}: ${info.messageId}`);
    return info;
  } catch (error) {
    console.error(`Error sending email: ${error.message}`);
    throw error;  
  }
};



module.exports = sendEmail;
