import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { WiFahrenheit, WiCelsius } from 'react-icons/wi';
import { getWeatherData } from '../services/weatherService';
import { convertToFahrenheit, convertToCelsius } from '../utils/tempUtils';

function Inputs({ temperatureUnit, onTemperatureUnitChange, contrastColor, temperature, setTemperature }) {
  const [searchInput, setSearchInput] = useState('');

  const handleGeolocation = async ({ coords: { latitude, longitude } }) => {
    console.log('current location weather thingy is disabled man');
  };

  const getCurrentLocationWeather = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(handleGeolocation);
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    } catch (error) {
      console.error('Error fetching weather data for current location:', error);
    }
  };

  const handleSearch = async () => {
    try {
      const weatherData = await getWeatherData(searchInput, temperatureUnit);
      console.log('Search result weather data:', weatherData);
    } catch (error) {
      console.error('Error fetching weather data for the search input:', error);
    }
  };

  const handleTemperatureToggle = (newUnit) => {
  console.log('Temperature unit changed to:', newUnit);
  onTemperatureUnitChange(newUnit);

  if (newUnit === 'metric') { // If new unit is metric, convert to celsius
    setTemperature(convertToCelsius(temperatureUnit === 'imperial' ? convertToFahrenheit(temperature) : temperature));
  } else { 
    setTemperature(convertToFahrenheit(temperatureUnit === 'metric' ? convertToCelsius(temperature) : temperature));
  }
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
          onClick={() => handleTemperatureToggle('metric')}
          style={{ color: contrastColor }} // Set font color here
        >
          <WiCelsius size={30} />
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name="imperial"
          className={`text-xl text-white font-light ${temperatureUnit === 'imperial' ? 'text-blue-500' : ''}`}
          onClick={() => handleTemperatureToggle('imperial')}
          style={{ color: contrastColor }} // Set font color here
        >
          <WiFahrenheit size={30} />
        </button>
      </div>
    </div>
  );
}

export default Inputs;
