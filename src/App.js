import React from "react";
import { ActionBtn } from "./Btn";
import { Timer } from "./Timer";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import "./reset.css";
import "./App.css";
import "./Btn.css";

function App() {
  return (
    <React.Fragment>
      <Timer />
      <div className="actions">
        <div className="actions__left">
          <ActionBtn type="front">
            <ArrowUpwardIcon />
          </ActionBtn>
          <div className="actions__left__center">
            <ActionBtn type="left">
              <ArrowBackIcon style={{ margin: "0 40px 0 0" }} />
            </ActionBtn>
            <ActionBtn type="right">
              <ArrowForwardIcon style={{ margin: "0 0 0 40px" }} />
            </ActionBtn>
          </div>
          <ActionBtn type="back">
            <ArrowDownwardIcon />
          </ActionBtn>
        </div>
        <div className="actions__right">
          <ActionBtn type="up">
            <ArrowUpwardIcon />
          </ActionBtn>
          <ActionBtn type="down">
            <ArrowDownwardIcon />
          </ActionBtn>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
