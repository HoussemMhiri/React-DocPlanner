import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NvBar from "./Components/NvBar";
import HealthExp from "./Components/HealthExp";
import ThreeCards from "./Components/ThreeCards";
import Brands from "./Components/Brands";
import Platform from "./Components/Platform";
import Cards from "./Components/Cards";
import Footers from "./Components/Footers";

function App() {
  return (
    <div className="App">
      <NvBar />
      <HealthExp />
      <ThreeCards />
      <Brands />
      <Platform />
      <Cards />
      <Footers />
    </div>
  );
}

export default App;
