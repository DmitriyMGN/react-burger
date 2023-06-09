  import {
  GET_INGREDIENTS_REQIEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILED,
  } from "../actions/ingredients";

  const initialState ={
  data: [],
  isLoading: false,
  error: null
  }

  export const ingredientsReducer = (state = initialState, action) => {
  switch(action.type){
      case GET_INGREDIENTS_REQIEST: {
          return {
              ...state,
              isLoading: true,
              error: null
          }
      }
      case GET_INGREDIENTS_SUCCESS: {
        return {
            ...state,
            data: action.payload,
            isLoading: false,
            error: null
        }
    }
    case GET_INGREDIENTS_FAILED: {
      return {
          ...state,
          isLoading: false,
          error: action.payload
      }
  }
      default: {
        return state
      }
  }
  }