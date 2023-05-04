import { combineReducers } from "redux";
import { constructorReducer } from "./constructor";

export default combineReducers({
    burgerConstructor: constructorReducer,
  });