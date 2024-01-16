import React, { useState, useEffect } from 'react';
import { getContrastColor } from '../utils';

/**
 * DateDisplay is a functional component that displays the current date and time.
 * It updates every second.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.timezone - The timezone to use for displaying the date and time.
 * @param {string} props.backgroundColor - The background color to use for calculating the contrast color.
 * @returns {JSX.Element} The rendered component.
 */
function DateDisplay({ timezone, backgroundColor }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []); 

  const formattedDate = currentDateTime.toLocaleString('en-US', {
    timeZone: timezone,
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
      <p className='text-1xl font-bold' style={{ color: contrastColor }}>{formattedDate}</p>
    </div>
  );
}

/**
 * TimeAndLocation is a functional component that displays the current date, time, and location.
 * It updates the location whenever the location_data prop changes.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Object} props.location_data - The data about the current location.
 * @param {string} props.location_data.resolvedAddress - The resolved address of the current location.
 * @param {string} props.location_data.timezone - The timezone of the current location.
 * @param {string} props.backgroundColor - The background color to use for calculating the contrast color.
 * @returns {JSX.Element|null} The rendered component, or null if location_data or resolvedAddress is null or undefined.
 */
function TimeAndLocation({ location_data, backgroundColor }) {
  const defaultLocation = 'Tulsa, OK';
  const [currentLocation, setCurrentLocation] = useState(defaultLocation);

  useEffect(() => {
    // If location_data is available, update the current location
    if (location_data?.resolvedAddress) {
      setCurrentLocation(location_data.resolvedAddress);
    }
  }, [location_data]);

  if (!location_data?.resolvedAddress) {
    return null; // Handle the case where location_data or resolvedAddress is null or undefined
  }

  return (
    <div className='flex flex-col items-center justify-center'>
      <DateDisplay timezone={location_data.timezone} backgroundColor={backgroundColor} />
      <p className='text-1xl font-bold' style={{ color: getContrastColor(backgroundColor) }}>{currentLocation}</p>
    </div>
  );
}

export default TimeAndLocation;