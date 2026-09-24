import { useEffect, useState } from "react";
import "./App.css";

function Stopwatch() {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hr, setHr] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      console.log("interval chal rha");
      let now = new Date();
      setHr(now.getHours());
      setMin(now.getMinutes());
      setSec(now.getSeconds());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        marginTop: "50px",
        shadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f5f5f5",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "inter, sans-serif",
          fontWeight: "600",
          fontSize: "40px",
        }}
      >
        Stopwatch
      </h1>
      <h1
        style={{
          textAlign: "center",
          fontFamily: "inter, sans-serif",
          fontWeight: "600",
          fontSize: "40px",
        }}
      >
        {hr} : {min} : {sec}
      </h1>
    </div>
  );
}

export default Stopwatch;
