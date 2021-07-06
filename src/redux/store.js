import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  employeeList: [],
  progress: false,

  // AUTH FAILS => TRUE
  authFailure: false,
  authSuccess: false, // store this informatino in session/localstorage
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const AUTH_FAILURE_ACTION_TYPE = "AUTH_FAILURE_ACTION_TYPE";
const AUTH_SUCCESS_ACTION_TYPE = "AUTH_SUCCESS_ACTION_TYPE";

const EMPLOYEE_GET_ALL_ACTION_TYPE = "EMPLOYEE_GET_ALL_ACTION_TYPE";
const EMPLOYEE_GET_BY_ID_ACTION_TYPE = "EMPLOYEE_GET_BY_ID_ACTION_TYPE";
const EMPLOYEE_CREATE_ACTION_TYPE = "EMPLOYEE_CREATE_ACTION_TYPE";
const EMPLOYEE_UPDATE_ACTION_TYPE = "EMPLOYEE_UPDATE_ACTION_TYPE";
const EMPLOYEE_DELETE_ACTION_TYPE = "EMPLOYEE_DELETE_ACTION_TYPE";

// ACTIONS
export const getAllEmployeeAction = () => {
  return async (dispatch) => {
    // API CALL :: FETCH RECORDS
    const url = `http://localhost:8080/api/employee/`;
    const response = await axios.get(url);

    // console.log(response);

    // UI UPDATE
    dispatch({ type: "EMPLOYEE_GET_ALL_ACTION_TYPE", payload: response.data });
  };
};

export const cretaeEmployeeAction = (payload) => {
  return async (dispatch) => {
    // making the server call.
    const url = `http://localhost:8080/api/employee/`;
    await axios.post(url, payload);

    // update the ui. TODO
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const deleteEmployeeAction = (payload) => {
  return async (dispatch) => {
    // MAKE AN API/SERVER CALL
    const url = `http://localhost:8080/api/employee/${payload.id}`;
    await axios.delete(url);

    // Upate the UI TODO :: Fetch The Updated List
    dispatch(getAllEmployeeAction());
  };
};

// ACTION TYPE FOR USER :: ENTITY2
const USER_CREATE_ACTION_TYPE = "USER_CREATE_ACTION_TYPE";

export const userCreateAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: SERVER CALL
    const url = `http://localhost:8080/api/employee/`;
    await axios.post(url, payload);

    // TODO for UI
    dispatch({ type: PROGRESS_ACTION_TYPE, payload: true });

    // after 5 second PROGRESS :: FALSE AGAIN
    setTimeout(() => {
      dispatch({ type: PROGRESS_ACTION_TYPE, payload: false });
    }, 5000);
  };
};

export const authenticateUserAction = (payload) => {
  return async (dispatch) => {
    // API CALL :: VERIFICATION
    const url = `http://localhost:8080/api/employee/login`;
    const response = await axios.post(url, payload);

    if (response.data !== "") {
      // VALID USER
      // updat the UI:: THIS IS TRICKY
      dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: true });

      // Will store the success information in storage.
      // TODO will save into the storage
      localStorage.setItem("authSuccess", "1");

      // NOT DOING THE ACTIVITY OF 5 SECONDS :: page will be redirected to anohter page.
    } else {
      // INVALID USER :: AUTH FAILS
      // updat the UI:: THIS IS TRICKY
      dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: true });

      setTimeout(() => {
        dispatch({ type: AUTH_FAILURE_ACTION_TYPE, payload: false });
      }, 5000);
    }
  };
};

export const signOutAction = () => {
  return async (dispatch) => {
    console.log("signout");

    // remove the storage/cookies
    localStorage.removeItem("authSuccess");

    dispatch({ type: AUTH_SUCCESS_ACTION_TYPE, payload: false });
  };
};

// REDURE FOR STATE UPDTE
function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ALL_ACTION_TYPE:
      return { ...state, employeeList: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    case AUTH_FAILURE_ACTION_TYPE:
      return { ...state, authFailure: action.payload };
    case AUTH_SUCCESS_ACTION_TYPE:
      return { ...state, authSuccess: action.payload };
    default:
      return state;
  }
}

// MIDDLEWARE FOR THE ASYNC OPOERATION
const store = createStore(EmployeeReducer, applyMiddleware(thunk));
export { store };
