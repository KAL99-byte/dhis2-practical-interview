// src/WeatherApp.js
import React, { useState } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_KEY = 'YOUR_API_KEY';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `${API_URL}?q=${location}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="weather-app">
      <h1>Weather App</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Enter city, country"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button onClick={fetchWeatherData} disabled={loading}>
          {loading ? 'Loading...' : 'Get Weather'}
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
      {weatherData && (
        <div className="weather-details">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
