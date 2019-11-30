import React, { useState, useEffect } from "react";
import "./timer.css";
import axios from "axios";

export function Timer() {
  const [startTime, setStartTime] = useState(new Date().getTime());
  const [elapsedTime, setElapsedTime] = useState(0);
  const [isRunning, setRunning] = useState(true);

  useEffect(() => {
    setInterval(() => {
      const elapsedTime = Math.floor((new Date().getTime() - startTime) / 1000);
      if (elapsedTime >= 180) {
        axios
          .post("http://localhost:8080/", {
            type: "all",
            direction: "stop"
          })
          .then(res => {
            setRunning(false);
            setTimeout(() => {
              window.close();
            }, 3000);
          });
      } else {
        setElapsedTime(elapsedTime);
      }
    }, 1000);
  }, [elapsedTime]);

  return (
    <div>
      <span className={isRunning ? "time" : "none"}>
        {isRunning ? elapsedTime : ""}
      </span>
      <div className={`modal ${isRunning ? "" : "active"}`}>
        <span className="modal__text">終了</span>
      </div>
    </div>
  );
}
