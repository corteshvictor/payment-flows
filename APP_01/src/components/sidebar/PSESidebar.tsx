import { useState } from 'react';

import './sidebar.css';
import { PAYMENT_URL } from '../../constants';

export function PSEPaymentSidebar() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleOpenSidebar = () => {
    setShowSidebar(true);
  };

  const handleRedirectToPSE = () => {
    window.location.href = PAYMENT_URL;
  };

  const handleCloseSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div>
      <button onClick={handleOpenSidebar}>Pagar con PSE Sidebar</button>

      {showSidebar && (
        <div className="sidebar">
          <button className="close-sidebar" onClick={handleCloseSidebar}>
            X
          </button>
          <h2>Pagar con PSE Sidebar</h2>
          <p>Serás redirigido a PSE para completar tu pago.</p>
          <button className="redirect-button" onClick={handleRedirectToPSE}>
            Continuar a PSE
          </button>
        </div>
      )}
    </div>
  );
}
