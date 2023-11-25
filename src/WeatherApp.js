import React, { useState, useEffect } from 'react';
import './WeatherApp.css';

const WeatherApp = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentDateTime, setCurrentDateTime] = useState('');

  const API_KEY = '4c44cf6e7c6d5ffb6d184d248cb7a6e7';
  const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

  const fetchWeatherData = async () => {
    if (!location.trim()) {
      setError('Please enter a city/country');
      return;
    }

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

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
      const formattedDateTime = now.toLocaleDateString('en-US', options);
      setCurrentDateTime(formattedDateTime);
    };

    const intervalId = setInterval(updateDateTime, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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
      <div className="date-time">
        <p>{currentDateTime}</p>
      </div>
    </div>
  );
};

export default WeatherApp;
