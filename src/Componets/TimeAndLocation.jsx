import React, { useState, useEffect } from 'react';
import { getContrastColor } from '../utils';

// DateDisplay function for displaying the date
function DateDisplay({ timezone, backgroundColor }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update current date and time every second
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures the effect runs only once

  const formattedDate = currentDateTime.toLocaleString('en-US', {
    timeZone: timezone,  // Use the provided timezone
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div className='flex items-center justify-center my-6'>
      <p className='text-1xl font-light' style={{ color: contrastColor }}>{formattedDate}</p>
    </div>
  );
}

// TimeAndLocation function
function TimeAndLocation({ location_data: { address, timezone }, backgroundColor }) {
  return (
    <div className='flex flex-col items-center justify-center'>
      <DateDisplay timezone={timezone} backgroundColor={backgroundColor} />
      <p className='text-1xl font-light' style={{ color: getContrastColor(backgroundColor) }}>{address}</p>
    </div>
  );
}

export default TimeAndLocation;






