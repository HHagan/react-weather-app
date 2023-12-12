// weatherService.js
import axios from 'axios';

const API_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const getWeatherData = async (location, unit) => {
  try {
    const response = await axios.get(`${API_URL}${location}`, {
      params: {
        key: 'TP4URRJ3Z6E468Z5GSZ7DTBM2', // Replace with your actual API key
        include: 'current,hours,days',
        unit, // Add the temperature unit to the request parameters
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error; 
  }
};

export { getWeatherData };

