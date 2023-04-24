import React from 'react';
import styles from "../app/app.module.css";
import { useState, useEffect } from "react";
import api from "../../utils/api.js";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"

function App() {
  const [dataIngredients, setDataIngredients] = useState(null);

  useEffect(() => {
    api.getData()
      .then((res) => setDataIngredients(res.data))
  }, [])


  return (
    <div>
      <AppHeader/>
      <div className={`${styles.container}`}>
        <BurgerIngredients 
        ingredients = {dataIngredients}
        />
        <BurgerConstructor
        ingredients = {dataIngredients}
        />
        </div>
    </div>
  );
}

export default App;
