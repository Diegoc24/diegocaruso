const nodemailer = require("nodemailer");
require("dotenv").config()

const {EMAIL, PASSWORD} = process.env
const sendMail = async (email, name) => {
  
 
 
  const transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port: 465,
    secure: true,
    debug: true,
    auth: {
      user: EMAIL,
      pass: PASSWORD,
      
    },
  });
  transporter.sendMail({
    from: '"Diego Caruso " <carusodiegod@gmail.com>', // sender address
    to: email,
    subject: "Diego Caruso", // Subject line
    text: "Diego Caruso", // plain text body
    html: `<body >
    <table style=" width: 100%; height: 100%; text-align: center; ">
      <tr style= "">
        <td style="vertical-align: middle; text-align: center;">
          <div style="text-align: center; display: inline-block; text-align: left; padding: 20px; background-color: #f8f8f8; width: 500px;">
            <h1 style="text-align: center; font-size: 24px;">Hola ${name}👋</h1>
            <h2 style="text-align: center; font-size: 20px; margin-top: 20px;">Gracias por ponerse en contacto.</h2>
            <p style=" text-align: center; font-size: 16px; margin-top: 20px;">En el transcurso de 24 horas me pondré en contacto con usted.</p>
            <p style="text-align: center; font-size: 16px; margin-top: 20px;">¡Muchas gracias!</p>
            <div style="text-align: center;">
            <img style="width: 400px; margin-top: 20px; display: inline-block;" src="https://www.adsalsa.com/wp-content/uploads/2021/01/bbddemail_cover-1.png" alt="kid" />
          </div>
          </div>
        </td>
      </tr>
    </table>
  </body>
  `,
  })

  return transporter;
};

const mySendMail = async (email, name, last_name, comment) => {
  
 
 
    const transporter = nodemailer.createTransport({
      host:'smtp.gmail.com',
      port: 465,
      secure: true,
      debug: true,
      auth: {
        user: EMAIL,
        pass: PASSWORD,

      },
    });
    transporter.sendMail({
      from: '"Diego Caruso " <carusodiegod@gmail.com>', // sender address
      to: "carusodiegod@gmail.com",
      subject: "Diego Caruso", // Subject line
      text: "Diego Caruso", // plain text body
      html: `<body >
      <table style=" width: 100%; height: 100%; text-align: center; ">
        <tr style= "">
          <td style="vertical-align: middle; text-align: center;">
            <div style="text-align: center; display: inline-block; text-align: left; padding: 20px; background-color: #f8f8f8; width: 500px;">
              <h1 style="text-align: center; font-size: 24px;">Hola Diego👋</h1>
              <h2 style="text-align: center; font-size: 20px; margin-top: 20px;">${name} ${last_name} con el email ${email} comento esto:</h2>
              <p style=" text-align: center; font-size: 16px; margin-top: 20px;">${comment}</p>
              
              <div style="text-align: center;">
              <img style="width: 400px; margin-top: 20px; display: inline-block;" src="https://www.adsalsa.com/wp-content/uploads/2021/01/bbddemail_cover-1.png" alt="kid" />
            </div>
            </div>
          </td>
        </tr>
      </table>
    </body>
    `,
    })
  
    return transporter;
  };



module.exports = {
    sendMail,
    mySendMail
};




 