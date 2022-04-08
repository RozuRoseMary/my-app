import "./App.css";

function App(props) {
  return (
    <div className="App">
      <a
        href="https://google.com"
        onClick={(event) => {
          if (window.confirm("Go to google?")) return true;
          else return event.preventDefault();
        }}
      >
        Google
      </a>
    </div>
  );
}

export default App;
