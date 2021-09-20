const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isStaff = require("../middleware/isStaff");
const isBoth = require("../middleware/isBoth");
const CourseStudent = require("../models/CourseStudent");

// @route GET api/course
// @desc Get Course List
// @access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const students = await CourseStudent.find();
    res.json({ success: true, students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year, Department, Wave
// @access Private

router.get("/:wave/:courseCode", verifyToken, async (req, res) => {
  const wave = req.params.wave;
  const courseCode = req.params.courseCode;
  try {
    const students = await CourseStudent.find({
      wave: wave,
      courseCode: courseCode,
    });
    res.json({ success: true, students });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year, Department, Wave
// @access Private

router.get(
  "/:year/:program/:wave/:courseName",
  verifyToken,
  async (req, res) => {
    const year = req.params.year;
    const program = req.params.program;
    const wave = req.params.wave;
    const courseName = req.params.courseName;
    try {
      const students = await CourseStudent.find({
        year: year,
        program: program,
        wave: wave,
        courseName: courseName,
      });
      res.json({ success: true, students });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// @route GET api/course
// @desc Get Course Profile By ID
// @access Private

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;
  try {
    const studentById = await CourseStudent.findOne({ _id: id });
    res.json({ success: true, student: studentById });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/createCourse
// @desc Create Course
// @access Private

router.post("/", verifyToken, async (req, res) => {
  const {
    courseCode,
    courseName,
    studentID,
    studentName,
    year,
    program,
    department,
    wave,
  } = req.body;

  //Simple Validation
  if (!courseCode)
    return res
      .status(400)
      .json({ success: false, message: "CourseCode is required" });

  try {
    const newStudentCourse = new CourseStudent({
      courseCode,
      courseName,
      studentID,
      studentName,
      year: year,
      program: program,
      department: department,
      wave,
    });

    await newStudentCourse.save();

    res.status(500).json({
      success: true,
      message: `Add Student ${studentName} successful!`,
      student: newStudentCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/course
// @desc Update Course Info
// @access Private
router.put("/:id", verifyToken, isBoth, async (req, res) => {
  const {
    courseCode,
    courseName,
    studentID,
    studentName,
    year,
    program,
    department,
    wave,
  } = req.body;

  // Simple validation
  if (!courseCode)
    return res
      .status(400)
      .json({ success: false, message: "courseCode is required" });

  try {
    let updatedCourse = {
      courseCode,
      courseName,
      studentID,
      studentName,
      year: year,
      program: program,
      department: department,
      wave,
    };

    const courseStudentCondition = { _id: req.params.id };

    updatedCourse = await CourseStudent.findOneAndUpdate(
      courseStudentCondition,
      updatedCourse,
      { new: true }
    );

    // User not authorized to update post or post not found
    if (!updatedCourse)
      return res.status(401).json({
        success: false,
        message: "Student not found or user not authorized",
      });

    res.json({
      success: true,
      message: `Update student ${studentName} successful!`,
      student: updatedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/course
// @desc Delete course
// @access Private
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const courseStudentCondition = { _id: req.params.id };
    const deletedStudent = await CourseStudent.findOneAndDelete(
      courseStudentCondition
    );

    // User not authorized or post not found
    if (!deletedStudent)
      return res.status(401).json({
        success: false,
        message: "Student not found or user not authorized",
      });

    res.json({
      success: true,
      message: `Delete student successful !!`,
      student: deletedStudent,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
