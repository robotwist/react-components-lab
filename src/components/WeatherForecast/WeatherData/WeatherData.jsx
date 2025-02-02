import React from 'react';
import './WeatherData.css';

const WeatherData = ({ day, conditions, time }) => {
  return (
    <div className="weather-data">
      <p>
        <span>Day: </span>
        {day}
      </p>
      <p>
        <span>Conditions: </span>
        {conditions}
      </p>
      <p>
        <span>Time: </span>
        {time}
      </p>
    </div>
  );
};

export default WeatherData;