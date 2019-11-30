import React from "react";

export function ActionBtn({ type, children }) {
  const MouseEnter = () => {
    console.log(`${type}Enter`);

    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify({ type: type, direction: "go" }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
  };
  const MouseLeave = () => {
    console.log(`${type}Leave`);

    // fetch("", {
    //   method: "POST",
    //   body: JSON.stringify({ type: type, direction: "stop" }),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // });
  };
  return (
    <div onMouseEnter={MouseEnter} onMouseLeave={MouseLeave}>
      {children}
    </div>
  );
}
