require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRouter = require("./routes/auth");
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");
const studentRouter = require("./routes/student");
const lecturerRouter = require("./routes/lecturer");
const courseRouter = require("./routes/course");
const resultRouter = require("./routes/results");
const courseStudentRouter = require("./routes/courseStudent");

// Connect DB
const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@student-management.ofzlr.mongodb.net/Student-Management?retryWrites=true&w=majority`,
      {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      }
    );

    console.log("DB connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

connectDB();

// Router
const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);
app.use("/api/posts/", postRouter);
app.use("/api/student/", studentRouter);
app.use("/api/lecturer/", lecturerRouter);
app.use("/api/course/", courseRouter);
app.use("/api/result/", resultRouter);
app.use("/api/courseStudent/", courseStudentRouter);

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
