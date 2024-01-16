import React, { useState } from 'react';
import { getContrastColor, darkenColor } from '../utils/colorUtils';

const cities = [
  { id: 1, title: 'Amarillo' },
  { id: 2, title: 'London' },
  { id: 3, title: 'Chicago' },
  { id: 4, title: 'Toronto' },
  { id: 5, title: 'Whitefish' },
];

/**
 * TopButtons is a functional component that displays a list of buttons for different cities.
 * When a button is clicked, it calls the onLocationChange prop with the title of the city.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {string} props.backgroundColor - The background color to use for calculating the contrast color.
 * @param {Function} props.onLocationChange - The function to call when a button is clicked.
 * @returns {JSX.Element} The rendered component.
 */
const TopButtons = ({ backgroundColor, onLocationChange }) => {
  const buttonColor = getContrastColor(backgroundColor);
  const darkenedBackgroundColor = darkenColor(backgroundColor, 0.8);

  const [activeCity, setActiveCity] = useState(null);

  const handleButtonClick = (title) => {
    onLocationChange(title);
    setActiveCity(title);
  };

  return (
    <div className='flex items-center justify-around my-6'>
      {cities.map(({ id, title }) => (
        <button
          key={id}
          onClick={() => handleButtonClick(title)}
          className={`px-4 py-2 mx-2 text-black rounded-full focus:outline-none ${
            activeCity === title ? 'bg-blue-500' : ''
          }`}
          style={{
            backgroundColor: darkenedBackgroundColor,
            color: buttonColor,
            opacity: 0.8,
            fontWeight: 'bold',
          }}
        >
          {title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
