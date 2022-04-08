import "./App.css";

function App(props) {
  return (
    <div className="App">
      {/* box1 */}
      <input
        type="checkbox"
        name="phoneBrand"
        value="apple"
        onClick={(event) => console.log(event.target.value)}
      />
      <label htmlFor="apple">Apple</label>
      <br />
      {/* box2 */}
      <input
        type="checkbox"
        name="phoneBrand"
        value="huawei"
        onClick={(event) => console.log(event.target.value)}
      />
      <label htmlFor="huawei">Huawei</label>
      <br />
      {/* box3 */}
      <input
        type="checkbox"
        name="phoneBrand"
        value="samsung"
        onClick={(event) => console.log(event.target.value)}
      />
      <label htmlFor="samsung">Samsung</label>
    </div>
  );
}

export default App;
