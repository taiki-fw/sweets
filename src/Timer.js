import React, { useState, useEffect } from "react";
import "./timer.css";

export function Timer() {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setRunning] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
      if (elapsedTime >= 60) {
        // fetch("", {
        //   method: "POST",
        //   body: JSON.stringify({ type: "all", direction: "stop" }),
        //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // }).then(res => {
        setRunning(false);
        setTimeout(() => {
          window.close();
        }, 3000);
        // });
      } else {
        setElapsedTime(elapsedTime);
      }
    }, 1000);
    console.log(elapsedTime);
  }, [elapsedTime]);

  return (
    <div>
      {isRunning ? elapsedTime : ""}
      <div className={`modal ${isRunning ? "" : "active"}`}>
        <span className="modal__text">終了</span>
      </div>
    </div>
  );
}
