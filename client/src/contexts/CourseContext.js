import { createContext, useReducer, useState } from "react";
import { courseReducer } from "../reducers/courseReducer";
import {
  apiUrl,
  COURSES_LOADED_SUCCESS,
  COURSES_LOADED_FAILED,
  ADD_COURSE,
  DELETE_COURSE,
  FIND_COURSE,
  UPDATE_COURSE,
} from "./constant";
import axios from "axios";

export const CourseContext = createContext();

const CourseContextProvider = ({ children }) => {
  // State
  const [courseState, dispatch] = useReducer(courseReducer, {
    course: null,
    courses: [],
    coursesLoading: true,
  });

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const [showUpdateCourseModal, setShowUpdateCourseModal] = useState(false);

  const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);

  const [courseShowToast, setCourseShowToast] = useState({
    show: false,
    message: "",
    type: "null",
  });

  // Get All Courses
  const getCourses = async () => {
    try {
      const response = await axios.get(`${apiUrl}/course`);
      if (response.data.success) {
        dispatch({
          type: COURSES_LOADED_SUCCESS,
          payload: response.data.courses,
        });
      }
    } catch (error) {
      dispatch({ type: COURSES_LOADED_FAILED });
    }
  };

  // Add Course
  const addCourse = async newCourse => {
    try {
      const response = await axios.post(`${apiUrl}/course`, newCourse);
      if (response.data.success) {
        dispatch({ type: ADD_COURSE, payload: response.data.course });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Delete Course
  const deleteCourse = async deletedCourse => {
    try {
      const response = await axios.delete(
        `${apiUrl}/course/${deletedCourse._id}`,
        deletedCourse
      );
      if (response.data.success) {
        dispatch({ type: DELETE_COURSE, payload: response.data.course });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find course when user is updating course
  const findCourse = courseId => {
    const course = courseState.courses.find(
      (course) => course._id === courseId
    );
    dispatch({ type: FIND_COURSE, payload: course });
  };

  // Update post
  const updateCourse = async updatedCourse => {
    try {
      const response = await axios.put(
        `${apiUrl}/course/${updatedCourse._id}`,
        updatedCourse
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_COURSE, payload: response.data.course });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // CourseContextData
  const courseContextData = {
    courseState,
    getCourses,
    showAddCourseModal,
    setShowAddCourseModal,
    addCourse,
    courseShowToast,
    setCourseShowToast,
    deleteCourse,
    findCourse,
    updateCourse,
    showUpdateCourseModal,
    setShowUpdateCourseModal,
    showDeleteCourseModal,
    setShowDeleteCourseModal,
  };

  return (
    <CourseContext.Provider value={courseContextData}>
      {children}
    </CourseContext.Provider>
  );
};

export default CourseContextProvider;
