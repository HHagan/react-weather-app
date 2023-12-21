//forcast component 
import React from 'react';
import { convertTemperature, formatHour, getContrastColor, getAdjustedDateTime } from '../utils';

const ForecastItem = ({ item, isHourly, temperatureUnit, backgroundColor, contrastColor, index }) => {
  const { datetimeEpoch, temp, tempmax, tempmin, icon } = item;
  const adjustedDateTime = getAdjustedDateTime(datetimeEpoch, 0);
  const forecastHour = adjustedDateTime.getHours();
  const formattedHour = formatHour(forecastHour);
  const temperature = convertTemperature(temp, temperatureUnit);
  const temp_max = convertTemperature(tempmax, temperatureUnit);
  const temp_min = convertTemperature(tempmin, temperatureUnit);

  return (
    <div className='forecast-item flex flex-col items-center justify-center' style={{ backgroundColor, color: contrastColor }}>
      <p className='forecast-hour'>{isHourly ? `${temperature}°` : `${temp_max}° | ${temp_min}°`}</p>
      <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${icon}.svg`} className='w-12 my-1' alt='weather' />
      {datetimeEpoch && (
        <p className='font-light text-sm'>
          {isHourly && index === 0 ? 'Now' : isHourly ? formattedHour : new Date(datetimeEpoch * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
        </p>
      )}
    </div>
  );
};

const Forecast = ({ data, title, isHourly, temperatureUnit, backgroundColor }) => {
  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase' style={{ color: contrastColor }}>{title}</p>
      </div>
      <hr className='mt-3 mb-3' />
   
      <div className='flex flex-row items-center justify-between text-black'>
        {data.slice(0, 5).map((item, index) => (
          <ForecastItem key={index} item={item} isHourly={isHourly} temperatureUnit={temperatureUnit} backgroundColor={backgroundColor} contrastColor={contrastColor} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;










