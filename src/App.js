import "./App.css";

function App(props) {
  return (
    <div className="App">
      <input
        name="username"
        placeholder="username"
        onChange={(event) => console.log(event.target.value)}
      />
    </div>
  );
}

export default App;
