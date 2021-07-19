const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isStaff = require("../middleware/isStaff");
const isBoth = require("../middleware/isBoth");
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
    status,
    studentList,
  } = req.body;

  //Simple Validation
  if (!courseCode)
    return res
      .status(400)
      .json({ success: false, message: "CourseCode is required" });

  try {
    const id = await Course.findOne({ courseCode });
    const name = await Course.findOne({ courseName });
    const courseWave = await Course.findOne({ wave });

    if (id && name && courseWave)
      return res
        .status(400)
        .json({ success: false, message: " Course already have in Database" });

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
      status,
      studentList,
    });

    await newCourse.save();

    res.status(500).json({
      success: true,
      message: `Add Course ${courseName} Successful!`,
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

// @route GET api/course
// @desc Get Course Profile By Lecturer
// @access Private

router.get("/getCourse", verifyToken, async (req, res) => {
  const lecturerID = req.id;
  try {
    const courseLec = await Course.find({ lecturerID: lecturerID });
    res.json({ success: true, courses: courseLec });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year
// @access Private

router.get("/export/:wave/:courseCode", verifyToken, async (req, res) => {
  const wave = req.params.wave;
  const courseCode = req.params.courseCode;
  try {
    const course = await Course.findOne({ wave: wave, courseCode: courseCode });
    res.json({ success: true, course });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year
// @access Private

router.get("/:year/:program", verifyToken, async (req, res) => {
  const year = req.params.year;
  const program = req.params.program;
  try {
    const courses = await Course.find({ year: year, program: program });
    res.json({ success: true, courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year, Department
// @access Private

router.get("/:year/:program/:wave", verifyToken, async (req, res) => {
  const year = req.params.year;
  const wave = req.params.wave;
  const program = req.params.program;
  try {
    const courses = await Course.find({
      year: year,
      program: program,
      wave: wave,
    });
    res.json({ success: true, courses });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By Year, Department, Wave
// @access Private

router.get(
  "/:year/:program/:wave/:department",
  verifyToken,
  async (req, res) => {
    const year = req.params.year;
    const program = req.params.program;
    const department = req.params.department;
    const wave = req.params.wave;
    try {
      const courses = await Course.find({
        year: year,
        program: program,
        wave: wave,
        department: department,
      });
      res.json({ success: true, courses });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// @route GET api/course
// @desc Get Course Profile By Year, Department, Wave
// @access Private

router.get(
  "/:year/:program/:wave/:department/:courseName",
  verifyToken,
  async (req, res) => {
    const year = req.params.year;
    const program = req.params.program;
    const department = req.params.department;
    const wave = req.params.wave;
    const courseName = req.params.courseName;
    try {
      const course = await Course.findOne({
        year: year,
        program: program,
        wave: wave,
        department: department,
        courseName: courseName,
      });
      res.json({ success: true, course });
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
    const courseById = await Course.findOne({ _id: id });
    res.json({ success: true, course: courseById });
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
    status,
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
      status,
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
router.delete("/:id", verifyToken, isBoth, async (req, res) => {
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
