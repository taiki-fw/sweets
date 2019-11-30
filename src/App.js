import React from "react";
import { ActionBtn } from "./Btn";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="actions">
      <div className="actions__left">
        <ActionBtn type="front">上</ActionBtn>
        <div className="actions__left__center">
          <ActionBtn type="left">左</ActionBtn>
          <ActionBtn type="right">右</ActionBtn>
        </div>
        <ActionBtn type="back">下</ActionBtn>
      </div>
      <div className="actions__right">
        <ActionBtn type="up">Up</ActionBtn>
        <ActionBtn type="down">Down</ActionBtn>
      </div>
    </div>
  );
}

export default App;
