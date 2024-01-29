const {mySendMail, sendMail} = require("../../nodemailer");
const contact = require("../model/userContact");

const PostUserController = async (req, res) => {
    const { name, last_name, email, comment } = req.body;
  
  if(!name || !last_name || !email || !comment){
      throw new Error({message: "you must submit all required fields"})
  }
  
    
     
  
      const contacts = await contact.create({
        name,
        last_name,
        email,
        comment,
      });
      await sendMail(email, name).then(() => console.log("email sent"))
      .catch((error) => {
        console.error(error)
        throw new Error({message: error})
    });
      await mySendMail(email, name, last_name, comment).then(() => console.log("My email sent"))
      .catch((error) => {
        console.error(error)
        throw new Error({message: error})
    });
      
      
      return contacts
    
  };

  module.exports = PostUserController;