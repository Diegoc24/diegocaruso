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
      
      try {
        await sendMail(email, name)
        await mySendMail(email, name, last_name, comment)
        console.log("emails sents");
      } catch (error) {
        console.log(error);
      }
      
      return contacts
    
  };

  module.exports = PostUserController;