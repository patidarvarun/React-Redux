import { combineReducers } from "redux";
import { productReducer } from "./productReducer";
import { userReducer } from "./userReducers";

const rootReducer = combineReducers({
  allProducts: productReducer,
  allUsers: userReducer,
});

export default rootReducer;
