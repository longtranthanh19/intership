const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ["Student", "Lecturer", "Staff"],
  },
  department: {
    type: String,
    enum: [
      "ICT",
      "PMAB",
      "NANO",
      "WEO",
      "MST",
      "CS",
      "CHEM",
      "FST",
      "AMSN",
      "EER",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model(`users`, UserSchema);
