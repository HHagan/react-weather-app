import React from 'react';

function TimeAndLocation({location_data}) {
  console.log(location_data)
  
  // Convert the epoch time to a Date object
  const date = new Date(location_data.days[0].datetimeEpoch * 1000);

  // Get the day of the week, day, month, and year
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const formattedDate = date.toLocaleDateString(undefined, options);

  return (
    <div>
      <div className='flex items-center justify-center my-6'>
        <div className='flex flex-col items-center justify-center'>
          <p className='text-1xl text-white font-light'>{formattedDate}</p>
        </div>
      </div>

      <div className='flex items-center justify-center my-3'>
        <p className='text-white text-3xl font-medium'>{location_data.address}</p>
      </div>
    </div>
  );
}

export default TimeAndLocation;