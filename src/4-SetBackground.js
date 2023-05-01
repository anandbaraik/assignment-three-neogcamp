import { useState } from "react";

// Create a select dropdown that updates the background color of the page when a new color is selected.
export function Background() {
  const COLORS = ["White", "Pink", "Tomato", "Green"];
  const [background, setBackgroud] = useState(COLORS[0]);
  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <h1>Set background color</h1>
      <div
        style={{
          borderRadius: "0.3rem",
          padding: "1rem",
          margin: "0.8rem 0",
          background: background
        }}
      >
        <select onChange={(e) => setBackgroud(e.target.value)}>
          {COLORS.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
