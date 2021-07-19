import { createContext, useReducer, useState } from "react";
import { studentReducer } from "../reducers/studentReducer";
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

export const StudentContext = createContext();

const StudentContextProvider = ({ children }) => {
  // State
  const [studentState, dispatch] = useReducer(studentReducer, {
    studentDepartment: null,
    studentProfile: null,
    student: null,
    students: [],
    studentsLoading: true,
    studentLoading: true,
  });

  const [showAddStudentModal, setShowAddStudentModal] = useState(false);

  const [showUpdateStudentModal, setShowUpdateStudentModal] = useState(false);

  const [showDeleteStudentModal, setShowDeleteStudentModal] = useState(false);

  const [studentShowToast, setStudentShowToast] = useState({
    show: false,
    message: "",
    type: "null",
  });

  // Get All Posts
  const getStudents = async () => {
    try {
      const response = await axios.get(`${apiUrl}/student`);
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

  // Get Student Profile
  const getStudentProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}/student/getProfile`);
      if (response.data.success) {
        dispatch({
          type: STUDENT_LOADED_SUCCESS,
          payload: response.data.student,
        });
      }
    } catch (error) {
      dispatch({ type: STUDENT_LOADED_FAILED });
    }
  };

    // Get Student Profile
    const getStudentByID = async (studentID) => {
      try {
        const response = await axios.get(`${apiUrl}/student/${studentID}`);
        if (response.data.success) {
          dispatch({
            type: STUDENT_LOADED_SUCCESS,
            payload: response.data.student,
          });
        }
      } catch (error) {
        dispatch({ type: STUDENT_LOADED_FAILED });
      }
    };

  // Get Student Department
  const getStudentDetail = async (major, session) => {
    try {
      const response = await axios.get(`${apiUrl}/student/${major}/${session}`);
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
  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post(`${apiUrl}/student`, newStudent);
      if (response.data.success) {
        console.log(response.data.success);
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
  const findStudent = (studentId) => {
    const student = studentState.students.find(
      (student) => student._id === studentId
    );
    dispatch({ type: FIND_STUDENT, payload: student });
  };

  // Delete Student
  const deleteStudent = async (deletedStudent) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/student/${deletedStudent._id}`,
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
  const updateStudent = async (updatedStudent) => {
    try {
      const response = await axios.put(
        `${apiUrl}/student/${updatedStudent._id}`,
        updatedStudent
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
  const studentContextData = {
    studentState,
    getStudents,
    getStudentProfile,
    getStudentDetail,
    getStudentByID,
    showAddStudentModal,
    setShowAddStudentModal,
    addStudent,
    studentShowToast,
    setStudentShowToast,
    deleteStudent,
    findStudent,
    updateStudent,
    showUpdateStudentModal,
    setShowUpdateStudentModal,
    showDeleteStudentModal,
    setShowDeleteStudentModal,
  };

  return (
    <StudentContext.Provider value={studentContextData}>
      {children}
    </StudentContext.Provider>
  );
};

export default StudentContextProvider;
