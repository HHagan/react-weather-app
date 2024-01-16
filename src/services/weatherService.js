/**
 * Module: weatherService
 * This module provides a function for fetching weather data using the Visual Crossing Weather API.
 * @module weatherService
 */

import axios from 'axios';

/**
 * Visual Crossing Weather API key for accessing the weather service.
 * @constant {string}
 */
const API_KEY = 'TP4URRJ3Z6E468Z5GSZ7DTBM2';

/**
 * Base URL for the Visual Crossing Weather API.
 * @constant {string}
 */
const BASE_URL = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

/**
 * Fetches weather data for a specified location from the Visual Crossing Weather API.
 * @async
 * @function
 * @param {string} location - The location for which to fetch weather data.
 * @param {string} unit - The unit group for the weather data (e.g., 'metric' or 'us').
 * @param {Array<string>} include - An array of data types to include in the weather response.
 * @param {string} [contentType='json'] - The content type of the response (default is 'json').
 * @throws {Error} Throws an error if there's an issue fetching weather data.
 * @returns {Promise<Object>} A Promise that resolves to the weather data obtained from the API.
 */
export const getWeatherData = async (location, unit, include, contentType = 'json') => {
  try {
    // Make a GET request to the Visual Crossing Weather API
    const response = await axios.get(
      `${BASE_URL}${encodeURIComponent(location)}?unitGroup=${unit}&include=${include.join(',')}&key=${API_KEY}&contentType=${contentType}`
    );

    // Return the weather data from the API response
    return response.data;
  } catch (error) {
    // Log and rethrow the error if there's an issue fetching weather data
    console.error('Error fetching weather data:', error);
    throw error;
  }
};

export default getWeatherData;
// Optional if you want to use default export