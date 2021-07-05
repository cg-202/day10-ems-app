import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import axios from "axios";

const initState = {
  employeeList: [],
  progress: false,
};

// ACTION TYPES
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const EMPLOYEE_GET_ALL_ACTION_TYPE = "EMPLOYEE_GET_ALL_ACTION_TYPE";
const EMPLOYEE_GET_BY_ID_ACTION_TYPE = "EMPLOYEE_GET_BY_ID_ACTION_TYPE";
const EMPLOYEE_CREATE_ACTION_TYPE = "EMPLOYEE_CREATE_ACTION_TYPE";
const EMPLOYEE_UPDATE_ACTION_TYPE = "EMPLOYEE_UPDATE_ACTION_TYPE";
const EMPLOYEE_DELETE_ACTION_TYPE = "EMPLOYEE_DELETE_ACTION_TYPE";

// ACTIONS
export const getAllEmployeeAction = () => {
  return async (dispatch) => {
    // API CALL
    const url = `http://localhost:8080/api/employee/`;
    const response = await axios.get(url);

    console.log(response);

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
  };
};

// REDURE FOR STATE UPDTE
function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ALL_ACTION_TYPE:
      return { ...state, employeeList: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };
    default:
      return state;
  }
}

// MIDDLEWARE FOR THE ASYNC OPOERATION
const store = createStore(EmployeeReducer, applyMiddleware(thunk));
export { store };
