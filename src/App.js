// App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import TopButtons from './Componets/TopButtons';
import Inputs from './Componets/Inputs';
import TimeAndLocation from './Componets/TimeAndLocation';
import TempAndDets from './Componets/TempAndDets';
import Forecast from './Componets/Forecast';
import axios from 'axios';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

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

  return (
    <div className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400'>
      <TopButtons />
      <Inputs />

      <>
        <TimeAndLocation location_data={weatherData.locations[0]} />
        <TempAndDets days_data={weatherData.locations[0].days[0]} />
        <Forecast title='Hourly Forecast' data={weatherData.locations[0].days[0].hours} isHourly={true} />
        <Forecast title='Daily Forecast' data={weatherData.locations[0].days.slice(1, 6)} isHourly={false} />
      </>
    </div>
  );
}

export default App;

