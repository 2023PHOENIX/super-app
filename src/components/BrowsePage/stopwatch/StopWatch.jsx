import React from "react";
import "./stopwatch.css";
import { useState } from "react";

import DownArrow from "../../../assets/browse/down-arrow.svg";
import upArrow from "../../../assets/browse/up-arrow.svg";
import { useContext } from "react";
import { TimeContext } from "../../../context/TimeProvider";

function Stopwatch() {
  const [timer, setTimer] = useState({
    hour: 0,
    min: 0,
    sec: 0,
  });

  const { startButton, toggleStartButton, remainTime, updateRemainTime } =
    useContext(TimeContext);
  // console.log(startButton);
  const handleUpClick = (e) => {
    console.log(e.target.name, e.target.value);

    setTimer((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] + 1,
    }));
  };
  const handleDownClick = (e) => {
    // ! here we have one this called e.target.name

    setTimer((prev) => ({
      ...prev,
      [e.target.name]: prev[e.target.name] - 1,
    }));
  };

  const handleSubmitButton = () => {
    
    updateRemainTime(timer.hour * 3600 + timer.min * 60 + timer.sec);
    // console.log(remainTime);
    toggleStartButton();
  };
  return (
    <div className="stopwatch-wrapper">
      <div className="stopwatch">
        <div className="hour time-text">
          <div className="time-unit">Hours</div>
          <img
            src={upArrow}
            name="hour"
            // value={timer.hour}
            onClick={handleUpClick}
            className="icon-arrow"
            alt=""
          />
          <div className="time-data">{timer.hour}</div>
          <img
            src={DownArrow}
            name="hour"
            onClick={handleDownClick}
            className="icon-arrow"
            alt=""
          />
        </div>
        <div className=" dot">:</div>

        <div className="hour time-text">
          <div className="time-unit">Minutes</div>
          <img
            src={upArrow}
            name="min"
            onClick={handleUpClick}
            className="icon-arrow"
            alt=""
          />
          <div className="time-data" name="min" value={timer.min}>
            {timer.min}
          </div>
          <img
            src={DownArrow}
            name="min"
            onClick={handleDownClick}
            className="icon-arrow"
            alt=""
          />
        </div>

        <div className=" dot">:</div>

        <div className="hour time-text">
          <div className="time-unit">Seconds</div>
          <img
            src={upArrow}
            className="icon-arrow"
            name="sec"
            onClick={handleUpClick}
            alt=""
          />
          <div className="time-data">{timer.sec}</div>
          <img
            src={DownArrow}
            name="sec"
            onClick={handleDownClick}
            className="icon-arrow"
            alt=""
          />
        </div>
      </div>

      <button className="button-timer" onClick={handleSubmitButton}>
        {!startButton ? "start" : "stop"}
      </button>
    </div>
  );
}

export default Stopwatch;
