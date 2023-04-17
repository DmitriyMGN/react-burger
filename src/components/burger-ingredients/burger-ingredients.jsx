import {
    Counter,
    CurrencyIcon,
    Tab
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState, useEffect } from "react";
  import styles from "../burger-ingredients/burger-ingredients.module.css";

  function BurgerIngredients() {
    const [current, setCurrent] = useState('one')
    return (
      <div className={styles.ingredients}>
        <h1 className={`text text_type_main-large pb-5 pt-10`}>Соберите бургер</h1>
        <div className={`${styles.tabs} pb-10`}>
          <Tab value="one" active={current === "one"} onClick={setCurrent}>
            Булки
          </Tab>
          <Tab value="two" active={current === "two"} onClick={setCurrent}>
            Соусы
          </Tab>
          <Tab value="three" active={current === "three"} onClick={setCurrent}>
            Начинки
          </Tab>
        </div>
        <h2 className={`text text_type_main-medium pb-6`}>Булки</h2>
        <h2 className={`text text_type_main-medium pb-6`}>Соусы</h2>
        <h2 className={`text text_type_main-medium pb-6`}>Начинки</h2>
        <CurrencyIcon />
        <Counter />
      </div>
    );
  }
  
  export default BurgerIngredients;
  

