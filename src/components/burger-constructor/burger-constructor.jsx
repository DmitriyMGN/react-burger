import {
  ConstructorElement,
  CurrencyIcon,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState, useEffect } from "react";
import styles from "../burger-constructor/burger-constructor.module.css";

function BurgerConstructor() {
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
              price={200}
              thumbnail={"img"}
            />
          </div>
          <div className={`${styles.burgerConstructor__element} `}>
            <ConstructorElement
              text="Краторная булка N-200i (верх)"
              price={50}
              thumbnail={"img"}
            />
          </div>
          <div className={`${styles.burgerConstructor__element} `}>
            <ConstructorElement
              type="bottom"
              isLocked={true}
              text="Краторная булка N-200i (низ)"
              price={200}
              thumbnail={"img"}
            />
          </div>
        </div>
        <div className={`${styles.buttonContainer} mt-10`}>
          <span className={`text text_type_digits-medium mr-2`}>450</span>
          <CurrencyIcon />
          <Button htmlType="submit" type="primary" size="large" extraClass="ml-10">
            Оформить заказ
          </Button>
        </div>
      </div>

      <div></div>
    </>
  );
}

export default BurgerConstructor;
