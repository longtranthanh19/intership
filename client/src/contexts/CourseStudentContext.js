import { createContext, useReducer, useState } from "react";
import { studentCourseReducer } from "../reducers/studentCourseReducer";
import {
  apiUrl,
  STUDENTS_LOADED_SUCCESS,
  STUDENTS_LOADED_FAILED,
  STUDENT_LOADED_SUCCESS,
  STUDENT_LOADED_FAILED,
  ADD_STUDENT,
  DELETE_STUDENT,
  FIND_STUDENT,
  UPDATE_STUDENT,
} from "./constant";
import axios from "axios";

export const CourseStudentContext = createContext();

const CourseStudentContextProvider = ({ children }) => {
  // State
  const [studentCourseState, dispatch] = useReducer(studentCourseReducer, {
    student: null,
    students: [],
    studentsLoading: true,
    studentLoading: true,
  });

  const [showAddCourseStudentModal, setShowAddCourseStudentModal] =
    useState(false);

  const [showUpdateCourseStudentModal, setShowUpdateCourseStudentModal] =
    useState(false);

  const [showDeleteCourseStudentModal, setShowDeleteCourseStudentModal] =
    useState(false);

  const [courseStudentShowToast, setCourseStudentShowToast] = useState({
    showToast: false,
    messageToast: "",
    typeToast: "null",
  });

  // Get Student Department
  const getCourseStudents = async (year, program, wave, courseName) => {
    try {
      const response = await axios.get(
        `${apiUrl}/courseStudent/${year}/${program}/${wave}/${courseName}`
      );
      if (response.data.success) {
        console.log(response);
        dispatch({
          type: STUDENTS_LOADED_SUCCESS,
          payload: response.data.students,
        });
      }
    } catch (error) {
      dispatch({ type: STUDENTS_LOADED_FAILED });
    }
  };

  // Get Student Department
  const getExportCourseStudents = async (wave, courseName) => {
    try {
      const response = await axios.get(
        `${apiUrl}/courseStudent/${wave}/${courseName}`
      );
      if (response.data.success) {
        dispatch({
          type: STUDENTS_LOADED_SUCCESS,
          payload: response.data.students,
        });
      }
    } catch (error) {
      dispatch({ type: STUDENTS_LOADED_FAILED });
    }
  };

  // Add Student
  const addCourseStudent = async (newStudentCourse) => {
    try {
      const response = await axios.post(
        `${apiUrl}/courseStudent`,
        newStudentCourse
      );
      if (response.data.success) {
        dispatch({ type: ADD_STUDENT, payload: response.data.student });
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find student when user is updating student
  const findCourseStudent = (studentId) => {
    const student = studentCourseState.students.find(
      (student) => student._id === studentId
    );
    dispatch({ type: FIND_STUDENT, payload: student });
  };

  // Delete Student
  const deleteCourseStudent = async (deletedStudent) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/courseStudent/${deletedStudent._id}`,
        deletedStudent
      );
      if (response.data.success) {
        dispatch({ type: DELETE_STUDENT, payload: response.data.student });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Update Student
  const updateCourseStudent = async (updatedCourseStudent) => {
    try {
      const response = await axios.put(
        `${apiUrl}/courseStudent/${updatedCourseStudent._id}`,
        updatedCourseStudent
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_STUDENT, payload: response.data.student });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // StudentContextData
  const courseStudentContextData = {
    studentCourseState,
    getCourseStudents,
    getExportCourseStudents,
    addCourseStudent,
    showAddCourseStudentModal,
    setShowAddCourseStudentModal,
    courseStudentShowToast,
    setCourseStudentShowToast,
    deleteCourseStudent,
    findCourseStudent,
    updateCourseStudent,
    showUpdateCourseStudentModal,
    setShowUpdateCourseStudentModal,
    showDeleteCourseStudentModal,
    setShowDeleteCourseStudentModal,
  };

  return (
    <CourseStudentContext.Provider value={courseStudentContextData}>
      {children}
    </CourseStudentContext.Provider>
  );
};

export default CourseStudentContextProvider;
