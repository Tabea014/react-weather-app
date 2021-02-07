import React, {useState} from "react";

export default function WeatherTemperature (props){
const[unit, setUnit] = useState ("celsius");
function showFahrenheit (event){
    event.preventDefault();
    setUnit("fahrenheit");
}

function showCelsius(event){
    event.preventDefault();
    setUnit("celsius");
}

 function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }


if (unit === `celsius`) {

   return (
       <div className="WeatherTemperature">
    <span> {Math.round(props.celsius)} </span>
        <span className="units">
          <a href="/" className="celsius">
            °C |
          </a>
          <a href="/" className="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
    </div>
);
} else {

    return (
       <div className="WeatherTemperature">
    <strong> {Math.round(fahrenheit())} </strong>
        <span className="units">
          <a href="/" className="celsius" onClick={showCelsius}>
            °C |
          </a>
          <a href="/" className="fahrenheit">
            °F
          </a>
        </span>
    </div>
);
    }

}