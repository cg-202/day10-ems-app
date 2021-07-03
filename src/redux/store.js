import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";

const initState = {
  employeeList: [],
};

function EmployeeReducer(state = initState, action) {
  return state;
}

// MIDDLEWARE FOR THE ASYNC OPOERATION
const store = createStore(EmployeeReducer, applyMiddleware(thunk));
export { store };
