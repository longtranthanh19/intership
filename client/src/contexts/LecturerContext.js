import { createContext, useReducer, useState } from "react";
import { lecturerReducer } from "../reducers/lecturerReducer";
import {
  apiUrl,
  LECTURERS_LOADED_SUCCESS,
  LECTURERS_LOADED_FAILED,
  ADD_LECTURER,
  DELETE_LECTURER,
  FIND_LECTURER,
  UPDATE_LECTURER,
} from "./constant";
import axios from "axios";

export const LecturerContext = createContext();

const LecturerContextProvider = ({ children }) => {
  // State
  const [lecturerState, dispatch] = useReducer(lecturerReducer, {
    lecturer: null,
    lecturers: [],
    lecturersLoading: true,
  });

  const [showAddLecturerModal, setShowAddLecturerModal] = useState(false);

  const [showUpdateLecturerModal, setShowUpdateLecturerModal] = useState(false);

  const [showDeleteLecturerModal, setShowDeleteLecturerModal] = useState(false);

  const [lecturerShowToast, setLecturerShowToast] = useState({
    show: false,
    message: "",
    type: "null",
  });

  // Get All Lecturer
  const getLecturers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/lecturer`);
      if (response.data.success) {
        dispatch({
          type: LECTURERS_LOADED_SUCCESS,
          payload: response.data.lecturers,
        });
      }
    } catch (error) {
      dispatch({ type: LECTURERS_LOADED_FAILED });
    }
  };

  // Add Lecturer
  const addLecturer = async (newLecturer) => {
    try {
      const response = await axios.post(`${apiUrl}/lecturer`, newLecturer);
      if (response.data.success) {
        dispatch({ type: ADD_LECTURER, payload: response.data.lecturer });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Delete Lecturer
  const deleteLecturer = async (deletedLecturer) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/lecturer/${deletedLecturer._id}`,
        deletedLecturer
      );
      if (response.data.success) {
        dispatch({ type: DELETE_LECTURER, payload: response.data.lecturer });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find post when user is updating post
  const findLecturer = (lecturerId) => {
    const lecturer = lecturerState.lecturers.find(
      (lecturer) => lecturer._id === lecturerId
    );
    dispatch({ type: FIND_LECTURER, payload: lecturer });
  };

  // Update post
  const updateLecturer = async (updatedLecturer) => {
    try {
      const response = await axios.put(
        `${apiUrl}/lecturer/${updatedLecturer._id}`,
        updatedLecturer
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_LECTURER, payload: response.data.lecturer });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // LecturerContextData
  const lecturerContextData = {
    lecturerState,
    getLecturers,
    showAddLecturerModal,
    setShowAddLecturerModal,
    addLecturer,
    lecturerShowToast,
    setLecturerShowToast,
    deleteLecturer,
    findLecturer,
    updateLecturer,
    showUpdateLecturerModal,
    setShowUpdateLecturerModal,
    showDeleteLecturerModal,
    setShowDeleteLecturerModal,
  };

  return (
    <LecturerContext.Provider value={lecturerContextData}>
      {children}
    </LecturerContext.Provider>
  );
};

export default LecturerContextProvider;
