import "./App.css";
import { MessageHandler } from "./components/MessageHandler";
import { MessageHandlerToken } from "./components/MessageHandlerToken";

function App() {
  return (
    <>
      <h1>Aplicación intermedia que recibe y envia mensajes</h1>
      {/* <MessageHandler /> */}
      <MessageHandlerToken />
    </>
  );
}

export default App;
