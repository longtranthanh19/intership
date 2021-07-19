const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  courseCode: {
    type: String,
    required: true,
  },
  courseName: {
    type: String,
    required: true,
  },
  lecturerID: {
    type: String,
    required: true,
  },
  lecturerName: {
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
      "SCIENCE",
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
  creditPoints: {
    type: String,
    required: true,
  },
  timeCommitment: {
    type: String,
    required: true,
  },
  lecture: {
    type: String,
  },
  tutorial: {
    type: String,
  },
  practical: {
    type: String,
  },
  attendance: {
    type: String,
  },
  exercises: {
    type: String,
  },
  assignment: {
    type: String,
  },
  reports: {
    type: String,
  },
  midterm: {
    type: String,
  },
  final: {
    type: String,
  },
  wave: {
    type: String,
  },
  status: {
    type: String,
    enum: ["Waiting", "Teaching", "Finished"],
  }
});

module.exports = mongoose.model(`courses`, courseSchema);
