import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";
import {
  CloseIcon
} from "@ya.praktikum/react-developer-burger-ui-components";

const modalRoot = document.getElementById("modals");

const Modal = ({title, onClose}) => {

  useEffect(() => {
    document.addEventListener('keydown' , (e) => {
      if (e.code === 'Escape') {
        onClose()
      }
    })
  }, [onClose])

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <div className={`${styles.modal__header} ml-10 mt-10 mr-10`}>
          <h2 className={`text text_type_main-large`}>{title}</h2>
          <button className={styles.button} type="button">
          <CloseIcon onClick={onClose} className={styles.modal__cross}/>
          </button>
        </div>
      </div>
      <ModalOverlay onClose={onClose}/>
    </>,
    modalRoot
  );
};

export default Modal;
