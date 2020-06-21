import React from "react";
import Modal from "react-modal";
import { styles } from "./helpers";
import BusinessDisplay from "../bussinesDisplay/BussinesDisplay";
import { useSelector } from "react-redux";
import { modalState } from "./modalSlice";

const ModalDisplay = () => {
  const isOpen = useSelector(modalState);

  return (
    <Modal
      contentLabel="Example Modal"
      ariaHideApp={false}
      ariaModal={true}
      style={styles}
      isOpen={isOpen}
    >
      <BusinessDisplay />
    </Modal>
  );
};

export default ModalDisplay;
