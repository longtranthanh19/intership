import {
  STUDENTS_LOADED_SUCCESS,
  STUDENTS_LOADED_FAILED,
  STUDENT_LOADED_SUCCESS,
  STUDENT_LOADED_FAILED,
  ADD_STUDENT,
  DELETE_STUDENT,
  FIND_STUDENT,
  UPDATE_STUDENT,
} from "../contexts/constant";

export const studentReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case STUDENTS_LOADED_SUCCESS:
      return {
        ...state,
        students: payload,
        studentsLoading: false,
      };

    case STUDENTS_LOADED_FAILED:
      return {
        ...state,
        students: payload,
        studentsLoading: false,
      };

    case STUDENT_LOADED_SUCCESS:
      return {
        ...state,
        student: payload,
        studentLoading: false,
      };

    case STUDENT_LOADED_FAILED:
      return {
        ...state,
        student: payload,
        studentLoading: false,
      };

    case ADD_STUDENT:
      return {
        ...state,
        students: { ...state.students, payload },
      };

    case DELETE_STUDENT:
      return {
        ...state,
        students: state.students.filter((student) => student._id !== payload),
      };

    case FIND_STUDENT:
      return { ...state, student: payload };

    case UPDATE_STUDENT:
      const newStudents = state.students.map((student) =>
        student._id === payload._id ? payload : student
      );

      return {
        ...state,
        students: newStudents,
      };
    default:
      return state;
  }
};
