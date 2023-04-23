const mongoose = require("mongoose");

// Define userFlatRequests schema
const userFlatRequestsSchema = new mongoose.Schema({
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
  date: {
    type: Date,
    default: Date,
  },
  duration: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
});

// Create userFlatRequests model
const userFlatRequests = mongoose.model(
  "userFlatRequests",
  userFlatRequestsSchema
);

module.exports = userFlatRequests;
