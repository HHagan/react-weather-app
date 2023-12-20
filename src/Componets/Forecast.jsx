// Forecast.jsx
import React from 'react';
import { convertTemperature, formatHour, getContrastColor, getAdjustedDateTime } from '../utils';

const Forecast = ({ data, title, isHourly, temperatureUnit, backgroundColor }) => {
  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase' style={{ color: contrastColor }}>{title}</p>
      </div>
      <hr className='mt-3 mb-3' />
   
      <div className='flex flex-row items-center justify-between text-black'>
        {data.slice(0, 5).map((item, index) => {
          const adjustedDateTime = getAdjustedDateTime(item.datetimeEpoch, 0);
          const forecastHour = adjustedDateTime.getHours();
          const formattedHour = formatHour(forecastHour);
          const temperature = convertTemperature(item.temp, temperatureUnit);
          const temp_max = convertTemperature(item.tempmax, temperatureUnit);
          const temp_min = convertTemperature(item.tempmin, temperatureUnit);

          return (
            <div key={index} className='forecast-item flex flex-col items-center justify-center' style={{ backgroundColor: backgroundColor, color: contrastColor }}>
              <p className='forecast-hour'>{isHourly ? `${temperature}°` : `${temp_max}° | ${temp_min}°`}</p>
              <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${item.icon}.svg`} className='w-12 my-1' alt='weather' />
              {item.datetimeEpoch && (
                <p className='font-light text-sm'>
                  {isHourly && index === 0 ? 'Now' : isHourly ? formattedHour : new Date(item.datetimeEpoch * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
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










