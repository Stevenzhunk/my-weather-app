import axios from 'axios';
import { useEffect, useState } from 'react';

const FiveHourForecast = ({ city }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    const fetchForecastData = async () => {
      if (city!== ''){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=c7ebf5eaf923589a3e88df398659536a`);
      setForecastData(res.data.list.slice(0, 5));
      }
    };

    fetchForecastData();
  }, [city]);

  return (
    <div className='flex flex-row items-center justify-between text-white my-6'>
      {forecastData.map((data) => (
        
        <div key={data.dt} className='flex flex-col item-center justify-center'>
          <p className='font-light text-sm flex item-center justify-center'>
            {new Date(data.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
            <img 
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} 
            alt={data.weather[0].description} 
            className='w-12 my-1'
            />
          <p className='font-medium justify-center flex'>{Math.round(data.main.temp)}&deg;C</p>
        </div>
      ))}
    </div>
  );
};

export default FiveHourForecast;
