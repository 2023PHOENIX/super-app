import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./clock.css";
import { useContext } from "react";
import { TimeContext } from "../../../context/TimeProvider";

function Clock() {
  
  const { startButton, remainTime } = useContext(TimeContext);
  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return (startButton ? <div className="time-countdown">Too late...</div> : <div className="time-countdown">stopped</div>);
    }
  
    const hours = Math.floor(remainingTime / 3600);
    const min = Math.floor((remainingTime % 3600) / 60);
    const sec = (remainingTime % 3600) % 60;
  
    let timeLeft = "";
    if (hours < 10) {
      timeLeft += "0" + hours + ":";
    } else {
      timeLeft += hours + ":";
    }
    if (min < 10) {
      timeLeft += "0" + min + ":";
    } else {
      timeLeft += min + ":";
    }
    if (sec < 10) {
      timeLeft += "0" + sec;
    } else {
      timeLeft += sec;
    }
  
    return <div className="time-countdown">{timeLeft}</div>;
  };

  
  return (
    <div className="clock">
      <div className="timer-wrapper"></div>
      <CountdownCircleTimer
        className="count-down-timer"
        isPlaying
        size={150}
        strokeWidth={6}
        duration={(!startButton ?0 :remainTime)}
        colors={["#FF6A6A", "#F7B801", "#A30000", "#A30000"]}
        colorsTime={[10, 6, 3, 0]}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
        onUpdate={remainTime}
      >
        {renderTime}

      </CountdownCircleTimer>
    </div>
  );
}

export default Clock;
