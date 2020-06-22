import React from "react";
import Modal from "react-modal";
import { styles } from "./helpers";
import BusinessDisplay from "../bussinesDisplay/BussinesDisplay";
import { useSelector, useDispatch } from "react-redux";
import { modalState, updateModal } from "./modalSlice";

const ModalDisplay = () => {
  const isOpen = useSelector(modalState);
  const dispatch = useDispatch();

  return (
    <Modal
      contentLabel="Example Modal"
      ariaHideApp={false}
      ariaModal={true}
      style={styles}
      isOpen={isOpen}
    >
      <button onClick={() => dispatch(updateModal(!isOpen))}>Close</button>
      <BusinessDisplay />
    </Modal>
  );
};

export default ModalDisplay;
