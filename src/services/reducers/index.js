import { combineReducers } from "redux";
import { constructorReducer } from "./constructor";
import { ingredientsReducer } from "./ingredients";

export default combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
  });