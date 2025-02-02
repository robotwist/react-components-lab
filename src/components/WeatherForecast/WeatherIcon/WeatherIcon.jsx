import React from 'react';
import './WeatherIcon.css';

const WeatherIcon = ({ img, alt }) => {
  return <img className="weather-icon" src={img} alt={alt} />;
};

export default WeatherIcon;