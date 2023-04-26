import styles from "./order-details.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import done from "../../images/done.svg"

const OrderDetails = ({}) => {

  return (
    <div className={styles.container}>
     <h2 className={`text text_type_digits-large mt-10`} >034536</h2>
     <p className={`text text_type_main-medium mt-8 mb-15`}>идентификатор заказа</p>
     <img src={done} alt="Картинка галочки"></img>
     <p className={`text text_type_main-small mt-15 mb-2`}>Ваш заказ начали готовить</p>
     <p className={`text text_type_main-small text_color_inactive`}>Дождитесь готовности на орбитальной станции</p>
    </div>
  );
};

export default OrderDetails;
