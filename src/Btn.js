import React from "react";
import axios from "axios";

export function ActionBtn({ type, children }) {
  const MouseEnter = () => {
    console.log(`${type}Enter`);

    axios.post("http://localhost:8080/", {
      type: type,
      direction: "go"
    });
  };
  const MouseLeave = () => {
    console.log(`${type}Leave`);

    axios.post("http://localhost:8080/", {
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
