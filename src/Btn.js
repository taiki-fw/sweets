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

    axios.post("https://c3b218fc.ngrok.io/", {
      body: JSON.stringify({ type: type, direction: "stop" }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  return (
    <span onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
      {children}
    </span>
  );
}
