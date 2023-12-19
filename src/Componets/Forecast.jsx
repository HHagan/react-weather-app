// Forecast.jsx
import React from 'react';

function Forecast({ title, data, isHourly, temperatureUnit, backgroundColor, contrastColor }) {
  const convertTemperature = (temp) => {
    return temperatureUnit === 'metric' ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  };

  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase' style={{ color: contrastColor }}>{title}</p>
      </div>
      <hr className='mt-3 mb-3' />

      <div className='flex flex-row items-center justify-between text-black'>
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center' style={{ backgroundColor: backgroundColor }}>
            {/* Your forecast info content */}
            <p className='your-forecast-info' style={{ color: contrastColor }}>
              {isHourly ? `${convertTemperature(item.temp)}°` : `${convertTemperature(item.tempmax)}° | ${convertTemperature(item.tempmin)}°`}
            </p>
            <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${item.icon}.svg`} className='w-12 my-1' alt='weather' />
            {item.datetimeEpoch && (
              <p className='font-light text-sm'>
                {isHourly && index === 0 ? 'Now' : isHourly ? new Date(item.datetimeEpoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : new Date(item.datetimeEpoch * 1000).toLocaleDateString('en-US', { weekday: 'short' })}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;




