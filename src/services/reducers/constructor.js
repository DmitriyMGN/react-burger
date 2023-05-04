import {
    CONSTRUCTOR_ADD,
    CONSTRUCTOR_DELETE,
    CONSTRUCTOR_REORDER,
    CONSTRUCTOR_RESET,
  } from "../actions/constructor";

const initialState = {
    bun: null,
    ingredients: []
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case CONSTRUCTOR_ADD: {
            if (action.payload.type === "bun") {
                return {
                    ...state,
                    ingredients: {...state.ingredients, bun: action.payload}
                }
            }
            return {
                ...state,
                ingredients: [...state.ingredients, action.payload]
            }
        }
        default: {
            return state;
        }
    }
}