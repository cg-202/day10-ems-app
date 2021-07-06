import {
  applyMiddleware,
  combineReducers,
  createStore,
} from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { EmployeeReducer } from "./EmployeeReducer";
import { SocialReducer } from "./SocialReducer";
import { UserReducer } from "./UserReducer";

const rootReducer = combineReducers({
  employee: EmployeeReducer,
  user: UserReducer,
  social: SocialReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));
export { store };

// HOW TO ACCESS THE STORE IN COMPOENNT
// state.employeeList :: when there was only one reducer.
// state.authSuccess :: when there was only one reducer.
// state.employee.employeeList
// state.user.authSuccess
