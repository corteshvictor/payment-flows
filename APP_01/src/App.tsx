import "./App.css";
import { PSEButton } from "./components/iframe/PSEButton";
import { PSEPopup } from "./components/popup/PSEPopup";
import { PSEModal } from "./components/portal/PSEModal";
import NewModal from "./components/portal/NewModal";
import NewPSEPopup from "./components/popup/NewPSEPopup";
import { PSEPaymentSidebar } from "./components/sidebar/PSESidebar";
import { App02Popup } from "./components/popup/App02Popup";
import { App02PopupToken } from "./components/popup/App02PopupToken";

function App() {
  return (
    <>
      <h1>Simulando botón de pago con PSE</h1>
      {/* <PSEButton /> */}
      {/* <PSEModal /> */}
      {/* <PSEPopup /> */}
      {/* <NewModal /> */}
      {/* <NewPSEPopup /> */}
      {/* <PSEPaymentSidebar /> */}
      <h1>Post Message</h1>
      {/* <App02Popup /> */}
      <App02PopupToken />
    </>
  );
}

export default App;
