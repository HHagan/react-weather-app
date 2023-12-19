// TimeAndLocation.jsx
import React from 'react';

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

// DateDisplay function for displaying the date
function DateDisplay({ datetimeEpoch, backgroundColor }) {
  // Log datetimeEpoch for debugging
  console.log('datetimeEpoch:', datetimeEpoch);

  // Check if datetimeEpoch is a valid number
  const isValidDatetimeEpoch = !isNaN(datetimeEpoch) && datetimeEpoch > 0;

  // Format the date using toLocaleString if datetimeEpoch is a valid number
  const formattedDate = isValidDatetimeEpoch
    ? new Date(datetimeEpoch*1000).toLocaleString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      })
    : 'Invalid Date';

  // Log the formatted date for debugging
  console.log('formattedDate:', formattedDate);

  // Calculate contrast color based on the provided background color
  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div className='flex items-center justify-center my-6'>
      <div className='flex flex-col items-center justify-center'>
        <p className='text-1xl font-light' style={{ color: contrastColor }}>{formattedDate}</p>
      </div>
    </div>
  );
}

// LocationDisplay function for displaying the location
function LocationDisplay({ address, backgroundColor }) {
  // Log address for debugging
  console.log('address:', address);

  // Calculate contrast color based on the provided background color
  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div className='flex items-center justify-center my-3'>
      <p className='text-3xl font-medium' style={{ color: contrastColor }}>{address}</p>
    </div>
  );
}

// Combined TimeAndLocation component
function TimeAndLocation({ location_data, backgroundColor }) {
  console.log('location_data:', location_data);
  const { datetimeEpoch, address } = location_data;

  return (
    <div>
      {/* DateDisplay component */}
      <DateDisplay datetimeEpoch={location_data.days[0].datetimeEpoch} backgroundColor={backgroundColor} />

      {/* LocationDisplay component */}
      <LocationDisplay address={address} backgroundColor={backgroundColor} />
    </div>
  );
}

export default TimeAndLocation;



