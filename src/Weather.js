import React, {useState} from "react";
import FormattedDate from "./FormattedDate";
import axios from 'axios';

import "./styles.css";

export default function Weather(props) {
  const[weatherData, setWeatherData] = useState({ready: false});
function displayWeather(response){

setWeatherData({
  ready: true,
  city: response.data.name,
    date: new Date (response.data.dt * 1000),
    description: response.data.weather[0].description,
    temperature: response.data.main.temp,
    icon: "http://openweathermap.org/img/wn/02d@2x.png",
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed
  }
)

}

if(weatherData.ready) {
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

      <h3> <FormattedDate date={weatherData.date} /> </h3>

      <div className="CurrentTemp">
        <span className="text-capitalize"> {weatherData.description} </span>
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

      <img className="CurrentWeatherIcon" src={weatherData.icon} alt="WeatherIcon" />

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

} else {

  const apiKey = "8d8df584539a5c7da3c6867ed8668765";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);

return "Loading the weather...🌴"
}
  
}
