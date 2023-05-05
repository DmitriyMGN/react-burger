import {
  SET_INGREDIENT_MODAL,
  RESET_INGREDIENT_MODAL,
} from "../actions/ingredient-detail-modal";

const initialState = {
  data: null
}

export const ingredientDetailsModalReducer = (state = initialState, action) => {
  switch (action.type){
    case SET_INGREDIENT_MODAL: {
      return {
        ...state,
        data: action.payload
      }
    }
    case RESET_INGREDIENT_MODAL: {
      return {
        data: initialState
      }
    }
    default: 
      return state
  }
}