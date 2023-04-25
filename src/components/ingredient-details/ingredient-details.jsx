import styles from "./ingredient-details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientDetails = ({ingreintModal}) => {
  return (
    <div>
      <img src={ingreintModal.image} alt="Фото ингредиента" />
      <h3 className={`text text_type_main-medium mt-4 mb-8`}>title</h3>
      <ul>
        <li>
            <p>Калории,ккал</p>
            <p>1</p>
        </li>
        <li>
            <p>Белки, г</p>
            <p>1</p>
        </li>
        <li>
            <p>Жиры, г</p>
            <p>1</p>
        </li>
        <li>
            <p>Углеводы, г</p>
            <p>1</p>
        </li>

      </ul>
    </div>
  );
};

export default IngredientDetails;
