import axios from "axios";

const initState = {
  socialList: [],
  title: "Socail Applicatoin Demo",
};

// ACTION TYPES :: EMPLOYEE :: ENITY1
const SOCIAL_LIST_ACTION_TYPE = "SOCIAL_LIST_ACTION_TYPE";

// SOCIAL ACTIONS

// REDURE FOR STATE UPDTE
export function SocialReducer(state = initState, action) {
  switch (action.type) {
    case SOCIAL_LIST_ACTION_TYPE:
      return { ...state, socialList: action.payload };

    default:
      return state;
  }
}
