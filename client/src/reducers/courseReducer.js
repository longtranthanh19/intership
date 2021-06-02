import {
    COURSES_LOADED_SUCCESS,
    COURSES_LOADED_FAILED,
    ADD_COURSE,
    DELETE_COURSE,
    FIND_COURSE,
    UPDATE_COURSE,
  } from "../contexts/constant";
  
  export const courseReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
      case COURSES_LOADED_SUCCESS:
        return {
          ...state,
          courses: payload,
          coursesLoading: false,
        };
  
      case COURSES_LOADED_FAILED:
        return {
          ...state,
          courses: payload,
          coursesLoading: false,
        };
  
      case ADD_COURSE:
        return {
          ...state,
          courses: { ...state.courses, payload },
        };
  
      case DELETE_COURSE:
        return {
          ...state,
          courses: state.courses.filter((course) => course._id !== payload),
        };
  
      case FIND_COURSE:
        return { ...state, course: payload };
  
      case UPDATE_COURSE:
        const newCourses = state.courses.map((course) =>
          course._id === payload._id ? payload : course
        );
  
        return {
          ...state,
          courses: newCourses,
        };
      default:
        return state;
    }
  };
  