// TopButtons.jsx
import React from 'react';
import { getContrastColor, darkenColor } from '../utils/colorUtils';

const cities = [
  { id: 1, title: 'Amarillo' },
  { id: 2, title: 'London' },
  { id: 3, title: 'Chicago' }, 
  { id: 4, title: 'Toronto' },
  { id: 5, title: 'Whitefish' },
];

function TopButtons({ backgroundColor, onLocationChange }) {
  const buttonColor = getContrastColor(backgroundColor);
  const darkenedBackgroundColor = darkenColor(backgroundColor, 0.8);

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => onLocationChange(title)}
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