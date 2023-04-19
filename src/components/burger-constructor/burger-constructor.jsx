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
      <div className={styles.burger}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <DragIcon />
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail={"img"}
          />
          <ConstructorElement
            text="Краторная булка N-200i (верх)"
            price={50}
            thumbnail={"img"}
          />
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail={"img"}
          />
        </div>
        <CurrencyIcon />
        <Button htmlType="submit" type="primary" size="large" />
      </div>
    </>
  );
}

export default BurgerConstructor;
