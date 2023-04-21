import { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import ModalOverlay from "../modal-overlay/modal-overlay";

const modalRoot = document.getElementById("modals");

const Modal = () => {
  console.log(modalRoot);

  return ReactDOM.createPortal(
    <>
      <div className={styles.modal}>
        <p>Privet</p>
      </div>
      <ModalOverlay />
    </>,
    modalRoot
  );
};

export default Modal;
