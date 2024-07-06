import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Search for a City"
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Edinburgh</h1>
      <ul>
        <li>Friday 20:02</li>
        <li>Mostly Sunny</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="Mostly Sunny"
          ></img>
          14°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 1%</li>
            <li>Humidity: 63%</li>
            <li>Wind: 10 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
