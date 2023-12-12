// Inputs.jsx
import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { WiFahrenheit, WiCelsius } from 'react-icons/wi';
import { getWeatherData } from '../services/weatherService';

function Inputs() {
  const [searchInput, setSearchInput] = useState('');
  const [temperatureUnit, setTemperatureUnit] = useState('metric'); // Default to Celsius

  const getCurrentLocationWeather = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
          const { latitude, longitude } = position.coords;
          //const weatherData = await getWeatherData(`${latitude},${longitude}`, temperatureUnit);
          //console.log('Current location weather data:', weatherData);
          console.log('current location weather thingy is disabled man')
          // Handle the weather data as needed, e.g., update state in App.js
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error fetching weather data for current location:', error);
    }
  };

  const handleSearch = async () => {
    // Implement the logic to search for the provided city using the searchInput
    try {
      const weatherData = await getWeatherData(searchInput, temperatureUnit);
      console.log('Search result weather data:', weatherData);
      // Handle the weather data as needed, e.g., update state in App.js
    } catch (error) {
      console.error('Error fetching weather data for the search input:', error);
    }
  };

  const handleUnitToggle = (unit) => {
    setTemperatureUnit(unit);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className='flex flex-row justify-center my-6'>
      <div className="flex items-center max-w-md w-full bg-gray-700 rounded-full p-2 hover:bg-gray-600 focus:outline-none">
        <button
          className='flex items-center justify-center w-12 h-12 text-white rounded-full focus:outline-none'
          onClick={getCurrentLocationWeather}
        >
          <CiLocationOn size={24} />
        </button>
        <input
          type="text"
          placeholder="Search for city"
          className='flex-grow ml-2 bg-transparent focus:outline-none text-white'
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          className='w-20 h-12 ml-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none'
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-end'>
        <button
          name="metric"
          className={`text-xl text-white font-light ${temperatureUnit === 'metric' ? 'text-blue-500' : ''}`}
          onClick={() => handleUnitToggle('metric')}
        >
          <WiCelsius size={30} />
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name="imperial"
          className={`text-xl text-white font-light ${temperatureUnit === 'imperial' ? 'text-blue-500' : ''}`}
          onClick={() => handleUnitToggle('imperial')}
        >
          <WiFahrenheit size={30} />
        </button>
      </div>
    </div>
  );
}

export default Inputs;

