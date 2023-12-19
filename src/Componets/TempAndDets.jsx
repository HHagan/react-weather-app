// TempAndDets.jsx
import React from 'react';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { FiSunrise, FiSunset } from 'react-icons/fi';

const getBackgroundColor = (temperature) => {
  if (temperature <= 0) {
    return '#b3e0ff'; // Cold color - Light blue
  } else if (temperature > 0 && temperature <= 20) {
    return '#add8e6'; // Cool color - Light steel blue
  } else if (temperature > 20 && temperature <= 30) {
    return '#ffe4b5'; // Subdued warm color - Moccasin
  } else {
    return '#ffccbc'; // Hot color - Apricot
  }
};

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

function TempAndDets({ days_data, temperatureUnit, contrastColor }) {
  const backgroundColor = getBackgroundColor(days_data.tempmax);

  const convertTemperature = (temp) => {
    return temperatureUnit === 'metric' ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  };

  return (
    <div>
      <div className='flex items-center justify-center py-6 text-xl' style={{ color: contrastColor, fontFamily: 'Arial, sans-serif' }}>
        <p>{days_data.conditions}</p>
      </div>

      <div className='flex flex-row items-center justify-between text-black py-3'>
        <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${days_data.icon}.svg`} alt="" className='w-20' />
        <p className='text-4xl font-bold' style={{ color: contrastColor }}>{convertTemperature(days_data.temp)}°</p>
        <div className='flex flex-col space-y-2'>
          <div className='flex font-light text-sm items-center justify-center'>
            <WiThermometer size={24} className='mr-2' />
            <span>Feels like: <span className='font-medium ml-1'>{convertTemperature(days_data.feelslike)}°</span></span>
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
        <span className='font-light'>High: <span className='font-medium ml-1'>{convertTemperature(days_data.tempmax)}°</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowDown size={20} />
        <span className='font-light'>Low: <span className='font-medium ml-1'>{convertTemperature(days_data.tempmin)}°</span></span>
      </div>
    </div>
  );
}

export default TempAndDets;



