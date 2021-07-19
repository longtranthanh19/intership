const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseStudentSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  studentID: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    enum: ["1st Year", "2nd Year", "3rd Year"],
  },
  program: {
    type: String,
    required: true,
    enum: ["Bachelor", "Bachelor 4 Year", "Master", "PhD"],
  },
  department: {
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
  wave: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`courseStudents`, courseStudentSchema);
