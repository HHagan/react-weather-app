import React from 'react';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { convertTemperature, getBackgroundColor, getContrastColor } from '../utils';

const DetailItem = ({ Icon, label, value }) => (
  <div className='flex font-light text-sm items-center justify-center'>
    <Icon size={24} className='mr-2' />
    <span>{label}: <span className='font-medium ml-1'>{value}</span></span>
  </div>
);

function TempAndDets({ days_data: { temp, tempmax, tempmin, feelslike, humidity, windspeed, sunrise, sunset, icon }, temperatureUnit }) {
  const backgroundColor = getBackgroundColor(tempmax);
  const contrastColor = getContrastColor(backgroundColor);
  const convertedTemperatureMax = convertTemperature(tempmax, temperatureUnit);
  const convertedTemperatureMin = convertTemperature(tempmin, temperatureUnit);

  return (
    <div style={{ backgroundColor: backgroundColor, color: contrastColor }}>
      <div className='flex flex-row items-center justify-between text-black py-3'>
        <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${icon}.svg`} alt="" className='w-20' />
        <p className='text-4xl font-bold' style={{ color: contrastColor }}>{convertTemperature(temp, temperatureUnit)}°</p>
        <div className='flex flex-col space-y-2'>
          <DetailItem Icon={WiThermometer} label="Feels like" value={`${convertTemperature(feelslike, temperatureUnit)}°`} />
          <DetailItem Icon={WiHumidity} label="Humidity" value={`${Math.floor(humidity)}%`} />
          <DetailItem Icon={WiStrongWind} label="Wind" value={`${windspeed} km/h`} />
        </div>
      </div>
   
      <div className='flex flex-row items-center space-x-2 flex-nowrap text-black text-sm py-3'>
        <FiSunrise size={20} />
        <span className='font-light'>Rise: <span className='font-medium ml-1'>{sunrise}</span></span>
        <span className='mx-2'>|</span>
        <FiSunset size={20} />
        <span className='font-light'>Set: <span className='font-medium ml-1'>{sunset}</span></span>
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