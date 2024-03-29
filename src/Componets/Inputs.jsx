import React, { useState } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { WiFahrenheit, WiCelsius } from 'react-icons/wi';
import { convertToFahrenheit, convertToCelsius } from '../utils/tempUtils';
import handleGeolocation  from '../services/geoLocation';

/**
 * Inputs is a functional component that provides inputs for setting the location and temperature unit.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Function} props.setLocation - The function to call when the location changes.
 * @param {string} props.temperatureUnit - The current temperature unit ('metric' or 'imperial').
 * @param {Function} props.onTemperatureUnitChange - The function to call when the temperature unit changes.
 * @param {string} props.contrastColor - The contrast color to use for the inputs.
 * @param {number} props.temperature - The current temperature.
 * @param {Function} props.setTemperature - The function to call when the temperature changes.
 * @returns {JSX.Element} The rendered component.
 */
function Inputs({ setLocation, temperatureUnit, onTemperatureUnitChange, contrastColor, temperature, setTemperature }) {
  const [searchInput, setSearchInput] = useState('');


  const handleButtonClick = (city) => {
    console.log('Location changed to:', city);
    setLocation(city);
  };


  const getCurrentLocation = async () => {
    try {
      const city = await handleGeolocation();
      setLocation(city);
    } catch (error) {
      console.error('Error getting current location:', error);
    }
  };

/**
   * handleTemperatureToggle is a function that updates the temperature unit and the temperature.
   *
   * @param {string} newUnit - The new temperature unit ('metric' or 'imperial').
   */
  const handleTemperatureToggle = (newUnit) => {
    console.log('Temperature unit changed to:', newUnit);
    onTemperatureUnitChange(newUnit);

    if (newUnit === 'metric') {
      setTemperature(
        convertToCelsius(temperatureUnit === 'imperial' ? convertToFahrenheit(temperature) : temperature)
      );
    } else {
      setTemperature(
        convertToFahrenheit(temperatureUnit === 'metric' ? convertToCelsius(temperature) : temperature)
      );
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSearch = () => {
    console.log('Search initiated for:', searchInput);
    // Perform the search action here, e.g., setLocation(searchInput);
    handleButtonClick(searchInput);
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <div id='SearchBox' className='flex flex-row justify-center my-6'>
      <div className="flex items-center max-w-md w-full bg-gray-700 rounded-full p-2 hover:bg-gray-600 focus:outline-none">
        <button
          className='flex items-center justify-center w-12 h-12 text-white rounded-full focus:outline-none'
          onClick={getCurrentLocation}>
          
          <CiLocationOn size={24} />
        </button>
        <input
          type="text"
          placeholder="Search for city"
          className='flex-grow ml-2 bg-transparent focus:outline-none text-white'
          value={searchInput}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button
          className='w-20 h-12 ml-2 text-white bg-gray-700 rounded-full hover:bg-gray-600 focus:outline-none'
          onClick={() => handleButtonClick(searchInput)}
        >
          Search
        </button>
      </div>
      <div className='flex flex-row w-1/4 items-center justify-end'>
        <button
          name="metric"
          className={`text-xl text-white font-light ${temperatureUnit === 'metric' ? 'text-blue-500' : ''}`}
          onClick={() => handleTemperatureToggle('metric')}
          style={{ color: contrastColor }}
        >
          <WiCelsius size={30} />
        </button>
        <p className='text-xl text-white mx-1'>|</p>
        <button
          name="imperial"
          className={`text-xl text-white font-light ${temperatureUnit === 'imperial' ? 'text-blue-500' : ''}`}
          onClick={() => handleTemperatureToggle('imperial')}
          style={{ color: contrastColor }}
        >
          <WiFahrenheit size={30} />
        </button>
      </div>
    </div>
  );
}

export default Inputs;
