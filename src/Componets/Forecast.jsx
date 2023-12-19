// Forecast.jsx
import React from 'react';
//import { convertTemperature, formatHour, getContrastColor, getAdjustedDateTime } from '.s/utils';
import { convertTemperature, formatHour, getContrastColor, getAdjustedDateTime } from '../utils';


const Forecast = ({ data, title, isHourly, temperatureUnit, backgroundColor }) => {
  const contrastColor = getContrastColor(backgroundColor);
  console.log(data);

  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase' style={{ color: contrastColor }}>{title}</p>
      </div>
      <hr className='mt-3 mb-3' />
   
      <h2 className='forecast-title' style={{ color: contrastColor }}>
        
      </h2>
      <div className='flex flex-row items-center justify-between text-black'>
        {data.slice(0, 5).map((item, index) => {
          const adjustedDateTime = getAdjustedDateTime(item.datetimeEpoch, 0); // 0 = timezone offset from weather data tzoffset
          console.log(adjustedDateTime);
          const forecastHour = adjustedDateTime.getHours();
          console.log(forecastHour);
          const formattedHour = formatHour(forecastHour);
          console.log(formattedHour);
          const temperature = convertTemperature(item.temp, temperatureUnit);
          console.log(temperature);
          

          return (
            <div key={index} className='forecast-item' style={{ backgroundColor: backgroundColor, color: contrastColor }}>
              <p className='forecast-hour'>{isHourly ? `${convertTemperature(item.temp)}°` : `${convertTemperature(item.tempmax)}° | ${convertTemperature(item.tempmin)}°`}</p>
              <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${item.icon}.svg`} className='w-12 my-1' alt='weather' />
              {item.datetimeEpoch && (
              <p className='font-light text-sm'>
                {isHourly && index === 0 ? 'Now' : isHourly ? new Date(item.datetimeEpoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date(item.datetimeEpoch * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
            )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Forecast;









