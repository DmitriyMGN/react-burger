import {
    Tab
  } from "@ya.praktikum/react-developer-burger-ui-components";
  import { useState, useEffect, useMemo} from "react";
  import IngredientsCategory from "../ingredients-category/ingredients-category";
  import IngredientDetails from "../ingredient-details/ingredient-details";
  import styles from "../burger-ingredients/burger-ingredients.module.css";
  import Modal from '../modal/modal';
  import PropTypes from "prop-types";
  import { ingredientPropType } from "../../utils/prop-types";
  import { useSelector, useDispatch } from "react-redux";
  import { RESET_INGREDIENT_MODAL } from "../../services/actions/ingredient-detail-modal"


  function BurgerIngredients() {
    const dispatch = useDispatch()
    const [currentTab, setCurrentTab] = useState("buns")
    const ingredients = useSelector((store) => store.ingredients.data)
    const ingredientInModal = useSelector((store) => store.ingredientsDetailModal.data)
 
    console.log(ingredientInModal)

    const modalClose = () => {
      dispatch({type: RESET_INGREDIENT_MODAL})
    }

    const buns = useMemo(
      () => ingredients.filter((item) => item.type === "bun"),
      [ingredients]
    )

    const sauces = useMemo(
      () => ingredients.filter((item) => item.type === "sauce"),
      [ingredients]
    )

    const mains = useMemo(
      () => ingredients.filter((item) => item.type === "main"),
      [ingredients]
    )

    
    return (
      <div className={styles.ingredients}>
        <h1 className={`text text_type_main-large pb-5 pt-10`}>Соберите бургер</h1>
        <div className={`${styles.tabs} pb-10`}>
          <Tab value="buns" active={currentTab === "buns"} onClick={setCurrentTab}>
            Булки
          </Tab>
          <Tab value="mains" active={currentTab === "mains"} onClick={setCurrentTab}>
            Соусы
          </Tab>
          <Tab value="sauces" active={currentTab === "sauces"} onClick={setCurrentTab}>
            Начинки
          </Tab>
        </div>
        <div className={styles.content}>
          <IngredientsCategory 
            title={"Булки"}
            ingredients = {buns}
            />
            <IngredientsCategory 
            title={"Соусы"}
            ingredients = {sauces}
            />
            <IngredientsCategory 
            title={"Начинки"}
            ingredients = {mains}
            />
        </div>
        {ingredientInModal && (
        <Modal title="Детали ингредиента" onClose={modalClose}> 
        <IngredientDetails 
        ingreintModal={ingredientInModal}
        />
        </Modal>
        )}

      </div>
    );
  }

  BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired
  }
  
  
  export default BurgerIngredients;
  

