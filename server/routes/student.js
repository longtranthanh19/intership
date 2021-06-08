const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isStaff = require("../middleware/isStaff");
const isBoth = require("../middleware/isBoth");
const isLecturer = require("../middleware/isLecturer");
const isStudent = require("../middleware/isStudent");

const Student = require("../models/Student");

// @route GET api/student
// @desc Get Student List
// @access Private

router.get("/", verifyToken, isBoth , async (req, res) => {
  try {
    const students = await Student.find();
    res.json({ success: true, students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/createStudent
// @desc Create Student
// @access Private

router.post("/", verifyToken, async (req, res) => {
  const {
    studentID,
    studentName,
    gender,
    dateOfBirth,
    dateOfAdmission,
    email,
    phoneNumber,
    address,
    department,
    session,
  } = req.body;

  //Simple Validation
  if (!studentID)
    return res
      .status(400)
      .json({ success: false, message: "StudentID is required" });

  try {
    const studentid = await Student.findOne({ studentID });
    if (studentid)
      return res
        .status(400)
        .json({ success: false, message: "StudentID Already Taken" });

    const newStudent = new Student({
      studentID,
      studentName,
      gender: gender,
      dateOfBirth,
      dateOfAdmission,
      email,
      phoneNumber,
      address,
      department: department,
      session,
    });

    await newStudent.save();

    res.status(500).json({
      success: true,
      message: "Add Student Successful !!",
      student: newStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/students
// @desc Update Student Info
// @access Private
router.put("/:id", verifyToken, isStaff, async (req, res) => {
  const {
    studentID,
    studentName,
    gender,
    dateOfBirth,
    dateOfAdmission,
    email,
    phoneNumber,
    address,
    department,
    session,
  } = req.body;

  // Simple validation
  if (!studentID)
    return res
      .status(400)
      .json({ success: false, message: "StudentID is required" });

  try {
    let updatedStudent = {
      studentID,
      studentName,
      gender: gender,
      dateOfBirth,
      dateOfAdmission,
      email,
      phoneNumber,
      address,
      department: department,
      session,
    };

    const postStudentCondition = { _id: req.params.id };

    updatedStudent = await Student.findOneAndUpdate(
      postStudentCondition,
      updatedStudent,
      { new: true }
    );

    // User not authorized to update post or post not found
    if (!updatedStudent)
      return res.status(401).json({
        success: false,
        message: "Student not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Update Successful!",
      student: updatedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/student
// @desc Delete Student
// @access Private
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const studentDeleteCondition = { _id: req.params.id };
    const deletedStudent = await Student.findOneAndDelete(
      studentDeleteCondition
    );

    // User not authorized or post not found
    if (!deletedStudent)
      return res.status(401).json({
        success: false,
        message: "Student not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Delete Successful!",
      student: deletedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
