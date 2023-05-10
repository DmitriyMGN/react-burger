import api from "../../utils/api";

export const GET_INGREDIENTS_REQIEST = "GET_INGREDIENTS_REQIEST";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";

export const getIngredients = () => (dispatch) => {
  dispatch({
    type: GET_INGREDIENTS_REQIEST
  })
  return api.getData()
  .then((ingredients) => {
    dispatch({
      type: GET_INGREDIENTS_SUCCESS,
      payload: ingredients.data
  })
  })
  .catch((err) => {
    dispatch({
      type: GET_INGREDIENTS_FAILED,
      payload: err,
    });
  });
}