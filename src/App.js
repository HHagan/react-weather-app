// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './Componets/TopButtons';
import Inputs from './Componets/Inputs';
import TimeAndLocation from './Componets/TimeAndLocation';
import TempAndDets from './Componets/TempAndDets';
import Forecast from './Componets/Forecast';
import axios from 'axios';

const getBackgroundColor = (temperature) => {
  if (temperature <= 0) {
    return '#b3e0ff'; // Cold color - Light blue
  } else if (temperature > 0 && temperature <= 20) {
    return '#add8e6'; // Cool color - Light steel blue
  } else if (temperature > 20 && temperature <= 30) {
    return '#ffe4b5'; // Subdued warm color - Moccasin
  } else {
    return '#ffccbc'; // Hot color - Apricot
  }
};

function getContrastColor(hexColor) {
  const r = parseInt(hexColor.slice(1, 3), 16);
  const g = parseInt(hexColor.slice(3, 5), 16);
  const b = parseInt(hexColor.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [temperatureUnit, setTemperatureUnit] = useState('metric'); // Default to Celsius

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://7c4aeacf-8e77-44c7-9942-9cd6dcb4e231.mock.pstmn.io/helloName'
        );
        console.log('API Response:', response.data);
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError(`Error fetching weather data: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (!weatherData) {
    console.log('weatherData', weatherData);
    return <p>Loading...</p>;
  } else {
    console.log(weatherData.locations[0].days[0]);
  }

  const handleTemperatureUnitChange = (unit) => {
    setTemperatureUnit(unit);
  };

  const backgroundColor = getBackgroundColor(weatherData.locations[0].days[0].temp);
  const contrastColor = getContrastColor(backgroundColor);

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 h-fit shadow-xl shadow-gray-400' style={{ backgroundColor: backgroundColor }}>
      <TopButtons backgroundColor={backgroundColor} contrastColor={contrastColor} />
      <Inputs temperatureUnit={temperatureUnit} onTemperatureUnitChange={handleTemperatureUnitChange} />

      <>
        
        <TimeAndLocation location_data={weatherData.locations[0]} backgroundColor={backgroundColor} />
        
        <TempAndDets days_data={weatherData.locations[0].days[0]} temperatureUnit={temperatureUnit} contrastColor={contrastColor} />
        <Forecast
          title='Hourly Forecast'
          data={weatherData.locations[0].days[0].hours}
          isHourly={true}
          temperatureUnit={temperatureUnit}
          backgroundColor={backgroundColor}
          contrastColor={contrastColor}
        />
        <Forecast
          title='Daily Forecast'
          data={weatherData.locations[0].days.slice(1, 6)}
          isHourly={false}
          temperatureUnit={temperatureUnit}
          backgroundColor={backgroundColor}
          contrastColor={contrastColor}
        />
      </>
    </div>
  );
}

export default App;



