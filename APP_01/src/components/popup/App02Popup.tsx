import { useEffect, useState } from "react";

const APP_02_URL = "http://localhost:5174"; // Se puede mover a una variable de entorno

type MessageType = {
  type: string;
  message: string;
};

function usePopupMessageHandler() {
  const [popupApp02, setPopupApp02] = useState<Window | null>(null);
  const [message, setMessage] = useState<MessageType>({
    type: "",
    message: "",
  });

  const openPopup = () => {
    const width = 600;
    const height = 800;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;

    const windowApp02 = window.open(
      APP_02_URL,
      "APP 02",
      `width=${width},height=${height},left=${left},top=${top}`
    );

    if (windowApp02) setPopupApp02(windowApp02);
  };

  const sendMessage = () => {
    popupApp02?.postMessage(
      { type: "HELLO_APP_02", message: "Hola desde APP 01" },
      APP_02_URL
    );
  };

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.origin === APP_02_URL) {
        setMessage(event.data);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [setMessage]);

  return { openPopup, sendMessage, message };
}

export function App02Popup() {
  const { openPopup, sendMessage, message } = usePopupMessageHandler();

  return (
    <div>
      <h2>Con origin</h2>
      <button type="button" onClick={openPopup}>
        Abrir ventana intermedia APP 02
      </button>
      <button type="button" onClick={sendMessage}>
        Enviar Mensaje a APP 02
      </button>

      <h3>Mensaje Recibido: </h3>
      <p>type: {message.type}</p>
      <p>mensaje: {message.message}</p>
    </div>
  );
}
