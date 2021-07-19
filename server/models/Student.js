const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  studentID: { type: String, required: true },
  studentName: {
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
  intake: {
    type: String,
    required: true,
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
  levelOfTraining: {
    type: String,
    required: true,
    enum: ["Bachelor 4 Year","Bachelor", "Master", "PhD"],
  },
  typeOfTraining: {
    type: String,
    required: true,
    enum: ["Full-Time", "Part-Time"],
  },
  major: {
    type: String,
    required: true,
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
  session: {
    type: String,
    required: true,
  },
  wave: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`students`, studentSchema);
