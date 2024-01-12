// App.js
import React, { useState, useEffect } from 'react';
import TopButtons from './Componets/TopButtons';
import Inputs from './Componets/Inputs';
import TimeAndLocation from './Componets/TimeAndLocation';
import TempAndDets from './Componets/TempAndDets';
import Forecast from './Componets/Forecast';
import { getWeatherData } from './services/weatherService';
import { getContrastColor, getBackgroundColor } from './utils/colorUtils';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const initialInclude = ['hours', 'days', 'alerts', 'current', 'events'];

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
      toast.info("Location Loading...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [isLoading]);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (isLoading || !weatherData || !contrastColor ) {
    return null;
  }

  const backgroundColor = getBackgroundColor(weatherData.days[0].temp);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl shadow-gray-400' style={{ backgroundColor: backgroundColor }}>
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
      <TempAndDets days_data={weatherData.days[0]} temperatureUnit={temperatureUnit} contrastColor={contrastColor} />
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