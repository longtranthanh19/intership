const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const isStaff = require("../middleware/isStaff");
const User = require("../models/User");

// @route GET api/auth
// @desc Check if user is logged in
// @access Public

router.get("/", verifyToken, isStaff, async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route GET api/auth
// @desc Check if user is logged in
// @access Public

router.get("/:role", verifyToken, isStaff, async (req, res) => {
  const role = req.params.role;
  try {
    const users = await User.find({ role: role });
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/register
// @desc Register user
// @access Public

router.post("/register", verifyToken, isStaff, async (req, res) => {
  const { id, username, password, userName, role, department } = req.body;

  // Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  try {
    // Check for existing user
    const user = await User.findOne({ username });
    const userId = await User.findOne({ id });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });

    if (userId)
      return res
        .status(400)
        .json({ success: false, message: "UserID already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      id,
      username,
      password: hashedPassword,
      userName,
      role,
      department,
    });
    await newUser.save();

    // Return token
    const accessToken = jwt.sign(
      { userId: newUser._id },
      process.env.ACCESS_TOKEN_SECRET
    );

    res.json({
      success: true,
      message: "User created successfully",
      accessToken,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route PUT api/auth
// @desc Update User
// @access Private
router.put("/:id", verifyToken, async (req, res) => {
  const { id, username, userName, password, role, department } = req.body;

  // Simple validation
  if (!username)
    return res
      .status(400)
      .json({ success: false, message: "username is required" });

  try {
    const hashedPassword = await argon2.hash(password);
    let updatedUser = {
      id,
      username,
      password: hashedPassword,
      userName,
      role: role,
      department,
    };

    const postUserCondition = { _id: req.params.id };

    updatedUser = await User.findOneAndUpdate(postUserCondition, updatedUser, {
      new: true,
    });

    // User not authorized to update post or post not found
    if (!updatedUser)
      return res.status(401).json({
        success: false,
        message: "User not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Updated Successful",
      user: updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route DELETE api/auth
// @desc Delete User
// @access Private
router.delete("/:id", verifyToken, isStaff, async (req, res) => {
  try {
    const userDeleteCondition = { _id: req.params.id };
    const deletedUser = await User.findOneAndDelete(userDeleteCondition);

    // User not authorized or post not found
    if (!deletedUser)
      return res.status(401).json({
        success: false,
        message: "User not found or user not authorized",
      });

    res.json({
      success: true,
      message: "Delete Successful !",
      user: deletedUser,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

module.exports = router;
