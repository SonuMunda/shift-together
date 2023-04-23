const express = require("express");
const router = express.Router();
const UserMessage = require("../model/userMessageSchema");
const UserFlatRequest = require("../model/userFlatRequestsSchema");

const Authenticate = require("../middleware/authenticate");

// importing bcrypt for hashing the password
const bcrypt = require("bcrypt");
const saltRounds = 10;

// importing jwt for creating tokens
const jwt = require("jsonwebtoken");

//importing the database connection file
require("../db/conn");

//importing the user schema
const User = require("../model/userSchema");

// define routes
router.get("/", (req, res) => {
  res.send("Hello world from the server router.js");
});

// Signup route
router.post("/register", async (req, res) => {
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
    const user = new User({
      name,
      email,
      phone,
      password: hashedPassword,
      cpassword: hashedCpassword,
    });

    // saving the user to the database
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Failed to register" });
  }
});

// login route
router.post("/signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(422).json({ error: "Please fill in all the fields." });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(400).json({ error: "Invalid credentials." });
    }

    const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

    // Set cookie with the token
    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 1 day
      secure: true,
      sameSite: "none",
    });

    // Send user details along with the token
    const { _id, name, email: userEmail } = user;
    res.json({
      message: "User signed in successfully.",
      token,
      user: { _id, name, email: userEmail, phone: user.phone },
    });
  } catch (err) {
    // Return specific error message from server
    res.status(500).json({ error: `Failed to sign in. ${err.message}` });
  }
});

router.get("/getdata", Authenticate, async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json({
      message: "User details retrieved successfully.",
      user,
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Route handler for submitting contact form
router.post("/contact", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    // Check if any of the required fields are missing
    if (!name || !email || !phone || !message) {
      console.log("Fill All Fields");
      return res
        .status(400)
        .json({ error: "Please fill out all required fields." });
    }

    // Create a new UserMessage instance
    const Messages = new UserMessage({
      name,
      email,
      phone,
      message,
    });

    // Save the userMessage to the database
    await Messages.save();

    // Return a success message
    res
      .status(201)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Route handler for submitting rent form
router.post("/rent", async (req, res) => {
  try {
    const { name, email, phone, date, duration, location, size } = req.body;

    // Check if any of the required fields are missing
    if (!name || !email || !phone || !date || !duration || !location || !size) {
      console.log("Fill All Fields");
      return res
        .status(400)
        .json({ error: "Please fill out all required fields." });
    }

    // Create a new UserMessage instance
    const FlatRequests = new UserFlatRequest({
      name,
      email,
      phone,
      date,
      duration,
      location,
      size,
    });

    // Save the userMessage to the database
    await FlatRequests.save();

    // Return a success message
    res
      .status(201)
      .json({ success: true, message: "Renting Flat is Requested" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, error: "Internal server error" });
  }
});

router.get("/logout", (req, res) => {
  res.clearCookie("token", { path: "/" });
  res.status(200).send("Logout Successfully");
});

module.exports = router;
