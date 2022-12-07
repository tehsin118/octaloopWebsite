import "./App.css";
import NewFooter from "./components/Footer/NewFooter";
import Gateway from "./components/gateway/Gateway";
import MR from "./components/mixedReality/MR";
import OctaBlog from "./components/octaBlog/OctaBlog";
import OctaBlog1 from "./components/octaBlog/OctaBlog1";
import Octawork from "./components/octaWork/Octawork";

function App() {
  return (
    <div className="App">
      <Gateway />
      <Octawork />
      <MR />
      <OctaBlog />
      <OctaBlog1 />
      <NewFooter />
    </div>
  );
}

export default App;
