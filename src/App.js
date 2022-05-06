import './App.css';
import cake from "./images/cake.png";
import BakerySelection from "./components/modules/BakerySelection/BakerySelection.js";

function App() {
  return (
    <div className="App">
      <h1>Joselyn'ssssssssssssss bakery</h1>
      <img style={{width: "200px", height: "200px"}} src={cake} />
      <BakerySelection />
    </div>
  );
}

export default App;
