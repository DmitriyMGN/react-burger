  import BurgerIngredient from "../burger-ingredient/burger-ingredient";
  import styles from "./ingredients-category.module.css";
  import PropTypes from "prop-types";
  import { ingredientPropType } from "../../utils/prop-types";
  
  function IngredientsCategory({ title, ingredients}) {
  
    return (
      <>
        <h2 className={`text text_type_main-medium pb-6`}>{title}</h2>
        <div className={`${styles.ingredientbox} pb-10`}>
          {ingredients
            ? ingredients.map((ingredient) => {
                return (
                    <BurgerIngredient 
                        ingredient={ingredient}
                        key={ingredient._id}
                    />
                );
              })
            : ""}
        </div>
      </>
    );
  }

  IngredientsCategory.propTypes = {
    title: PropTypes.string.isRequired,
    titleId: PropTypes.string,
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
    setIngredientModal: PropTypes.func
  }
  
  export default IngredientsCategory;
  