import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import styles from "../burger-constructor/burger-constructor.module.css";

function BurgerConstructor({ ingredients }) {
  console.log(ingredients);
  const [bunInredient, setBunInredient] = useState(null)
  const [anotherInredients, setAnotherInredients] = useState(null)
  useEffect(()=> {
    if(ingredients) {
      setBunInredient(ingredients.find((item) => item.type === "bun"))
      setAnotherInredients(ingredients.filter((item) => item.type !== "bun"))
    }
  },[ingredients])

  console.log(bunInredient);

  return (
    <>
      <div className={`mt-25`}>
        <div className={`${styles.burgerConstructor} `}>
          <div className={`${styles.burgerConstructor__element} `}>
            <DragIcon />
            <ConstructorElement
              type="top"
              isLocked={true}
              text="Краторная булка N-200i (верх)"
              price={bunInredient ? bunInredient.price : ""}
              thumbnail={bunInredient ? bunInredient.image : ""}
            />
          </div>
          {anotherInredients 
            ? anotherInredients.map((ingredient) => {
                return (
                  <div className={`${styles.burgerConstructor__element} `} key={ingredient._id}>
                    <ConstructorElement
                      text={ingredient.name}
                      price={ingredient.price}
                      thumbnail={ingredient.image}
                    />
                  </div>
                );
              })
            : ""}
          <div className={`${styles.burgerConstructor__element} `}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={bunInredient ? bunInredient.price : ""}
              thumbnail={bunInredient ? bunInredient.image : ""}
            />
          </div>
        </div>
        <div className={`${styles.buttonContainer} mt-10`}>
          <span className={`text text_type_digits-medium mr-2`}>450</span>
          <CurrencyIcon />
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            extraClass="ml-10"
          >
            Оформить заказ
          </Button>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default BurgerConstructor;
