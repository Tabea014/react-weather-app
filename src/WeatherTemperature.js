import React from "react";

export default function WeatherTemperature (props){
   return (
       <div className="WeatherTemperature">
    <strong> {Math.round(props.celsius)} </strong>
        <span className="units">
          <a href="/" className="active">
            °C |
          </a>
          <a href="/" className="fahrenheit">
            °F
          </a>
        </span>
    </div>
);

}