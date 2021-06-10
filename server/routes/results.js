const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isLecturer = require("../middleware/isLecturer")

const Result = require("../models/Result");

// @route POST api/createResult
// @desc Create Result
// @access Private

router.post("/", verifyToken, async (req, res) => {
  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    status,
    date,
    wave,
  } = req.body;

  //Simple Validation
  if (!studentID)
    return res
      .status(400)
      .json({ success: false, message: "studentID is required" });

  try {
    const newResult = new Result({
      studentID,
      studentName,
      courseCode,
      courseName,
      lecturerName,
      year: year,
      program: program,
      department: department,
      creditPoints,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      total,
      status,
      date,
      wave,
    });

    await newResult.save();

    res
    .status(500)
    .json({
      success: true,
      message: "Add Result Successful!",
      result: newResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List
// @access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const results = await Result.find();
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List
// @access Private

router.get("/getResult", verifyToken, async (req, res) => {
  const studentID = req.id;
  try {
    const studentResult = await Result.find({ studentID: studentID });
    res.json({ success: true, studentResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/lecturer
// @desc Update Lecturer Info
// @access Private
router.put("/:id", verifyToken, isLecturer, async (req, res) => {
  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    status,
    date,
    wave,
  } = req.body;

  // Simple validation
  if (!studentID)
    return res
      .status(400)
      .json({ success: false, message: "studentID is required" });

  try {
    let updatedResult = {
      studentID,
      studentName,
      courseCode,
      courseName,
      lecturerName,
      year: year,
      program: program,
      department: department,
      creditPoints,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      total,
      status,
      date,
      wave,
    };

    const postResultCondition = { _id: req.params.id };

    updatedResult = await Result.findOneAndUpdate(
      postResultCondition,
      updatedResult,
      { new: true }
    );

    // User not authorized to update post or post not found
    if (!updatedResult)
      return res.status(401).json({
        success: false,
        message: "Result not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Update Successful!",
      result: updatedResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/posts
// @desc Delete post
// @access Private
router.delete("/:id", verifyToken, isLecturer, async (req, res) => {
  try {
    const ResultDeleteCondition = { _id: req.params.id };
    const deletedResult = await Result.findOneAndDelete(ResultDeleteCondition);

    // User not authorized or post not found
    if (!deletedResult)
      return res.status(401).json({
        success: false,
        message: "Result not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Delete Succesful !!",
      result: deletedResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
