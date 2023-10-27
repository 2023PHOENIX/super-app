import React from "react";
import "./weather.css";
import { useEffect } from "react";
import { useState } from "react";
import thermometer from "../../../assets/thermometer.png";
import Humidity from "../../../assets/humidity.svg";
import Wind from "./../../../assets/wind.svg";
function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [weatherInfo, setWeatherInfo] = useState(null);
  const fetchWeatherData = async () => {
    try {
      const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=49bf14a86eb54e669ee50549232710&q=Bangalore&aqi=no",
        {
          method: "GET",
          mode: "cors",
        }
      );

      const data = await response.json();

      setWeatherData(data);
      setWeatherInfo(data["current"]);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchTime = () => {
    if (weatherData) {
      const time = weatherData["location"].localtime.split(" ")[1];
      console.log(time);
      const arr = time.split(":");
      const amOrPm = arr[0] >= 12 ? "pm" : "am";
      return (
        <span>
          {arr[0]}:{arr[1]} {amOrPm}
        </span>
      );
    }
  };

  return (
    <div className="weather">
      <div className="time-date">
        <div className="date">
          {weatherData &&
            weatherData["location"].localtime
              .split(" ")[0]
              .split("-")
              .reverse()
              .join("-")}
        </div>
        <div className="time">{fetchTime()}</div>
      </div>

      <div className="weather-info-wrapper">
        <div className="weather-info">
          {weatherInfo && <img src={weatherInfo["condition"]["icon"]} />}
          {weatherInfo && weatherInfo["condition"]["text"]}
        </div>

        <div className="line"></div>
        <div className="weather-info">
          <div className="temprature">
            {weatherInfo && weatherInfo["temp_c"]}℃
          </div>
          <div className="w-info-comp">
            <img src={thermometer} className="therm" />
            {weatherInfo && weatherInfo["pressure_mb"]} mbar <br />
            pressure
          </div>
        </div>

        <div className="line"></div>
        <div className="weather-info">
          <div className="weather-info-comp">
            <div className="w-info-comp">
              <img src={Wind} />
              {weatherInfo["wind_kph"]}km/h
              <br />
              Wind
            </div>
          </div>

          <div className="dummy-div"></div>
          <div className="weather-info-comp">
            <div className="w-info-comp">
              <img src={Humidity} />
              {weatherInfo["humidity"]}% <br />
              Humidity
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
