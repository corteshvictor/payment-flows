import "./App.css";
import { PSEButton } from "./components/iframe/PSEButton";
import { PSEPopup } from "./components/popup/PSEPopup";
import { PSEModal } from "./components/portal/PSEModal";
import NewModal from "./components/portal/NewModal";
import NewPSEPopup from "./components/popup/NewPSEPopup";
import { PSEPaymentSidebar } from "./components/sidebar/PSESidebar";

function App() {
  return (
    <>
      <h1>Simulando botón de pago con PSE</h1>
      <PSEButton />
      <PSEModal />
      <PSEPopup />
      <NewModal />
      <NewPSEPopup />
      <PSEPaymentSidebar />
    </>
  );
}

export default App;
