const express = require("express");
const router = express.Router();

// importing bcrypt for hashing the password
const bcrypt = require('bcrypt');
const saltRounds = 10;

// importing jwt for creating tokens
const jwt = require('jsonwebtoken');

//importing the database connection file
require("../db/conn");

//importing the user schema
const User = require("../model/userSchema");

// define routes
router.get("/", (req, res) => {
  res.send("Hello world from the server router.js");
});


// Signup route
router.post("/signup", async (req, res) => {
  try {
    // destructuring the request body
    const { name, email, phone, password, cpassword } = req.body;

    // validation
    if (!name || !email || !phone || !password || !cpassword) {
      return res.status(422).json({ error: "Please fill the field properly" });
    }

    // checking if the email and phone already exist
    const userExist = await User.findOne({
      $or: [{ email: email }, { phone: phone }],
    });
    if (userExist) {
      return res.status(422).json({ error: "Email or phone already exist" });
    }

    // check if password and cpassword match
    if (password !== cpassword) {
      return res.status(422).json({ error: "Passwords do not match" });
    }

    // hash the password and cpassword
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const hashedCpassword = await bcrypt.hash(cpassword, saltRounds);

    // creating a new user
    const user = new User({ name, email, phone, password: hashedPassword, cpassword: hashedCpassword });

    // saving the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to register" });
  }
});

// login route
router.post('/signin', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: 'Please fill in all the fields.' });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials.' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: 'Invalid credentials.' });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
    user.tokens.push({ token }); // Add the new token to the user's document
    await user.save(); // Save the updated user document to the database

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      secure: true,
      sameSite: 'none'
    });

    res.json({ message: 'User signed in successfully.', token });
  } catch (err) {
    res.status(500).json({ error: 'Failed to sign in.' });
  }
});





module.exports = router;
