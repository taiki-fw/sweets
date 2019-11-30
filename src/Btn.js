import React from "react";
import axios from "axios";

export function ActionBtn({ type, children }) {
  const MouseEnter = () => {
    console.log(`${type}Enter`);

    axios.post("https://c3b218fc.ngrok.io/", {
      type: type,
      direction: "go"
    });
  };
  const MouseLeave = () => {
    console.log(`${type}Leave`);

    axios.post("localhost:3000", {
      type: type,
      direction: "stop"
    });
  };
  return (
    <span
      onMouseUp={MouseEnter}
      onMouseDown={MouseLeave}
      style={{
        display: "inline-block",
        background: "darkgrey"
      }}
    >
      {children}
    </span>
  );
}
