import { combineReducers } from "redux";
import { constructorReducer } from "./constructor";
import { ingredientsReducer } from "./ingredients";
import { ingredientDetailsModalReducer } from "./ingredient-detail-modal";

export default combineReducers({
    burgerConstructor: constructorReducer,
    ingredients: ingredientsReducer,
    ingredientsDetailModal: ingredientDetailsModalReducer,
  });