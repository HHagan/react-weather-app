/**
 * Module: geoLocation
 * This module provides functions for handling geolocation using the OpenCage Data API.
 * @module geoLocation
 */

import axios from 'axios';

/**
 * URL for the OpenCage Data API for reverse geocoding.
 * @constant {string}
 */
const reverseGeocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?`;

/**
 * OpenCage API key for accessing the reverse geocoding service.
 * @constant {string}
 */
const OPENCAGE_API_KEY = 'b8e36fcfe63f47dcb79116312b3b6460';

/**
 * Handles geolocation by retrieving the town name based on the user's coordinates.
 * Uses the OpenCage Data API for reverse geocoding.
 * @async
 * @function
 * @throws {Error} Throws an error if geolocation is not supported by the browser.
 * @returns {Promise<string>} A Promise that resolves to the town name obtained from the coordinates.
 */
const handleGeolocation = async () => {
  // Check if geolocation is supported by the browser
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by this browser.');
  }

  return new Promise((resolve, reject) => {
    // Retrieve the current position using the geolocation API
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        // Check if the coordinates object is undefined or null
        if (!coords) {
          return reject(new Error('Coords object is undefined or null.'));
        }

        const { latitude, longitude } = coords;

        // Create URL parameters for the OpenCage Data API
        const params = new URLSearchParams({
          q: `${latitude},${longitude}`,
          key: OPENCAGE_API_KEY,
        });

        try {
          // Make a GET request to the OpenCage Data API for reverse geocoding
          const response = await axios.get(`${reverseGeocodingApiUrl}${params}`);
          
          // Extract the town name from the API response
          const town = response.data.results[0]?.components.town;

          // If town is not available, reject with an error
          if (!town) {
            return reject(new Error('Unable to get town name from coordinates.'));
          }

          // Resolve with the obtained town name
          resolve(town);
        } catch (error) {
          // Log and reject with an error if there's an issue fetching the location
          console.error(`Error fetching location for coordinates "${latitude},${longitude}":`, error);
          reject(new Error('Error fetching location.'));
        }
      },
      // Handle errors during geolocation
      (error) => {
        console.error('Error getting current position:', error);
        reject(new Error('Error getting current position.'));
      }
    );
  });
};

export default handleGeolocation;