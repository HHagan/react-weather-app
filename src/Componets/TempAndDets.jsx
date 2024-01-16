// Temp and Details Component
import React from 'react';
import { WiHumidity, WiThermometer, WiStrongWind } from 'react-icons/wi';
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6';
import { FiSunrise, FiSunset } from 'react-icons/fi';
import { getContrastColor } from '../utils/colorUtils';

/**
 * DetailItem is a functional component that displays a label and value with an icon.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {React.Component} props.Icon - The icon to display.
 * @param {string} props.label - The label to display.
 * @param {string|number} props.value - The value to display.
 * @returns {JSX.Element} The rendered component.
 */
const DetailItem = ({ Icon, label, value }) => (
  <div className='flex font-light text-sm items-center justify-center'>
    <Icon size={24} className='mr-2' />
    <span>{label}: <span className='font-medium ml-1'>{value}</span></span>
  </div>
);

/**
 * TempAndDets is a functional component that displays temperature and other details.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.days_data - The data for the day.
 * @param {number} props.days_data.temp - The current temperature.
 * @param {number} props.days_data.tempmax - The maximum temperature.
 * @param {number} props.days_data.tempmin - The minimum temperature.
 * @param {number} props.days_data.feelslike - The "feels like" temperature.
 * @param {number} props.days_data.humidity - The humidity percentage.
 * @param {number} props.days_data.windspeed - The wind speed in km/h.
 * @param {string} props.days_data.sunrise - The sunrise time.
 * @param {string} props.days_data.sunset - The sunset time.
 * @param {string} props.days_data.icon - The name of the icon to display.
 * @param {string} props.backgroundColor - The background color to use for calculating the contrast color.
 * @returns {JSX.Element} The rendered component.
 */
function TempAndDets({ days_data: { temp, tempmax, tempmin, feelslike, humidity, windspeed, sunrise, sunset, icon }, backgroundColor }) {
  const contrastColor = getContrastColor(backgroundColor);

  const details = [
    { Icon: WiThermometer, label: "Feels like", value: `${Math.round(feelslike)}°` },
    { Icon: WiHumidity, label: "Humidity", value: `${Math.floor(humidity)}%` },
    { Icon: WiStrongWind, label: "Wind", value: `${windspeed} km/h` },
  ];

  return (
    <div style={{ backgroundColor: backgroundColor, color: contrastColor }}>
      <div className='flex flex-row items-center justify-between text-black py-3'>
        <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${icon}.svg`} alt="" className='w-20' />
        <p className='text-4xl font-bold'>{Math.round(temp)}°</p>
        <div className='flex flex-col space-y-2'>
          {details.map((detail, index) => <DetailItem key={index} {...detail} />)}
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
        <span className='font-light'>High: <span className='font-medium ml-1'>{Math.round(tempmax)}°</span></span>
        <span className='mx-2'>|</span>
        <FaTemperatureArrowDown size={20} />
        <span className='font-light'>Low: <span className='font-medium ml-1'>{Math.round(tempmin)}°</span></span>
      </div>
    </div>
  );
}

export default TempAndDets;