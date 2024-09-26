import { useEffect, useState } from "react";

const APP_01_URL = "http://localhost:5173"; // Se puede mover a una variable de entorno

type MessageType = {
  type: string;
  message: string;
};

export function MessageHandlerToken() {
  const [message, setMessage] = useState<MessageType>({
    type: "",
    message: "",
  });

  useEffect(() => {
    const handleMessage = async (event: MessageEvent) => {
      if (event.origin === APP_01_URL) {
        const { message, token, type } = event.data;

        try {
          const response = await fetch(
            `http://localhost:3000/validate-token?token=${token}`
          );
          const data = await response.json();
          console.log("🚀 ~ handleMessage ~ data:", data);

          if (data.valid) {
            console.log("Mensaje válido recibido en App 02:", message);
            setMessage({ message, type });
          } else {
            setMessage({
              type: "ERROR",
              message: data.error,
            });
          }
        } catch (error) {
          console.error("Error al validar el token:", error);
        }
      }
    };

    window.addEventListener("message", handleMessage);

    const handleBeforeUnload = () => {
      window.opener?.postMessage(
        { type: "CLOSE_APP_02", message: "APP 02 ha sido cerrada" },
        APP_01_URL
      );
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("message", handleMessage);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [setMessage]);

  const handleSendMessage = () => {
    window.opener?.postMessage(
      { type: "HELLO_APP_01", message: "Hola desde APP 02" },
      APP_01_URL
    );
  };

  return (
    <>
      <h3>Mensaje Recibido: </h3>
      <p>type: {message.type}</p>
      <p>mensaje: {message.message}</p>
      <button type="button" onClick={handleSendMessage}>
        Enviar Mensaje a APP 01
      </button>
    </>
  );
}
