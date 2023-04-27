import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import styles from "../burger-ingredient/burger-ingredient.module.css";

import { ingredientPropType } from "../../utils/prop-types";

function BurgerIngredient({ count, ingredient, setIngredientModal}) {
  const handleClick = () => {
    setIngredientModal(ingredient)
  }
  return (
    <div className={`${styles.ingredient} pb-8`} key={ingredient._id} onClick={handleClick}>
      <Counter count={"0"} />
      <img
        className={styles.ingredient__image}
        src={ingredient.image}
        alt={ingredient}
      ></img>
      <div className={`${styles.ingredient__price} pb-1 pt-1`}>
        <span className={`pb-1 pt-1 pr-2`}>{ingredient.price}</span>
        <CurrencyIcon />
      </div>
      <h4 className={`${styles.ingredient__name} text text_type_main-default`}>
        {ingredient.name}
      </h4>
    </div>
  );
}

BurgerIngredient.propTypes = {
  count: PropTypes.number,
  ingredient: ingredientPropType.isRequired,
  setIngredientModal: PropTypes.func.isRequired
}

export default BurgerIngredient;
