import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

import {UilSun, UilSunset} from "@iconscout/react-unicons"

const SunInfo = ({ city }) => {
  const [sunInfo, setSunInfo] = useState(null);

  useEffect(() => {
    
    const fetchSetSunInfo = async () => { 
      if (city!== ''){
      const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=c7ebf5eaf923589a3e88df398659536a`);
      setSunInfo({
        sunrise: new Date(res.data.sys.sunrise * 1000).toLocaleTimeString(),
        sunset: new Date(res.data.sys.sunset * 1000).toLocaleTimeString(),
        tempMax: res.data.main.temp_max,
        tempMin: res.data.main.temp_min,
      });
      }
    } 
    
    fetchSetSunInfo();      
  }, [city]);

  if (!sunInfo) return null;

  return (
    <div className='flex flex-row items-center justify-center space-x-2 text-white text-sm py-3'>
      <UilSun />
        <p className='font-light'>
          <span className='font-medium ml-1'>Rise: {sunInfo.sunrise}</span>
        </p>
        <p className='font-light'>|</p>
      <UilSunset />
        <p className='font-light'>
          <span className='font-medium ml-1'>Set:: {sunInfo.sunset}</span>
        </p>
      <UilSun />
        <p className='font-light'>
          <span className='font-medium ml-1'>High: {sunInfo.tempMax}°C</span>
        </p>
      <UilSun />
        <p className='font-light'>
          <span className='font-medium ml-1'>Low: {sunInfo.tempMin}°C</span>
        </p>
    </div>
  );
};

export default SunInfo;