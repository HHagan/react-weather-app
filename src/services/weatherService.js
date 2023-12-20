import axios from 'axios';

//const API_KEY = 'TP4URRJ3Z6E468Z5GSZ7DTBM2';
//const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';
const BASE_URL = 'https://0d142c47-b799-4962-b287-13d9667ea1c3.mock.pstmn.io/tulsa-mock/';
//const BASE_URL = 'https://7c4aeacf-8e77-44c7-9942-9cd6dcb4e231.mock.pstmn.io/helloName';

export const getWeatherData = async (location, unit, include, contentType = 'json') => {
  try {
    const response = await axios.get(
      // `${BASE_URL}${encodeURIComponent(location)}?unitGroup=${unit}&include=${include.join(',')}&key=${API_KEY}&contentType=${contentType}`
      `${BASE_URL}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeatherData; // Optional if you want to use default export



