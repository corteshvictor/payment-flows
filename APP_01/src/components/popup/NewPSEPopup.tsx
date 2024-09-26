import React, { useState, useEffect } from 'react';

import { PAYMENT_URL } from '../../constants';

const PSEPopup: React.FC = () => {
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);

  const handleOpenPopup = () => {
    // Abre una ventana popup con características ajustadas para parecer parte de la app
    const newWindow = window.open(
      PAYMENT_URL,
      'PSE Payment',
      'width=800,height=600,toolbar=no,menubar=no,scrollbars=no,resizable=no,status=no,location=no,directories=no'
    );

    if (newWindow) {
      setPopupWindow(newWindow);

      // Si necesitas enviar datos o manejar el estado cuando la ventana esté cargada
      newWindow.onload = () => {
        console.log('Popup cargado');

        // Comunicación inicial opcional con el popup (si es necesario)
        newWindow.postMessage({ type: 'INITIALIZE_PAYMENT', amount: 100 }, '*');
      };
    }
  };

  const handleClosePopup = () => {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.postMessage({ type: 'CLOSE_POPUP' }, '*');
      popupWindow.close();
      console.log('Popup cerrado');
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log('Mensaje recibido del popup:', event.origin, event.data);

      // Aquí puedes manejar respuestas del popup si es necesario
      if (event.origin === 'https://registro.desarrollo.pse.com.co') {
        if (event.data.type === 'PAYMENT_SUCCESS') {
          console.log('Pago exitoso');
        }
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, [popupWindow]);

  return (
    <div>
      <button onClick={handleOpenPopup}>Pagar con PSE Popup</button>
      <button onClick={handleClosePopup}>Cerrar Popup</button>
    </div>
  );
};

export default PSEPopup;
