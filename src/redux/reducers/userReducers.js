import { ActionType } from "../constant_type";

const initialState = {
  users: [],
};
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.GET_USERS:
      return { ...state, users: payload };
    default:
      return state;
  }
};
