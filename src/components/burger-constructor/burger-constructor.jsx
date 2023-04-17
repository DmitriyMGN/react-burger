import {
    Counter,
    CurrencyIcon,
    Tab
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState, useEffect } from "react";
  import styles from "../burger-ingredients/burger-ingredients.module.css";

  function BurgerConstructor() {
    const [current, setCurrent] = useState('one')
    return (
      <>
        <div className={styles.tabs}>
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
        <CurrencyIcon />
        <Counter />
      </>
    );
  }
  
  export default BurgerConstructor;
  

