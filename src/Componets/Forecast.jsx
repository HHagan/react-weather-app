import React from 'react';

function Forecast({ title, data, isHourly = false }) {
  return (
    <div>
      <div className='flex item-center justify-start mt-6'>
        <p className='text-white font-medium uppercase'>{title}</p>
      </div>
      <hr className='mt-3 mb-3' />

      <div className='flex flex-row items-center justify-between text-white'>
        {data.slice(0, 5).map((item, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <p className='font-light text-sm'>
              {isHourly 
                ? `${item.temp}°C` 
                : `${item.tempmax}°C | ${item.tempmin}°C`}
            </p>
            <img src={`${process.env.PUBLIC_URL}/imgs/1st Set - Color/${item.icon}.svg`} className='w-12 my-1' alt='weather' />
            <p className='font-light text-sm'>
              {isHourly
                ? index === 0
                  ? 'Now'
                  : new Date(item.datetimeEpoch * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                  : new Date(item.datetimeEpoch * 1000).toLocaleDateString(undefined, { weekday: 'long' })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forecast;
