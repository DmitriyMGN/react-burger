import styles from "./ingredient-details.module.css";
import { ingredientPropType } from "../../utils/prop-types";


const IngredientDetails = ({ingreintModal}) => {

  console.log(ingreintModal)
  return (
    <div className={styles.container}>
      <img className={styles.container__image} src={ingreintModal.image} alt="Фото ингредиента" />
      <h3 className={`text text_type_main-medium mt-4 mb-8`}>{ingreintModal.name}</h3>
      <ul className={styles.container__list}>
        <li className={styles.container__item}>
            <p className={`text text_type_main-default`}>Калории,ккал</p>
            <p className={`text text_type_digits-default mt-2`}>{ingreintModal.calories}</p>
        </li>
        <li className={styles.container__item}>
            <p className={`text text_type_main-default`}>Белки, г</p>
            <p className={`text text_type_digits-default mt-2`}>{ingreintModal.proteins}</p>
        </li>
        <li className={styles.container__item}>
            <p className={`text text_type_main-default`}>Жиры, г</p>
            <p className={`text text_type_digits-default mt-2`} >{ingreintModal.fat}</p>
        </li>
        <li className={styles.container__item}>
            <p className={`text text_type_main-default`}>Углеводы, г</p>
            <p className={`text text_type_digits-default mt-2`}>{ingreintModal.carbohydrates}</p> 

        </li>

      </ul>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingreintModal: ingredientPropType.isRequired,
};

export default IngredientDetails;
