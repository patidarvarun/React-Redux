import { ActionType } from "../constant_type";

export const setProducts = (products) => {
  return {
    type: ActionType.SET_PRODUCTS,
    payload: products,
  };
};
export const getAllUsers = (users) => {
  return {
    type: ActionType.GET_USERS,
    payload: users,
  };
};
