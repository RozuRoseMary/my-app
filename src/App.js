import logo from "./logo.svg";
import "./App.css";

function calcBMI(props) {
  const { height = 153, weight = 43 } = props;
  return weight / (height / 100) ** 2;
}

function App(props) {
  return (
    <div className="App">
      <h1>BMI : {calcBMI(props)}</h1>
    </div>
  );
}

export default App;
