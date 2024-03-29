const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const isStaff = require("../middleware/isStaff");

const Lecturer = require("../models/Lecturer");

// @route POST api/createStudent
// @desc Create Student
// @access Private

router.post("/", verifyToken, isStaff, async (req, res) => {
  const {
    lecturerID,
    lecturerName,
    gender,
    dateOfBirth,
    degree,
    email,
    phoneNumber,
    address,
    department,
  } = req.body;

  //Simple Validation
  if (!lecturerID)
    return res
      .status(400)
      .json({ success: false, message: "LecturerID is required" });

  try {
    const id = await Lecturer.findOne({ lecturerID });
    const lecturerEmail = await Lecturer.findOne({ email });

    if (id)
      return res
        .status(400)
        .json({ success: false, message: "Lecturer ID already taken" });

    if (lecturerEmail)
      return res
        .status(400)
        .json({ success: false, message: "Email already taken" });

    const newLecturer = new Lecturer({
      lecturerID,
      lecturerName,
      gender: gender,
      dateOfBirth,
      degree,
      email,
      phoneNumber,
      address,
      department: department,
    });

    await newLecturer.save();

    res.status(500).json({
      success: true,
      message: "Add Lecturer Successful !",
      lecturer: newLecturer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/lecturer
// @desc Get Lecturer List
// @access Private

router.get("/", verifyToken, async (req, res) => {
  try {
    const lecturers = await Lecturer.find();
    res.json({ success: true, lecturers });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/course
// @desc Get Course Profile By ID
// @access Private

router.get("/:department", verifyToken, async (req, res) => {
  const department = req.params.department;
  try {
    const lecturerByDepartment = await Lecturer.find({ department: department });
    res.json({ success: true, lecturers: lecturerByDepartment });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/lecturer
// @desc Update Lecturer Info
// @access Private
router.put("/:id", verifyToken, isStaff, async (req, res) => {
  const {
    lecturerID,
    lecturerName,
    gender,
    dateOfBirth,
    degree,
    email,
    phoneNumber,
    address,
    department,
  } = req.body;

  // Simple validation
  if (!lecturerID)
    return res
      .status(400)
      .json({ success: false, message: "LecturerID is required" });

  try {
    let updatedLecturer = {
      lecturerID,
      lecturerName,
      gender: gender,
      dateOfBirth,
      degree,
      email,
      phoneNumber,
      address,
      department: department,
    };

    const postLecturerCondition = { _id: req.params.id };

    updatedLecturer = await Lecturer.findOneAndUpdate(
      postLecturerCondition,
      updatedLecturer,
      { new: true }
    );

    // User not authorized to update post or post not found
    if (!updatedLecturer)
      return res.status(401).json({
        success: false,
        message: "Lecturer not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Update Successful!",
      lecturer: updatedLecturer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/lecturer
// @desc Delete Lecturer
// @access Private
router.delete("/:id", verifyToken, isStaff, async (req, res) => {
  try {
    const postDeleteCondition = { _id: req.params.id };
    const deletedLecturer = await Lecturer.findOneAndDelete(
      postDeleteCondition
    );

    // User not authorized or post not found
    if (!deletedLecturer)
      return res.status(401).json({
        success: false,
        message: "Lecturer not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Delete Successful!",
      lecturer: deletedLecturer,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
