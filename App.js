import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const [boxColor, setBoxColor] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  const reset = () => {
    setBoxColor("lightgray");
  };

  const applyColor = () => {
    if (color.trim() === "") {
      setError("Please write a color first");
      return;
    }
    setBoxColor(color);
    setError("");
  };
  return (
    <div className="container">
      <h1>Interactive Color Box 🎨</h1>
      <input
        type="text"
        placeholder="Enter a color or hex code"
        value={color}
        onChange={handleChange}
      />
      <button onClick={applyColor}>Apply color</button>
      <button onClick={reset}>Reset</button>

      <div
        className="color-box"
        style={{ backgroundColor: boxColor || "lightgray" }}
      ></div>
    </div>
  );
}
