import { useState, useEffect } from 'react';

import { PAYMENT_URL } from '../../constants';

export function PSEPopup () {
  const [popupWindow, setPopupWindow] = useState<Window | null>(null);

  const handleOpenPopup = () => {
    // Abre el popup en una nueva ventana
    const newWindow = window.open(PAYMENT_URL, 'PSE Payment', 'width=800,height=600');

    if (newWindow) {
      setPopupWindow(newWindow);

      newWindow.onload = () => {
        console.log('Popup cargado');
        
        newWindow.postMessage({ type: 'INITIALIZE_PAYMENT', amount: 100 }, '*');
      };
    }
  };

  const handleClosePopup = () => {
    if (popupWindow && !popupWindow.closed) {
      popupWindow.close();
    }
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
    console.log("🚀 ~ handleMessage ~ event:", event.origin)
   
      if (event.origin === 'http://localhost:5173"') {
        console.log('Mensaje recibido del popup:', event.data);
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

