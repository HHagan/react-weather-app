// TimeAndLocation.jsx
import React from 'react';

function TimeAndLocation({ location_data }) {
  const { days } = location_data;
  const { datetimeEpoch, address } = days[0];
  const date = new Date(datetimeEpoch * 1000);
  const formattedDate = date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-1xl text-white font-light'>{formattedDate}</p>
        </div>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{address}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;
