import { createContext, useReducer, useState } from "react";
import { courseReducer } from "../reducers/courseReducer";
import {
  apiUrl,
  COURSES_LOADED_SUCCESS,
  COURSES_LOADED_FAILED,
  COURSES_LECTURER_LOADED_SUCCESS,
  COURSES_LECTURER_LOADED_FAILED,
  COURSE_ID_LOADED_SUCCESS,
  COURSE_ID_LOADED_FAILED,
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
    courseLec: null,
    courseById: null,
    course: null,
    courses: [],
    studentCourse: null,
    coursesLoading: true,
    courseLoading: true,
  });

  const [showAddCourseModal, setShowAddCourseModal] = useState(false);

  const [showUpdateCourseModal, setShowUpdateCourseModal] = useState(false);

  const [showUpdateStudentListModal, setShowUpdateStudentListModal] =
    useState(false);

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

  // Get Courses by LecturerID
  const getCourseByLecturer = async () => {
    try {
      const response = await axios.get(`${apiUrl}/course/getCourse`);
      if (response.data.success) {
        dispatch({
          type: COURSES_LECTURER_LOADED_SUCCESS,
          payload: response.data.courses,
        });
      }
    } catch (error) {
      dispatch({ type: COURSES_LECTURER_LOADED_FAILED });
    }
  };

  // Get Courses by StudentID
  const getCourseByStudent = async () => {
    try {
      const response = await axios.get(`${apiUrl}/course/getStudentCourse`);
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

  // Get Courses by StudentID
  const getCourseToExport = async (wave, courseCode) => {
    try {
      const response = await axios.get(`${apiUrl}/course/export/${wave}/${courseCode}`);
      if (response.data.success) {
        dispatch({
          type: COURSE_ID_LOADED_SUCCESS,
          payload: response.data.course,
        });
      }
    } catch (error) {
      dispatch({ type: COURSE_ID_LOADED_FAILED });
    }
  };

  // Get Courses by Name
  const getCourseByName = async (
    year,
    program,
    wave,
    department,
    courseName
  ) => {
    try {
      const response = await axios.get(
        `${apiUrl}/course/${year}/${program}/${department}/${wave}/${courseName}`
      );
      if (response.data.success) {
        dispatch({
          type: COURSE_ID_LOADED_SUCCESS,
          payload: response.data.course,
        });
      }
    } catch (error) {
      dispatch({ type: COURSE_ID_LOADED_FAILED });
    }
  };

  // Get Courses by Id
  const getCourseByYear = async (year, program) => {
    try {
      const response = await axios.get(`${apiUrl}/course/${year}/${program}`);
      if (response.data.success) {
        dispatch({
          type: COURSES_LOADED_SUCCESS,
          payload: response.data.courses,
        });
      }
    } catch (error) {
      dispatch({ type: COURSES_LOADED_SUCCESS });
    }
  };

  // Get Courses by Wave
  const getCourseByYearWave = async (year, program, wave) => {
    try {
      const response = await axios.get(
        `${apiUrl}/course/${year}/${program}/${wave}`
      );
      if (response.data.success) {
        dispatch({
          type: COURSES_LOADED_SUCCESS,
          payload: response.data.courses,
        });
      }
    } catch (error) {
      dispatch({ type: COURSES_LOADED_SUCCESS });
    }
  };

  // Get Courses by Department
  const getCourseByYearDepartment = async (year, program, wave, department) => {
    try {
      const response = await axios.get(
        `${apiUrl}/course/${year}/${program}/${wave}/${department}`
      );
      if (response.data.success) {
        dispatch({
          type: COURSES_LOADED_SUCCESS,
          payload: response.data.courses,
        });
      }
    } catch (error) {
      dispatch({ type: COURSES_LOADED_SUCCESS });
    }
  };

  // Get Courses by Id
  const getCourseById = async (id) => {
    try {
      const response = await axios.get(`${apiUrl}/course/${id}`);
      if (response.data.success) {
        dispatch({
          type: COURSE_ID_LOADED_SUCCESS,
          payload: response.data.course,
        });
      }
    } catch (error) {
      dispatch({ type: COURSE_ID_LOADED_FAILED });
    }
  };

  // Add Course
  const addCourse = async (newCourse) => {
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
  const deleteCourse = async (deletedCourse) => {
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
  const findCourse = (courseId) => {
    const course = courseState.courses.find(
      (course) => course._id === courseId
    );
    dispatch({ type: FIND_COURSE, payload: course });
  };

  // Update Course
  const updateCourse = async (updatedCourse) => {
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
    getCourseById,
    getCourseByLecturer,
    getCourseByStudent,
    getCourseByName,
    getCourseByYear,
    getCourseByYearWave,
    getCourseByYearDepartment,
    getCourseToExport,
    showAddCourseModal,
    setShowAddCourseModal,
    showUpdateStudentListModal,
    setShowUpdateStudentListModal,
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
