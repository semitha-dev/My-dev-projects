import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState<any>(null);
  const [err, setErr] = useState('');

  const getWeather = async () => {
    try {
      // Log the city to check if it's passed correctly
      console.log("City entered:", city);

      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee07e4702609f640dc0136bb16fb1d2e&units=metric`
      );

      console.log("API Response:", response);

      setWeatherData(response.data);
      setErr('');  
    } catch (error) {
      console.error("Error fetching the weather data:", error);  // Log the error for debugging
      setErr('City Not Found');
      setWeatherData(null);
    }
  };

  return (
    <div id="main">
      <div className="head">
        <h1 id="headTitle">Walter Weather Forecast</h1>
      </div>

      <div id="base">
        <div className="searchArea">
          <h2 id="b_topic1">Enter your city</h2>
          <input
            id="inputCityName"
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="city name"
          />
          <button onClick={getWeather} id="searchBtn">Submit</button>
        </div>

        {/* Display weather data */}
        {weatherData && (
          <div id="weatherDetailArea">
            <h3>{weatherData.name}</h3>
            <h4>Temperature: {weatherData.main.temp}°C</h4>
            <h4>Clouds: {weatherData.clouds.all}%</h4>
          </div>
        )}

        {/* Display error if city not found */}
        {err && <h3 style={{ color: 'red' }}>{err}</h3>}
      </div>

      <div id="end">
        <p>All rights reserved @2023</p>
      </div>
    </div>
  );
}

export default App;
