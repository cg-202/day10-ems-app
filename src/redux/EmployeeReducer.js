import axios from "axios";

const initState = {
  employeeList: [],
  progress: false,
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const PROGRESS_ACTION_TYPE = "PROGRESS_ACTION_TYPE";
const EMPLOYEE_GET_ALL_ACTION_TYPE = "EMPLOYEE_GET_ALL_ACTION_TYPE";

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

// REDURE FOR STATE UPDTE
export function EmployeeReducer(state = initState, action) {
  switch (action.type) {
    case EMPLOYEE_GET_ALL_ACTION_TYPE:
      return { ...state, employeeList: action.payload };
    case PROGRESS_ACTION_TYPE:
      return { ...state, progress: action.payload };

    default:
      return state;
  }
}
