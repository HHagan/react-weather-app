import React from 'react';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { convertTemperature, getBackgroundColor, getContrastColor } from '../utils';

function TempAndDets({ days_data, temperatureUnit }) {
  const backgroundColor = getBackgroundColor(days_data.tempmax);
  const contrastColor = getContrastColor(backgroundColor);
  const convertedTemperatureMax = convertTemperature(days_data.tempmax, temperatureUnit);
  const convertedTemperatureMin = convertTemperature(days_data.tempmin, temperatureUnit);

  return (
    <div style={{ backgroundColor: backgroundColor, color: contrastColor }}>
       <div className='flex flex-row items-center justify-between text-black py-3'>
        <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${days_data.icon}.svg`} alt="" className='w-20' />
        <p className='text-4xl font-bold' style={{ color: contrastColor }}>{convertTemperature(days_data.temp, temperatureUnit)}°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiThermometer size={24} className='mr-2' />
            <span>Feels like: <span className='font-medium ml-1'>{convertTemperature(days_data.feelslike, temperatureUnit)}°</span></span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiHumidity size={24} className='mr-2' />
            <span>Humidity: <span className='font-medium ml-1'>{Math.floor(days_data.humidity)}%</span></span>
          </div>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiStrongWind size={24} className='mr-2' />
            <span>Wind: <span className='font-medium ml-1'>{days_data.windspeed} km/h</span></span>
          </div>
        </div>
      </div>
   
      <div className='flex flex-row items-center space-x-2 flex-nowrap text-black text-sm py-3'>
        <FiSunrise size={20} />
        <span className='font-light'>Rise: <span className='font-medium ml-1'>{days_data.sunrise}</span></span>
        <span className='mx-2'>|</span>
        <FiSunset size={20} />
        <span className='font-light'>Set: <span className='font-medium ml-1'>{days_data.sunset}</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowUp size={20} />
        <span className='font-light'>High: <span className='font-medium ml-1'>{convertedTemperatureMax}°</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowDown size={20} />
        <span className='font-light'>Low: <span className='font-medium ml-1'>{convertedTemperatureMin}°</span></span>
      </div>
    </div>
  );
}

export default TempAndDets;



