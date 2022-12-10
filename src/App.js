import "./App.css";
import Development from "./components/development/Development";
import NewFooter from "./components/Footer/NewFooter";
import Gateway from "./components/gateway/Gateway";
import HeroSection from "./components/herosection/HeroSection";
import MR from "./components/mixedReality/MR";
import OctaBlog from "./components/octaBlog/OctaBlog";
import OctaBlog1 from "./components/octaBlog/OctaBlog1";
import OctaService from "./components/octaService/OctaService";
import OctaTeam from "./components/octateam/OctaTeam";
import Octawork from "./components/octaWork/Octawork";
import Team from "./components/team/Team";
// import Team from "./components/team/Team";
import Trekversegateway from "./components/Trekversegateway/Trekversegateway";
import NewLandingPage from "./page/NewLandingPage";

function App() {
  return (
    <div className="App">
      {/* <HeroSection /> */}
      <Gateway />
      <OctaService />
      {/* <Development /> */}
      {/* <Trekversegateway /> */}
      <Octawork />
      <OctaBlog />
      {/* <OctaBlog1 /> */}
      <MR />

      {/* <NewFooter /> */}
      {/* ___________________________________ */}
      {/* <NewLandingPage /> */}
    </div>
  );
}

export default App;
