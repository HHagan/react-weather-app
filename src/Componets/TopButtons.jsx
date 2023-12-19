// TopButtons.jsx
import React from 'react';

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

function darkenColor(hexColor, factor) {
  // Convert hex color to RGB
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);

  // Darken the color by a factor
  const darkenedR = Math.round(r * factor);
  const darkenedG = Math.round(g * factor);
  const darkenedB = Math.round(b * factor);

  // Convert back to hex
  const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;

  return darkenedHex;
}

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


