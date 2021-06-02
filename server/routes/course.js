const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");

const Course = require("../models/Course");

// @route POST api/createCourse
// @desc Create Course
// @access Private

router.post("/", verifyToken, async (req, res) => {
  const {
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    timeCommitment,
    lecture,
    tutorial,
    practical,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    wave,
  } = req.body;

  //Simple Validation
  if (!courseCode)
    return res
      .status(400)
      .json({ success: false, message: "CourseCode is required" });

  try {
    const newCourse = new Course({
      courseCode,
      courseName,
      lecturerID,
      lecturerName,
      year: year,
      program: program,
      department: department,
      creditPoints,
      timeCommitment,
      lecture,
      tutorial,
      practical,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      wave,
    });

    await newCourse.save();

    res.status(500).json({
      success: true,
      message: "Add Course Successful!",
      course: newCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course List
// @access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const courses = await Course.find();
    res.json({ success: true, courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/course
// @desc Update Course Info
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  const {
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    program,
    department,
    creditPoints,
    timeCommitment,
    lecture,
    tutorial,
    practical,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
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
      lecturerID,
      lecturerName,
      year: year,
      program: program,
      department: department,
      creditPoints,
      timeCommitment,
      lecture,
      tutorial,
      practical,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      wave,
    };

    const postCourseCondition = { _id: req.params.id };

    updatedCourse = await Course.findOneAndUpdate(
      postCourseCondition,
      updatedCourse,
      { new: true }
    );

    // User not authorized to update post or post not found
    if (!updatedCourse)
      return res.status(401).json({
        success: false,
        message: "Course not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Update Successful!",
      course: updatedCourse,
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
    const postCourseCondition = { _id: req.params.id };
    const deletedCourse = await Course.findOneAndDelete(postCourseCondition);

    // User not authorized or post not found
    if (!deletedCourse)
      return res.status(401).json({
        success: false,
        message: "Course not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Delete Successful !!",
      course: deletedCourse,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
