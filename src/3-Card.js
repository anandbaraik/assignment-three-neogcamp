import { useState } from "react";

// Create a slider input in React which will set the border radius of a card on a change in the value of the range.
export function Card() {
  const [borderRadius, setBorderRadius] = useState(0);
  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <div
        style={{
          border: "0.1rem solid grey",
          borderRadius: `${borderRadius}px`,
          padding: "1rem",
          margin: "1rem"
        }}
      >
        <h2>Card with rounded corners</h2>
        Border Radius :{" "}
        <input
          type="range"
          defaultValue="0"
          min="0"
          max="20"
          step="1"
          onChange={(e) => setBorderRadius(e.target.value)}
        />
      </div>
    </div>
  );
}
