import {
  LECTURERS_LOADED_SUCCESS,
  LECTURERS_LOADED_FAILED,
  ADD_LECTURER,
  DELETE_LECTURER,
  FIND_LECTURER,
  UPDATE_LECTURER,
} from "../contexts/constant";

export const lecturerReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case LECTURERS_LOADED_SUCCESS:
      return {
        ...state,
        lecturers: payload,
        lecturersLoading: false,
      };

    case LECTURERS_LOADED_FAILED:
      return {
        ...state,
        lecturers: payload,
        lecturersLoading: false,
      };

    case ADD_LECTURER:
      return {
        ...state,
        lecturers: { ...state.lecturers, payload },
      };

    case DELETE_LECTURER:
      return {
        ...state,
        lecturers: state.lecturers.filter(
          (lecturer) => lecturer._id !== payload
        ),
      };

    case FIND_LECTURER:
      return { ...state, lecturer: payload };

    case UPDATE_LECTURER:
      const newLecturers = state.lecturers.map((lecturer) =>
        lecturer._id === payload._id ? payload : lecturer
      );

      return {
        ...state,
        lecturers: newLecturers,
      };
    default:
      return state;
  }
};
