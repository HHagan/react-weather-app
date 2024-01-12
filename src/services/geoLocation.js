// src/services/geoLocation.js
import axios from 'axios';

const reverseGeocodingApiUrl = `https://api.opencagedata.com/geocode/v1/json?`;
const OPENCAGE_API_KEY = 'b8e36fcfe63f47dcb79116312b3b6460';

const handleGeolocation = async () => {
  if (!navigator.geolocation) {
    throw new Error('Geolocation is not supported by this browser.');
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      async ({ coords }) => {
        if (!coords) {
          return reject('Coords object is undefined or null.');
        }

        console.log('Current position:', coords);
        const { latitude, longitude } = coords;

        const params = new URLSearchParams({
          q: `${latitude},${longitude}`,
          key: OPENCAGE_API_KEY,
        });

        try {
          const response = await axios.get(`${reverseGeocodingApiUrl}${params}`);
          const town = response.data.results[0]?.components.town;

          if (!town) {
            return reject('Unable to get town name from coordinates.');
          }

          console.log('Current location:', town);
          resolve(town);
        } catch (error) {
          console.error('Error fetching location:', error);
          reject('Error fetching location.');
        }
      },
      (error) => {
        console.error('Error getting current position:', error);
        reject('Error getting current position.');
      }
    );
  });
};

export default handleGeolocation;