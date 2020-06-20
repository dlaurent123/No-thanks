import React from "react";
import Modal from "react-modal";
import { styles } from "./helpers";
import BusinessDisplay from "../bussinesDisplay/BussinesDisplay";

const ModalDispaly = () => {
  return (
    <Modal style={styles} isOpen={true}>
      <BusinessDisplay />
    </Modal>
  );
};

export default ModalDispaly;
