import { Reducer } from "redux";
import { UserDetailsTypes } from "../type";

const initialState: any = {};

const sampleUserReducer: Reducer<any> = (state = initialState, action) => {
  switch (action.type) {
    case UserDetailsTypes.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload,
      };
    default:
      return state;
  }
};

export { sampleUserReducer };
