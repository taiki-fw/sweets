import React from "react";

function ActionBtn({ type, children }) {
  const MouseEnter = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({ type: type, direction: "go" }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  const MouseLeave = () => {
    fetch("", {
      method: "POST",
      body: JSON.stringify({ type: type, direction: "stop" }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  };
  return (
    <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
      {children}
    </div>
  );
}
