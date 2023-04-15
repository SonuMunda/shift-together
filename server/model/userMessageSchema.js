const mongoose = require("mongoose");

// Define UserMessage schema
const UserMessageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

// Create UserMessage model
const UserMessage = mongoose.model("UserMessages", UserMessageSchema);

module.exports = UserMessage;
