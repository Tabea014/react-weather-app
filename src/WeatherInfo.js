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
     

      <ul className="WindHumidity">
        <li>Wind: {Math.round(props.data.wind)} m/s</li>
        <li>Humidity: {props.data.humidity} %</li>
      </ul>

      <hr />

    
      </div>
    );
}