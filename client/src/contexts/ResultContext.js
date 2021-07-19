import { createContext, useReducer, useState } from "react";
import { resultReducer } from "../reducers/resultReducer";
import {
  apiUrl,
  RESULTS_LOADED_SUCCESS,
  RESULTS_LOADED_FAILED,
  ADD_RESULT,
  DELETE_RESULT,
  FIND_RESULT,
  UPDATE_RESULT,
} from "./constant";
import axios from "axios";

export const ResultContext = createContext();

const ResultContextProvider = ({ children }) => {
  // State
  const [resultState, dispatch] = useReducer(resultReducer, {
    studentResult: null,
    lecturerResults: null,
    result: null,
    results: [],
    resultsLoading: true,
    resultLoading: true,
  });

  const [showAddResultModal, setShowAddResultModal] = useState(false);

  const [showUpdateResultModal, setShowUpdateResultModal] = useState(false);

  const [showDeleteResultModal, setShowDeleteResultModal] = useState(false);

  const [resultShowToast, setResultShowToast] = useState({
    show: false,
    message: "",
    type: "null",
  });

  // Get All Result
  const getResults = async () => {
    try {
      const response = await axios.get(`${apiUrl}/result`);
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Student Result
  const getResultProfile = async () => {
    try {
      const response = await axios.get(`${apiUrl}/result/getResult`);
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Student Result
  const getResultStudent = async (studentID) => {
    try {
      const response = await axios.get(`${apiUrl}/result/${studentID}`);
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Lecturer Result
  const getResultLecturer = async () => {
    try {
      const response = await axios.get(`${apiUrl}/result/getResultByLecturer`);
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Result Wave
  const getResultsWave = async (year, levelOfTraining) => {
    try {
      const response = await axios.get(
        `${apiUrl}/result/${year}/${levelOfTraining}`
      );
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Result Wave
  const getResultsDepartment = async (year, levelOfTraining, wave) => {
    try {
      const response = await axios.get(
        `${apiUrl}/result/${year}/${levelOfTraining}/${wave}`
      );
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Result Wave
  const getResultsCourse = async (year, levelOfTraining, wave, major) => {
    try {
      const response = await axios.get(
        `${apiUrl}/result/${year}/${levelOfTraining}/${wave}/${major}`
      );
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Result Detail
  const getResultsDetail = async (
    year,
    levelOfTraining,
    wave,
    major,
    courseName
  ) => {
    try {
      const response = await axios.get(
        `${apiUrl}/result/${year}/${levelOfTraining}/${wave}/${major}/${courseName}`
      );
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Get Result Detail
  const getResultsExport = async (wave, courseCode) => {
    try {
      const response = await axios.get(
        `${apiUrl}/result/export/${wave}/${courseCode}`
      );
      if (response.data.success) {
        dispatch({
          type: RESULTS_LOADED_SUCCESS,
          payload: response.data.results,
        });
      }
    } catch (error) {
      dispatch({ type: RESULTS_LOADED_FAILED });
    }
  };

  // Add Result
  const addResult = async (newResult) => {
    try {
      const response = await axios.post(`${apiUrl}/result`, newResult);
      if (response.data.success) {
        dispatch({ type: ADD_RESULT, payload: response.data.result });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Delete Result
  const deleteResult = async (deletedResult) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/result/${deletedResult._id}`,
        deletedResult
      );
      if (response.data.success) {
        dispatch({ type: DELETE_RESULT, payload: response.data.result });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find Result when user is updating post
  const findResult = (resultId) => {
    const result = resultState.results.find(
      (result) => result._id === resultId
    );
    dispatch({ type: FIND_RESULT, payload: result });
  };

  // Update Result
  const updateResult = async (updatedResult) => {
    try {
      const response = await axios.put(
        `${apiUrl}/result/${updatedResult._id}`,
        updatedResult
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_RESULT, payload: response.data.result });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // ResultContextData
  const resultContextData = {
    resultState,
    getResults,
    getResultProfile,
    getResultLecturer,
    getResultsWave,
    getResultsDepartment,
    getResultsCourse,
    getResultsDetail,
    getResultStudent,
    getResultsExport,
    showAddResultModal,
    setShowAddResultModal,
    addResult,
    resultShowToast,
    setResultShowToast,
    deleteResult,
    findResult,
    updateResult,
    showUpdateResultModal,
    setShowUpdateResultModal,
    showDeleteResultModal,
    setShowDeleteResultModal,
  };

  return (
    <ResultContext.Provider value={resultContextData}>
      {children}
    </ResultContext.Provider>
  );
};

export default ResultContextProvider;
