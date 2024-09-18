import { useState } from "react";

import { PSEPayment } from "./PSEPayment";
import { PAYMENT_URL } from "../../constants";

export function PSEButton() {
  const [paymentUrl, setPaymentUrl] = useState<string>("");

  // Simula obtener la URL de PSE tras una llamada API
  const handleStartPayment = () => {
    // Supón que PSE te devuelve esta URL después de una llamada API
    setPaymentUrl(PAYMENT_URL);
  };

  return (
    <div>
      <button type="button" onClick={handleStartPayment}>
        Pagar con PSE iframe
      </button>
      {paymentUrl && <PSEPayment paymentUrl={paymentUrl} />}
    </div>
  );
}
