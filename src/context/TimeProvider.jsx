import { createContext } from "react";
import { useContext, useState } from "react";
import React from "react";

export const TimeContext = createContext();

function TimeProvider({ children }) {
  const [startButton, setStartButton] = useState(false);
  const [remainTime, setRemainTime] = useState(0);

  const updateRemainTime = (updatedTime) => {
    setRemainTime(updatedTime);
  };

  const toggleStartButton = () => {
    setStartButton(!startButton);
  };

  return (
    <TimeContext.Provider
      value={{ startButton, toggleStartButton, remainTime, updateRemainTime }}
    >
      {children}
    </TimeContext.Provider>
  );
}

export default TimeProvider;
