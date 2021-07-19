const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resultSchema = new Schema({
  studentID: {
    type: String,
    required: true,
  },
  studentName: {
    type: String,
    required: true,
  },
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
  levelOfTraining: {
    type: String,
    required: true,
    enum: ["Bachelor 4 Year", "Bachelor", "Master", "PhD"],
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
  attendance: {
    type: String,
    required: true,
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
    required: true,
  },
  final: {
    type: String,
    required: true,
  },
  total: {
    type: String,
    required: true,
  },
  ectsGrade: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pass", "Retake", "Redo"],
  },
  date: {
    type: String,
    required: true,
  },
  wave: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(`results`, resultSchema);
