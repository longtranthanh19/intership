import {
    RESULTS_LOADED_SUCCESS,
    RESULTS_LOADED_FAILED,
    ADD_RESULT,
    DELETE_RESULT,
    FIND_RESULT,
    UPDATE_RESULT,
  } from "../contexts/constant";
  
  export const resultReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case RESULTS_LOADED_SUCCESS:
        return {
          ...state,
          results: payload,
          resultsLoading: false,
        };
  
      case RESULTS_LOADED_FAILED:
        return {
          ...state,
          results: payload,
          resultsLoading: false,
        };
  
      case ADD_RESULT:
        return {
          ...state,
          results: { ...state.results, payload },
        };
  
      case DELETE_RESULT:
        return {
          ...state,
          results: state.results.filter((result) => result._id !== payload),
        };
  
      case FIND_RESULT:
        return { ...state, result: payload }
  
      case UPDATE_RESULT:
        const newResults = state.results.map((result) =>
          result._id === payload._id ? payload : result
        );
  
        return {
          ...state,
          results: newResults,
        };
  
      default:
        return state;
    }
  };
  