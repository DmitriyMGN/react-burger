import {
    Tab
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState, useEffect} from "react";
  import BurgerIngredient from "../burger-ingredient/burger-ingredient"
  import styles from "../burger-ingredients/burger-ingredients.module.css";

  function BurgerIngredients({dataIngredients}) {
    const [current, setCurrent] = useState('one')
    const [buns, setBuns] = useState(null)
    const [sauce, setSauce] = useState(null)
    const [mains, setMains] = useState(null)

    useEffect(() => {
      if (dataIngredients) {
      setBuns(dataIngredients.filter((item) => {
        return item.type === "bun"
      }))
    }
    },[dataIngredients])

    useEffect(() => {
      if (dataIngredients) {
      setSauce(dataIngredients.filter((item) => {
        return item.type === "sauce"
      }))
    }
    },[dataIngredients])

    useEffect(() => {
      if (dataIngredients) {
      setMains(dataIngredients.filter((item) => {
        return item.type === "main"
      }))
    }
    },[dataIngredients])
    
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
        <BurgerIngredient 
        title={"Булки"}
        dataIngredients = {buns}
        />
        <BurgerIngredient 
        title={"Соусы"}
        dataIngredients = {sauce}
        />
        <BurgerIngredient 
        title={"Начинки"}
        dataIngredients = {mains}
        />
      </div>
    );
  }
  
  export default BurgerIngredients;
  

