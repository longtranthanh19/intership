import { createContext, useReducer, useState } from "react";
import { userReducer } from "../reducers/userReducer";
import {
  apiUrl,
  USERS_LOADED_SUCCESS,
  USERS_LOADED_FAILED,
  USER_LOADED_SUCCESS,
  USER_LOADED_FAILED,
  ADD_USER,
  DELETE_USER,
  UPDATE_USER,
  FIND_USER,
} from "./constant";
import axios from "axios";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  // State
  const [userState, dispatch] = useReducer(userReducer, {
    user: null,
    users: [],
    usersLoading: true,
    userLoading: true,
  });

  const [showAddUserModal, setShowAddUserModal] = useState(false);

  const [showUpdateUserModal, setShowUpdateUserModal] = useState(false);

  const [showDeleteUserModal, setShowDeleteUserModal] = useState(false);

  const [userShowToast, setUserShowToast] = useState({
    show: false,
    message: "",
    type: "null",
  });

  // Get All Users
  const getUsers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/user`);
      if (response.data.success) {
        dispatch({ type: USERS_LOADED_SUCCESS, payload: response.data.users });
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAILED });
    }
  };

  // Get Users by role
  const getUsersRole = async (role) => {
    try {
      const response = await axios.get(`${apiUrl}/user/${role}`);
      if (response.data.success) {
        dispatch({ type: USERS_LOADED_SUCCESS, payload: response.data.users });
      }
    } catch (error) {
      dispatch({ type: USERS_LOADED_FAILED });
    }
  };

  // Add User
  const addUser = async (newUser) => {
    try {
      const response = await axios.post(`${apiUrl}/user/register`, newUser);
      if (response.data.success) {
        dispatch({ type: ADD_USER, payload: response.data.user });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Delete User
  const deleteUser = async (deletedUser) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/user/${deletedUser._id}`,
        deletedUser
      );
      if (response.data.success) {
        dispatch({ type: DELETE_USER, payload: response.data.user });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // Find User when user is updating User
  const findUser = (userId) => {
    const user = userState.users.find((user) => user._id === userId);
    dispatch({ type: FIND_USER, payload: user });
  };

  // Update User
  const updateUser = async (updatedUser) => {
    try {
      const response = await axios.put(
        `${apiUrl}/user/${updatedUser._id}`,
        updatedUser
      );
      if (response.data.success) {
        dispatch({ type: UPDATE_USER, payload: response.data.user });
        return response.data;
      }
    } catch (error) {
      return error.response.data
        ? error.response.data
        : { success: false, message: "Server error" };
    }
  };

  // UserContextData
  const userContextData = {
    userState,
    getUsers,
    getUsersRole,
    showAddUserModal,
    setShowAddUserModal,
    addUser,
    userShowToast,
    setUserShowToast,
    deleteUser,
    updateUser,
    findUser,
    showUpdateUserModal,
    setShowUpdateUserModal,
    showDeleteUserModal,
    setShowDeleteUserModal,
  };

  return (
    <UserContext.Provider value={userContextData}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
