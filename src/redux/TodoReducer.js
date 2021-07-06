import axios from "axios";

const initState = {
  todoList: [],
  title: "Todo Applicatoin Demo",
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const TODO_ACTION_TYPE = "TODO_ACTION_TYPE";

// TODO ACTIONS

// REDURE FOR STATE UPDTE
export function TodoReducer(state = initState, action) {
  switch (action.type) {
    case TODO_ACTION_TYPE:
      return { ...state, todoList: action.payload };

    default:
      return state;
  }
}
