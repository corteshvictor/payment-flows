import { useEffect, useRef, useState } from "react";

const APP_02_URL = "http://localhost:5174";

type MessageType = {
  type: string;
  message: string;
};

export function App02PopupToken() {
  const [message, setMessage] = useState<MessageType>({
    type: "",
    message: "",
  });
  const [token, setToken] = useState<string>("");
  const popupRef = useRef<Window | null>(null);

  useEffect(() => {
    fetch("http://localhost:3000/generate-token")
      .then((response) => response.json())
      .then((data) => setToken(data.token))
      .catch((error) => console.error(error));
  }, []);

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

  const openPopup = () => {
    popupRef.current = window.open(
      APP_02_URL,
      "APP 02",
      `width=600,height=800,left`
    );
  };

  const sendMessageToPopup = () => {
    if (popupRef.current && token) {
      popupRef.current.postMessage(
        { type: "HELLO_APP_02", message: "Hola desde APP 01", token },
        APP_02_URL
      );
    }
  };

  return (
    <div>
      <h2>Con origin y token</h2>
      <button type="button" onClick={openPopup}>
        Abrir ventana intermedia APP 02
      </button>
      <button type="button" onClick={sendMessageToPopup}>
        Enviar Mensaje a APP 02
      </button>

      <h3>Mensaje Recibido: </h3>
      <p>type: {message.type}</p>
      <p>mensaje: {message.message}</p>
    </div>
  );
}
