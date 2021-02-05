import React from "react";
import "./styles.css";

export default function Weather() {
  let weatherData = {
    city: "Stockholm",
    date: "Sunday 10:00",
    description: "Sunny",
    temperature: 22,
    imgURL: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: 20,
    wind: 5
  };

  return (
    <div className="container">
      <h1> Weather App</h1>

      <form>
        <div className="row">
          <div className="col">
            <input
              type="text"
              placeholder="Enter your city..."
              autoComplete="off"
              autoFocus="on"
            />
          </div>
        </div>

        <input className="btn btn-secondary" type="submit" value="Search" />

        <button className="btn btn-dark">Current City</button>
      </form>

      <hr />

      <h2> {weatherData.city} </h2>

      <h3> {weatherData.date} </h3>

      <div className="CurrentTemp">
        <span> {weatherData.description} </span>
        <br />
        <br />
        <strong> {weatherData.temperature} </strong>
        <span className="units">
          <a href="/" className="active">
            °C |
          </a>
          <a href="/" className="fahrenheit">
            °F
          </a>
        </span>
      </div>

      <img className="CurrentWeatherIcon" src={weatherData.imgURL} alt="" />

      <ul>
        <li>Wind: {weatherData.wind} m/s</li>
        <li>Humidity: {weatherData.humidity} %</li>
      </ul>

      <hr />

      <div className="row">
        <div className="col">
          <p>Sunrise: 6:20</p>
          <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
        </div>

        <div className="col">
          <p>Sunset: 19:40</p>
          <img src="http://openweathermap.org/img/wn/01n@2x.png" alt="" />
        </div>
      </div>
    </div>
  );
}
