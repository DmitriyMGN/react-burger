import React from 'react';
import styles from "../app/app.module.css";
import { useState, useEffect } from "react";
import api from "../../utils/api.js";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients"
import BurgerConstructor from "../burger-constructor/burger-constructor"

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    api.getData()
      .then((res) => setData(res.data))
  }, [])


  return (
    <div>
      <AppHeader/>
      <div className={`${styles.container}`}>
      <BurgerIngredients/>
      <BurgerConstructor/>
      </div>
      
    </div>
  );
}

export default App;
