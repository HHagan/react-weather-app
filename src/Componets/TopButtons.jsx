import React from 'react';
import { getContrastColor, darkenColor } from '../utils';

function TopButtons({ backgroundColor }) {
  // Calculate contrast color based on background color
  const buttonColor = getContrastColor(backgroundColor);

  // Darken the background color by a factor (adjust as needed)
  const darkenedBackgroundColor = darkenColor(backgroundColor, 0.8);

  // Array of cities with their ids and titles
  const cities = [
    {
      id: 1,
      title: 'London',
    },
    {
      id: 2,
      title: 'Sydney',
    },
    {
      id: 3,
      title: 'Tokyo',
    },
    {
      id: 4,
      title: 'Toronto',
    },
    {
      id: 5,
      title: 'Paris',
    },
  ];

  return (
    <div className='flex items-center justify-around my-6'>
      {/* Mapping through the cities array to render buttons */}
      {cities.map((city) => (
        <button
          key={city.id}
          className='px-4 py-2 mx-2 text-black rounded-full focus:outline-none' // Change text color
          style={{ backgroundColor: darkenedBackgroundColor, color: buttonColor, opacity: 0.8, fontWeight: 'bold' }} // Adjust styles
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;

