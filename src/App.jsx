import React, { useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CityButtons from './components/CityButtons';
import WeatherInfo from './components/WeatherInfo';
import SunInfo from './components/SunInfo';
import FiveHourForecast from './components/FiveHourForecast';
import axios from 'axios';
import './App.css';



const apiKey = 'c7ebf5eaf923589a3e88df398659536a';
const App = () => {
  const [city, setCity] = useState('Buenos Aires');
  const [weatherData, setWeatherData] = useState(null);
  const [sunData, setSunData] = useState(null);
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    if (city) {
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
          setWeatherData(response.data);
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`)
        .then(response => {
          setForecastData(response.data.list.filter(item => item.dt_txt.endsWith(':00:00')));
        })
        .catch(error => {
          console.log(error);
        });

      axios.get(`https://api.sunrise-sunset.org/json?lat=37.7749&lng=-122.4194&date=today`)
        .then(response => {
          setSunData(response.data.results);
        })
        .catch(error => {
          console.log(error);
        });
    }
  }, [city]);

  const handleCityClick = (newCity) => {
    setCity(newCity);
  };

  const handleSearch = (searchTerm) => {
    setCity(searchTerm);
  };

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      
      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <CityButtons handleCityClick={handleCityClick} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <SearchBar handleSearch={handleSearch} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          {weatherData && sunData &&
            <WeatherInfo weatherData={weatherData} />
          }
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
          <SunInfo city={city} />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6 offset-md-3">
            <FiveHourForecast city={city}/>
        </div>
      </div>
      
      
    </div>
  );
};

export default App;