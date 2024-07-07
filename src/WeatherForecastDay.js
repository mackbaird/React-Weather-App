import React from "react";

export default function WeatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="weekday">{day()}</div>
      <img
        className="forecastIcon"
        src={`https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`}
        alt={props.data.weather[0].icon}
      ></img>
      <div className="temperatures">
        <span className="maximum">{Math.round(props.data.temp.max)}°</span>{" "}
        <span className="minimum">{Math.round(props.data.temp.min)}°</span>
      </div>
    </div>
  );
}
