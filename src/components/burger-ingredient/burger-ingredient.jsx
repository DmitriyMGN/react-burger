import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import styles from "../burger-ingredient/burger-ingredient.module.css";

function BurgerIngredient({ title, dataIngredients }) {

  return (
    <>
      <h2 className={`text text_type_main-medium pb-6`}>{title}</h2>
      <div className={`${styles.ingredientbox} pb-10`}>
        {dataIngredients
          ? dataIngredients.map((ingredient) => {
              return (
                <div className={`${styles.ingredient} pb-8`} key={ingredient._id}>
                  <Counter count={"0"}/>
                  <img
                    className={styles.ingredient__image}
                    src={ingredient.image}
                    alt={ingredient}
                  ></img>
                  <div className={`${styles.ingredient__price} pb-1 pt-1`}>
                    <span className={`pb-1 pt-1 pr-2`}>{ingredient.price}</span>
                    <CurrencyIcon />
                  </div>
                  <h4 className={`${styles.ingredient__name} text text_type_main-default`} >{ingredient.name}</h4>
                </div>
              );
            })
          : ""}
      </div>
    </>
  );
}

export default BurgerIngredient;
