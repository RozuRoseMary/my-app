import "./App.css";
import { useState } from "react";

function App() {
  const [friend, setFriend] = useState([
    "Earn",
    "Tarn",
    "Meriam",
    "Peach",
    "Tao",
    "Well",
  ]);

  return (
    <div className="App">
      {friend.map((el, idx) => (
        <div key={idx}>
          <p>My friends : </p>
          <FriendCard name={el} />
        </div>
      ))}
    </div>
  );
}

function FriendCard(props) {
  return (
    <div style={{ border: "1px solid blue", margin: "1rem", padding: "1rem" }}>
      {props.name}
    </div>
  );
}

export default App;
