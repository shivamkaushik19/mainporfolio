const express = require("express");
const router = express.Router();
const Contact = require("./contactmodel");

// POST route to submit form data
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, location, message, saveInfo } = req.body;

    const newContact = new Contact({
      name,
      email,
      phone,
      location,
      message,
      saveInfo,
    });

    const savedContact = await newContact.save();
    res.status(201).json(savedContact);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET route to fetch all contact submissions
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
