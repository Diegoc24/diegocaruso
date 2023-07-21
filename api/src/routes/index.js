const contact = require("../model/userContact");
const { Router } = require("express");
const {sendMail, mySendMail} = require("../../nodemailer"); // Ajusta la ruta según la ubicación del módulo nodemailer

const router = Router();

router.post("/", async (req, res) => {
  const { name, last_name, email, comment } = req.body;

if(!name || !last_name || !email || !comment){
    return res.status(400).json({message: "you must submit all required fields"})
}

  try {
   

    const contacts = await contact.create({
      name,
      last_name,
      email,
      comment,
    });
    await sendMail(email, name)
    await mySendMail(email, name, last_name, comment)
    
    
    res.status(200).send(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({message: error.message});
  }
});

module.exports = router;
