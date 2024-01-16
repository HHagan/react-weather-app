// App.js is the main component of the application. It is responsible for fetching the weather data and passing it down to the other components.
import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopButtons from './Componets/TopButtons';
import Inputs from './Componets/Inputs';
import TimeAndLocation from './Componets/TimeAndLocation';
import TempAndDets from './Componets/TempAndDets';
import Forecast from './Componets/Forecast';
import { getWeatherData } from './services/weatherService';
import { getContrastColor, getBackgroundColor } from './utils/colorUtils';

import './App.css';

const initialInclude = ['hours', 'days', 'alerts', 'current', 'events'];

/**
 * App.js is the main component of the application. It is responsible for fetching the weather data and passing it down to the other components.
 * It uses the useState and useEffect hooks from React to manage state and side effects.
 * It also uses the toast and ToastContainer components from react-toastify to display notifications.
 */

/**
 * showLoadingToast is a function that displays a loading toast notification.
 */

function showLoadingToast() {
  toast.info('Location Loading...', {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
} 
/**
 * App is a functional component that manages the state of the application and renders the UI.
 * It uses several pieces of state: weatherData, error, temperatureUnit, contrastColor, isLoading, location, and temperature.
 * It fetches weather data when the location or temperatureUnit state changes.
 * It updates the contrastColor state when the weatherData state changes.
 * It displays a loading toast when the isLoading state is true.
 * It renders a different UI depending on the state of the application.
 */
function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('metric');
  const [contrastColor, setContrastColor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [location, setLocation] = useState('Tulsa, OK');
  const [temperature, setTemperature] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const tempUnit = temperatureUnit === 'imperial' ? 'us' : 'metric';
        const response = await getWeatherData(location, tempUnit, initialInclude);
        setWeatherData(response);
      } catch (error) {
        setError(`Error fetching weather data: ${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [location, temperatureUnit]);

  useEffect(() => {
    if (weatherData) {
      const backgroundColor = getBackgroundColor(weatherData.days[0].temp);
      const newContrastColor = getContrastColor(backgroundColor);
      if (newContrastColor !== contrastColor) {
        setContrastColor(newContrastColor);
      }
    }
  }, [weatherData, contrastColor]);

  useEffect(() => {
    if (isLoading) {
      showLoadingToast();
    }
  }, [isLoading]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading || !weatherData || !contrastColor) {
    return null;
  }

  const backgroundColor = getBackgroundColor(weatherData.days[0].temp, temperatureUnit);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl shadow-gray-400' style={{ backgroundColor }}>
      <ToastContainer />
      <TopButtons backgroundColor={backgroundColor} contrastColor={contrastColor} onLocationChange={setLocation} />
      <Inputs 
        setLocation={setLocation}
        temperatureUnit={temperatureUnit} 
        onTemperatureUnitChange={setTemperatureUnit} 
        contrastColor={contrastColor} 
        temperature={temperature}
        setTemperature={setTemperature} />
      <TimeAndLocation location_data={weatherData} backgroundColor={backgroundColor} />
      <TempAndDets days_data={weatherData.days[0]} backgroundColor={backgroundColor} contrastColor={contrastColor} />
      <Forecast
        title='Hourly Forecast'
        data={weatherData.days[0].hours}
        isHourly={true}
        temperatureUnit={temperatureUnit}
        backgroundColor={backgroundColor}
        contrastColor={contrastColor}
      />
      <Forecast
        title='Daily Forecast'
        data={weatherData.days.slice(1, 6)}
        isHourly={false}
        temperatureUnit={temperatureUnit}
        backgroundColor={backgroundColor}
        contrastColor={contrastColor}
      />
    </div>
  );
}

export default App;

