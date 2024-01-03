// TopButtons.jsx
import React from 'react';
import { getContrastColor, darkenColor } from '../utils/colorUtils';

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

function TopButtons({ backgroundColor, onLocationChange }) {
  const buttonColor = getContrastColor(backgroundColor);
  const darkenedBackgroundColor = darkenColor(backgroundColor, 0.8);

  const handleButtonClick = (city) => {
    onLocationChange(city);
  };

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => handleButtonClick(title)}
          className='px-4 py-2 mx-2 text-black rounded-full focus:outline-none'
          style={{ backgroundColor: darkenedBackgroundColor, color: buttonColor, opacity: 0.8, fontWeight: 'bold' }}
        >
          {title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;


