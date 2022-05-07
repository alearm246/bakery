import './App.css';
import BakerySelection from "./components/modules/BakerySelection/BakerySelection.js";
import Checkout from "./components/modules/Checkout/Checkout.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<BakerySelection />} />
          <Route path="/form/:item/:price" element={<Checkout />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
