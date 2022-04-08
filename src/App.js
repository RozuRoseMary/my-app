import logo from "./logo.svg";
import "./App.css";

function App(props) {
  const { fullName = "Piyawan Yosathorn", birthYear = 1999 } = props;

  const currentYear = new Date().getFullYear();

  return (
    <div className="App">
      <h1>Hello it me</h1>
      <h1>{fullName}</h1>
      <p>Age: {currentYear - birthYear}</p>
    </div>
  );
}

// function

export default App;
