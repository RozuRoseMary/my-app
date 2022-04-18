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
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          color: "#fff",
          background: "#000",
        }}
      >
        arr.map
      </h1>
      {posted.map((item, idx) => {
        return (
          <div
            key={idx}
            style={{
              border: "1px solid blue",
              margin: "1rem",
              padding: "1rem",
            }}
          >
            <h2>{item.message}</h2>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <span>{item.name}</span>
              <span>{item.date}</span>
            </div>
          </div>
        );
      })}

      {/* {posted.map((el, idx) => (
        <div key={idx}>
          <PostedList message={el} name={el} date={el} />
        </div>
      ))} */}
    </div>
  );
}

function PostedList(props) {
  return (
    <div style={{ border: "1px solid blue", margin: "1rem", padding: "1rem" }}>
      <h1>{props.message}</h1>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <p>{props.name}</p>
        <p>{props.date}</p>
        console.log(props.message)
      </div>
    </div>
  );
}

export default App;
