import { useEffect, useState } from "react";
import "./App.css";
import Stopwatch from "./Stopwatch";

function generateColor() {
  const colors = [
    "#f0f0f0",
    "#e0e0e0",
    "#d0d0d0",
    "#c0c0c0",
    "#b0b0b0",
    "#a0a0a0",
    "#909090",
    "#808080",
    "#707070",
    "#606060",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

function LearningUseEffect() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState();

  const increment = () => setCount((currentCount) => currentCount + 1);
  const decrement = () => setCount((currentCount) => currentCount - 1);

  useEffect(() => {
    console.log("use effect chalgya");
    let bg = generateColor();
    setBgColor(bg);
  }, [count]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontFamily: "inter, sans-serif",
        backgroundColor: bgColor,
        paddingTop: "30px",
        paddingBottom: "60px",
      }}
    >
      <div
        style={{
          marginTop: "50px",
          marginBottom: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "17px",
        }}
      >
        <h1
          style={{
            fontSize: "40px",
            textAlign: "center",
            fontWeight: "600",
            letterSpacing: "-0.02em",
            margin: 0,
            padding: 0,
          }}
        >
          Counter App
        </h1>

        <p
          style={{
            fontSize: "40px",
            fontWeight: "600",
            textAlign: "center",
            letterSpacing: "-0.02em",
            height: "40px",
            margin: 0,
            padding: 0,
          }}
        >
          Count: {count}
        </p>
      </div>

      <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
        <button
          onClick={increment}
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "solid 2px #45a049",
            cursor: "pointer",
          }}
        >
          Increment
        </button>
        <button
          onClick={decrement}
          style={{
            fontSize: "16px",
            padding: "10px 20px",
            borderRadius: "10px",
            backgroundColor: "#f44336",
            color: "white",
            border: "solid 2px #da190b",
            cursor: "pointer",
          }}
        >
          Decrement
        </button>
      </div>
      <Stopwatch />
    </div>
  );
}

export default LearningUseEffect;
