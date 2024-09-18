import { CSSProperties } from "react";
import ReactDOM from "react-dom";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  paymentUrl: string;
};

export function Modal({ isOpen, onClose, paymentUrl }: ModalProps) {
  if (!isOpen) return null;

  const handleProceedToPSE = () => {
    window.location.href = paymentUrl;
  };

  return ReactDOM.createPortal(
    <div style={modalStyles}>
      <div style={modalContentStyles}>
        <button type="button" onClick={onClose} style={closeButtonStyles}>
          Cerrar
        </button>
        <p>Estás a punto de ser redirigido a la página de pago de PSE.</p>
        <button
          type="button"
          onClick={handleProceedToPSE}
          style={proceedButtonStyles}
        >
          Proceder al Pago
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
}

const modalStyles: CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const modalContentStyles: CSSProperties = {
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "8px",
  width: "80%",
  maxWidth: "500px",
  position: "relative",
  textAlign: "center",
};

const closeButtonStyles: CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
};

const proceedButtonStyles: CSSProperties = {
  backgroundColor: "#007bff",
  color: "#fff",
  padding: "10px 20px",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default Modal;
