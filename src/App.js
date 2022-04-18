import "./App.css";
import { useState } from "react";

function App() {
  const [posted, setPosted] = useState([
    {
      id: 1,
      message: "ภำมากนะ",
      date: "18-04-2022",
      name: "Tarn",
    },
    {
      id: 2,
      message: "หัวจะปวด",
      date: "18-04-2022",
      name: "Meriam",
    },
    {
      id: 3,
      message: "อิอิ",
      date: "18-04-2022",
      name: "Peach",
    },
    {
      id: 4,
      message: "เส้าแท้",
      date: "18-04-2022",
      name: "Well",
    },
    {
      id: 5,
      message: "คถ.จัง",
      date: "18-04-2022",
      name: "Tao",
    },
  ]);

  console.log(posted);
  return (
    <div className="App">
      <h1>Hard code</h1>
      {posted[0].message}

      <h1>arr.map</h1>
      {posted.map((key) => (
        <div>{key.message}</div>
      ))}

      {/* <h1>for loop</h1> */}
    </div>
  );
}

export default App;
