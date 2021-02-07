import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";


export default function WeatherInfo(props){
    return (
    
   <div className="WeatherInfo">

      <h2> {props.data.city} </h2>

      <h3> <FormattedDate date={props.data.date} /> </h3>

      <div className="CurrentTemp">
        <span className="text-capitalize"> {props.data.description} </span>
        <br />
        <br />
        <WeatherTemperature celsius={props.data.temperature} />
        </div>
      <WeatherIcon code={props.data.icon} />
     

      <ul>
        <li>Wind: {Math.round(props.data.wind)} m/s</li>
        <li>Humidity: {props.data.humidity} %</li>
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