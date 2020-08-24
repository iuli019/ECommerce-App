import { combineReducers } from "redux";
import productsReducer from "./products";
import usersReducer from "./users";

export default combineReducers({
  products: productsReducer,
  users: usersReducer,
});
