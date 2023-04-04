import React from 'react';
import {
  UilTear, 
  UilWind,
  UilTemperature
} from "@iconscout/react-unicons"


const WeatherInfo = ({ weatherData }) => {
  
  const weather = weatherData.weather[0];
  const temperature = Math.round(weatherData.main.temp);
  const humidity = weatherData.main.humidity;
  const windSpeed = weatherData.wind.speed;
  const namex = weatherData.name;
  const feellike = weatherData.main.feels_like;
  

  return (
    <div className="weather-info">
      <label htmlFor="city" className='flex justify-center items-center text-white text-xl'> {namex} </label>

      <div className='flex flex-row items-center justify-between text-white py-3'>
        <img src={`https://openweathermap.org/img/wn/${weather.icon}.png`} 
             alt={weather.description} 
             className='items-center justify-center w-20'
        />
        <h1 className='text-5xl'>{temperature}°C</h1>
      
        <div className='flex flex-col space-y-2'>
        <div className='flex font-light text-sm items-center justify-center'>
            <UilTemperature size={18} className='mr-1'/>
            Real feel
            <span className='font-medium ml-1'>{feellike}%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilTear size={18} className='mr-1'/>
            Humidity:
            <span className='font-medium ml-1'>{humidity}%</span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <UilWind size={18} className='mr-1'/>
            Wind Speed:
            <span className='font-medium ml-1'>{windSpeed} km/h</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;