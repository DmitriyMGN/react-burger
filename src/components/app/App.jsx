import styles from "../app/app.module.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import api from "../../utils/api.js";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { getIngredients } from "../../services/actions/ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  const dispatch = useDispatch();
  const dataIngredients = useSelector((store) => store.ingredients.data);
  const constructorIngredients = useSelector(
    (store) => store.burgerConstructor.ingredients
  );

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  return (
    <div>
      <AppHeader />
      {dataIngredients ? (
        <div className={`${styles.container}`}>
          <DndProvider backend={HTML5Backend}>
            <BurgerIngredients ingredients={dataIngredients} />
            <BurgerConstructor ingredients={constructorIngredients} />
          </DndProvider>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
