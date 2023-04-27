import {
    Tab
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState, useEffect} from "react";
  import IngredientsCategory from "../ingredients-category/ingredients-category";
  import IngredientDetails from "../ingredient-details/ingredient-details";
  import styles from "../burger-ingredients/burger-ingredients.module.css";
  import Modal from '../modal/modal';
  import PropTypes from "prop-types";
  import { ingredientPropType } from "../../utils/prop-types";

  function BurgerIngredients({ingredients}) {
    const [current, setCurrent] = useState('one')
    const [buns, setBuns] = useState(null)
    const [sauce, setSauce] = useState(null)
    const [mains, setMains] = useState(null)
    const [ingreintModal, setIngredientModal] = useState(null)

    const modalClose = () => {
      setIngredientModal(null)
    }


    useEffect(() => {
      if (ingredients) {
      setBuns(ingredients.filter((item) => {
        return item.type === "bun"
      }))
    }
    },[ingredients])

    useEffect(() => {
      if (ingredients) {
      setSauce(ingredients.filter((item) => {
        return item.type === "sauce"
      }))
    }
    },[ingredients])

    useEffect(() => {
      if (ingredients) {
      setMains(ingredients.filter((item) => {
        return item.type === "main"
      }))
    }
    },[ingredients])
    
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
        <div className={styles.content} >
          <IngredientsCategory 
          title={"Булки"}
          ingredients = {buns}
          setIngredientModal = {setIngredientModal}
          />
          <IngredientsCategory 
          title={"Соусы"}
          ingredients = {sauce}
          setIngredientModal = {setIngredientModal}
          />
          <IngredientsCategory 
          title={"Начинки"}
          ingredients = {mains}
          setIngredientModal = {setIngredientModal}
          />
        </div>
        {ingreintModal ?
        <Modal title="Детали ингредиента" onClose={modalClose}> 
        <IngredientDetails 
        ingreintModal={ingreintModal}
        />
        </Modal>
        : ""}

      </div>
    );
  }

  BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
  }
  
  
  export default BurgerIngredients;
  

