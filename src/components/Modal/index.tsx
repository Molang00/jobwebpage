import React from 'react';
import styles from '../../styles/components/Modal.module.scss';

interface Props {
  isModalOpen: boolean;
  closeModal: () => void;
}

const Modal: React.FC<Props> = ({ children, isModalOpen, closeModal }) => (
  <div>
    <div
      style={{
        display: isModalOpen ? 'block' : 'none'
      }}
      className={styles.Modal}
    >
      <div className={styles.ModalBackground} onClick={closeModal} />
      <div onClick={closeModal} />
      <div className={styles.ModalContent}>{children}</div>
    </div>
  </div>
);

export default Modal;
