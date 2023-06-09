import styles from "./modal-overlay.module.css";
import PropTypes from "prop-types";

const ModalOverlay = ({onClose}) => {
 
  return (
    <div className={styles.modalOverlay} onClick={onClose}></div>
  );
};

ModalOverlay.protoTypes = {
  onClose: PropTypes.func.isRequired,
}

export default ModalOverlay;
