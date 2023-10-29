import React from "react";
import "./timer.css";
import Clock from "./Clock";
import StopWatch from "../stopwatch/StopWatch";
import { useState } from "react";
function Timer(props) {



    return <div className="timer">
    
        <Clock/> 
        <StopWatch />
    </div>;
}

export default Timer;
