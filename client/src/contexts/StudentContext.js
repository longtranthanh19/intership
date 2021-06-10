import { createContext, useReducer, useState, useContext } from "react";
import { studentReducer } from "../reducers/studentReducer";
import { AuthContext } from "../contexts/AuthContext";
import {
  apiUrl,
  STUDENTS_LOADED_SUCCESS,
  STUDENTS_LOADED_FAILED,
  STUDENT_PROFILE_LOADED_SUCCESS,
  STUDENT_PROFILE_LOADED_FAILED,
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
    studentProfile: null,
    student: null,
    students: [],
    studentsLoading: true,
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
          type: STUDENT_PROFILE_LOADED_SUCCESS,
          payload: response.data.studentProfile,
        });
      }
    } catch (error) {
      dispatch({ type: STUDENT_PROFILE_LOADED_FAILED });
    }
  };

  // Add Student
  const addStudent = async (newStudent) => {
    try {
      const response = await axios.post(`${apiUrl}/student`, newStudent);
      if (response.data.success) {
        // window.location.reload();
        console.log(response.data.success);
        dispatch({ type: ADD_STUDENT, payload: response.data.student });
        console.log(response.data);
        return response.data;
      }
    } catch (error) {
      console.log(error);
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
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

  // Find post when user is updating post
  const findStudent = (studentId) => {
    const student = studentState.students.find(
      (student) => student._id === studentId
    );
    dispatch({ type: FIND_STUDENT, payload: student });
  };

  // Update post
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
