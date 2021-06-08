const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth");
const argon2 = require("argon2");
const jwt = require("jsonwebtoken");
const isBoth = require("../middleware/isBoth");
const isStaff = require("../middleware/isStaff");
const User = require("../models/User");
// @route GET api/auth
// @desc Check if user is logged in
// @access Public

router.get("/", verifyToken , async (req, res) => {
  try {
    const users = await User.find();
    res.json({ success: true, users });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// @route POST api/auth/register
// @desc Register user
// @access Public

router.post("/register", async (req, res) => {
  const { username, password, userName, role } = req.body;

  // Simple validation
  if (!username || !password)
    return res
      .status(400)
      .json({ success: false, message: "Missing username and/or password" });

  try {
    // Check for existing user
    const user = await User.findOne({ username });

    if (user)
      return res
        .status(400)
        .json({ success: false, message: "Username already taken" });

    // All good
    const hashedPassword = await argon2.hash(password);
    const newUser = new User({
      username,
      password: hashedPassword,
      userName,
      role,
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
  const { username, userName, password, role } = req.body;

  // Simple validation
  if (!username)
    return res
      .status(400)
      .json({ success: false, message: "username is required" });

  try {
    const user = await User.findOne({ username });
    const hashedPassword = await argon2.hash(password);
    let updatedUser = {
      username,
      password: hashedPassword,
      userName,
      role: role,
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
router.delete("/:id", verifyToken, async (req, res) => {
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
