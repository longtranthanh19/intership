export const apiUrl =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:5000/api"
    : "somedeployURL";

export const LOCAL_STORAGE_TOKEN_NAME = "usth-management";

// POSTS

export const POSTS_LOADED_SUCCESS = "POSTS_LOADED_SUCCESS";
export const POSTS_LOADED_FAILED = "POSTS_LOADED_FAILED";
export const ADD_POST = "ADD_POST";
export const DELETE_POST = "DELETE_POST";
export const UPDATE_POST = "UPDATE_POST";
export const FIND_POST = "FIND_POST";

// STUDENTS

export const STUDENTS_LOADED_SUCCESS = "STUDENTS_LOADED_SUCCESS";
export const STUDENTS_LOADED_FAILED = "STUDENTS_LOADED_FAILED";
export const ADD_STUDENT = "ADD_STUDENT";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const FIND_STUDENT = "FIND_STUDENT";

// LECTURER

export const LECTURERS_LOADED_SUCCESS = "LECTURERS_LOADED_SUCCESS";
export const LECTURERS_LOADED_FAILED = "LECTURERS_LOADED_FAILED";
export const ADD_LECTURER = "ADD_LECTURER";
export const DELETE_LECTURER = "DELETE_LECTURER";
export const FIND_LECTURER = "FIND_LECTURER";
export const UPDATE_LECTURER = "UPDATE_LECTURER";

// COURSE

export const COURSES_LOADED_SUCCESS = "COURSES_LOADED_SUCCESS";
export const COURSES_LOADED_FAILED = "COURSES_LOADED_FAILED";
export const ADD_COURSE = "ADD_COURSE";
export const DELETE_COURSE = "DELETE_COURSE";
export const FIND_COURSE = "FIND_COURSE";
export const UPDATE_COURSE = "UPDATE_COURSE";

// RESULT 

export const RESULTS_LOADED_SUCCESS = "RESULTS_LOADED_SUCCESS";
export const RESULTS_LOADED_FAILED = "RESULTS_LOADED_FAILED";
export const ADD_RESULT = "ADD_RESULT";
export const DELETE_RESULT = "DELETE_RESULT";
export const FIND_RESULT = "FIND_RESULT";
export const UPDATE_RESULT = "UPDATE_RESULT";