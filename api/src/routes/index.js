const PostUserController = require("../controllers/PostUserController");
const contact = require("../model/userContact");
const { Router } = require("express");

const router = Router();

router.post("/", async (req, res) => {
  try {
    const response = await PostUserController(req, res);
    res.status(201).json(response);
    
  } catch (error) {
    res.status(404).json(error)
  }
});

module.exports = router;
