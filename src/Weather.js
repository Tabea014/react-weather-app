import React, {useState} from "react";

import WeatherInfo from "./WeatherInfo";
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

      <WeatherInfo data={weatherData}/>

      
    </div>
  );

} else {

  const apiKey = "8d8df584539a5c7da3c6867ed8668765";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(displayWeather);

return "Loading the weather...🌴"
}
  
}
