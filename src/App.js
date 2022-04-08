import "./App.css";

function App(props) {
  return (
    <div className="App">
      <select
        name="countries"
        id="countries"
        onChange={(event) => console.log(event.target.value)}
      >
        <option value="thailand">Thailand</option>
        <option value="japan">japan</option>
        <option value="korea">Korea</option>
        <option value="canada">Canada</option>
        <option value="austria">Austria</option>
      </select>
    </div>
  );
}

export default App;
