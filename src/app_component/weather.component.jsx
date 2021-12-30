import React from "react";
import "./weather.style.css";

const Weather = props => {
  return (
    <div className="container text-light">
      <div className="Card">
        <h1 className="text-white py-3">{props.cityname}</h1>
        <h2 className="py-4">
          <i className={`wi ${props.weatherIcon} display-1`} />
        </h2>

        {/* Get Celsius */}
        {props.temp_celsius ? (
          <h1 className="py-3">{props.temp_celsius}&deg;C</h1>
        ) : null}
        
        {props.feels_like ? (
          <h3 className="py-4">Feels Like: {props.feels_like}&deg;C</h3>
        ) : null}

        {/* show max and min temp */}
        {maxminTemp(props.temp_min, props.temp_max)}

        {/* Weather description */}
        <h3 className="py-4">
          {props.description.charAt(0).toUpperCase() +
            props.description.slice(1)}
        </h3>
      </div>
    </div>
  );
};

export default Weather;

function maxminTemp(min, max) {
  if (max && min) {
    return (
      <h3>
        <span className="px-4">Min Temp: {min}&deg;C</span>
        <span className="px-4">Max Temp: {max}&deg;C</span>
      </h3>
    );
  }
}
