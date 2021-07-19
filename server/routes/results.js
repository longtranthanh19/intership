const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isStaff = require("../middleware/isStaff");
const isBoth = require("../middleware/isBoth");
const isLecturer = require("../middleware/isLecturer");

const Result = require("../models/Result");

// @route POST api/createResult
// @desc Create Result
// @access Private

router.post("/", verifyToken, isBoth, async (req, res) => {
  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    levelOfTraining,
    typeOfTraining,
    major,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    ectsGrade,
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
    const id = await Result.findOne({ studentID });
    const courseWave = await Result.findOne({ wave });
    const code = await Result.findOne({ courseCode });

    if (id && courseWave && code)
      return res
        .status(400)
        .json({ success: false, message: "Result already have in Database" });

    const newResult = new Result({
      studentID,
      studentName,
      courseCode,
      courseName,
      lecturerID,
      lecturerName,
      year: year,
      levelOfTraining: levelOfTraining,
      typeOfTraining: typeOfTraining,
      major: major,
      creditPoints,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      total,
      ectsGrade,
      status,
      date,
      wave,
    });

    await newResult.save();

    res.status(500).json({
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

router.get("/", verifyToken, isBoth, async (req, res) => {
  try {
    const results = await Result.find();
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Student )
// @access Private

router.get("/getResult", verifyToken, async (req, res) => {
  const studentID = req.id;
  try {
    const studentResult = await Result.find({ studentID: studentID });
    res.json({ success: true, results: studentResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Student )
// @access Private

router.get("/:studentID", verifyToken, async (req, res) => {
  const studentID = req.params.studentID;
  try {
    const studentResult = await Result.find({ studentID: studentID });
    res.json({ success: true, results: studentResult });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Student )
// @access Private

router.get("/export/:wave/:courseCode", verifyToken, async (req, res) => {
  const wave = req.params.wave;
  const courseCode = req.params.courseCode;
  try {
    const resultsExport = await Result.find({
      wave: wave,
      courseCode: courseCode,
    });
    res.json({ success: true, results: resultsExport });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get(
  "/getResultByLecturer",
  verifyToken,
  isLecturer,
  async (req, res) => {
    const lecturerID = req.id;
    try {
      const lecturerResults = await Result.find({ lecturerID: lecturerID });
      res.json({ success: true, results: lecturerResults });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get("/:year/:levelOfTraining", verifyToken, async (req, res) => {
  const year = req.params.year;
  const levelOfTraining = req.params.levelOfTraining;
  try {
    const results = await Result.find({
      year: year,
      levelOfTraining: levelOfTraining,
    });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get("/:year/:levelOfTraining/:wave", verifyToken, async (req, res) => {
  const year = req.params.year;
  const levelOfTraining = req.params.levelOfTraining;
  const wave = req.params.wave;
  try {
    const results = await Result.find({
      year: year,
      levelOfTraining: levelOfTraining,
      wave: wave,
    });
    res.json({ success: true, results });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get(
  "/:year/:levelOfTraining/:wave/:major",
  verifyToken,
  async (req, res) => {
    const year = req.params.year;
    const levelOfTraining = req.params.levelOfTraining;
    const wave = req.params.wave;
    const major = req.params.major;
    try {
      const results = await Result.find({
        year: year,
        levelOfTraining: levelOfTraining,
        wave: wave,
        major: major,
      });
      res.json({ success: true, results });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get(
  "/:year/:levelOfTraining/:wave/:major/:courseName",
  verifyToken,
  async (req, res) => {
    const year = req.params.year;
    const levelOfTraining = req.params.levelOfTraining;
    const wave = req.params.wave;
    const major = req.params.major;
    const courseName = req.params.courseName;

    try {
      const results = await Result.find({
        year: year,
        levelOfTraining: levelOfTraining,
        wave: wave,
        major: major,
        courseName: courseName,
      });
      res.json({ success: true, results });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error" });
    }
  }
);

// @route GET api/result
// @desc Get Result List ( Lecturer )
// @access Private

router.get("/:id", verifyToken, async (req, res) => {
  const id = req.params.id;

  try {
    const resultsDetail = await Result.find({ _id: id });
    res.json({ success: true, result: resultsDetail });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/lecturer
// @desc Update Lecturer Info
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  const {
    studentID,
    studentName,
    courseCode,
    courseName,
    lecturerID,
    lecturerName,
    year,
    levelOfTraining,
    typeOfTraining,
    major,
    creditPoints,
    attendance,
    exercises,
    assignment,
    reports,
    midterm,
    final,
    total,
    ectsGrade,
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
      lecturerID,
      lecturerName,
      year: year,
      levelOfTraining: levelOfTraining,
      typeOfTraining: typeOfTraining,
      major: major,
      creditPoints,
      attendance,
      exercises,
      assignment,
      reports,
      midterm,
      final,
      total,
      ectsGrade,
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
router.delete("/:id", verifyToken, isBoth, async (req, res) => {
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
      message: "Delete Successful !!",
      result: deletedResult,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
