const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lecturerSchema = new Schema({
  lecturerID: { type: String, required: true },
  lecturerName: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["Male", "Female"],
  },
  dateOfBirth: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
    enum: ["Master", "PhD", "Professor"],
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
    enum: [
      "ICT",
      "PMAB",
      "NANO",
      "WEO",
      "Space",
      "AE",
      "Applied Math",
      "MST",
      "CS",
      "CHEM",
      "FST",
      "AMSN",
      "EER",
    ],
  }
});

module.exports = mongoose.model(`lecturers`, lecturerSchema);
