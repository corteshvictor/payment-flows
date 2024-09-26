import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { PAYMENT_URL } from '../../constants';

interface PSEModalProps {
  onClose: () => void;
  paymentUrl: string;
}

const PSEModal: React.FC<PSEModalProps> = ({ onClose, paymentUrl }) => {
  const [content, setContent] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      const response = await fetch(paymentUrl, {mode: 'no-cors'});
      console.log("🚀 ~ fetchContent ~ paymentUrl:", paymentUrl)
      console.log("🚀 ~ fetchContent ~ response:", response)
      const text = await response.text();
      console.log("🚀 ~ fetchContent ~ text:", text)
      setContent(text);
    };

    fetchContent();
  }, [paymentUrl]);

  return ReactDOM.createPortal(
    <div style={modalStyles.overlay}>
      <div style={modalStyles.content}>
        <button onClick={onClose} style={modalStyles.closeButton}>
          Cerrar
        </button>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};

const PSEPopup: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal}>Pagar con PSE Modal</button>
      {isModalOpen && <PSEModal onClose={handleCloseModal} paymentUrl={PAYMENT_URL} />}
    </div>
  );
};

// Estilos para el modal
const modalStyles = {
  overlay: {
    position: 'fixed' as 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1000,
  },
  content: {
    position: 'relative' as 'relative',
    width: '80%',
    height: '80%',
    margin: 'auto',
    backgroundColor: 'white',
    padding: '1rem',
    borderRadius: '10px',
  },
  iframe: {
    width: '100%',
    height: '100%',
    border: 'none',
  },
  closeButton: {
    position: 'absolute' as 'absolute',
    top: '10px',
    right: '10px',
    background: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default PSEPopup;