import { useState } from "react";

import Modal from "./Modal";
import { PAYMENT_URL } from "../../constants";

export function PSEModal() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Pagar con PSE Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        paymentUrl={PAYMENT_URL}
      />
    </div>
  );
}
