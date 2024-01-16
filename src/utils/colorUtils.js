/**
 * Module: colorUtils
 * This module provides utility functions for working with colors.
 * @module colorUtils
 */

import { convertToFahrenheit } from './tempUtils';

/**
 * Returns a contrasting color based on the input hex color.
 * @function
 * @param {string} backgroundColor - The background color in hex format (e.g., '#ffffff').
 * @returns {string} The contrasting color (either '#000000' or '#ffffff').
 */
export const getContrastColor = (backgroundColor) => {
  const hexColor = parseInt(backgroundColor.replace('#', ''), 16);
  return hexColor > 0xffffff / 2 ? '#000000' : '#ffffff';
}

/**
 * Returns a darker shade of the input hex color based on the specified factor.
 * @function
 * @param {string} hexColor - The original hex color (e.g., '#ff0000').
 * @param {number} factor - The factor by which to darken the color (e.g., 0.8).
 * @returns {string} The darker shade of the hex color.
 */
export const darkenColor = (hexColor, factor) => {
  const darken = (color) => Math.round(parseInt(color, 16) * factor).toString(16).padStart(2, '0');
  return `#${darken(hexColor.slice(1, 3))}${darken(hexColor.slice(3, 5))}${darken(hexColor.slice(5, 7))}`;
}

/**
 * Returns a background color based on the temperature and temperature unit.
 * @function
 * @param {number} temperature - The temperature value.
 * @param {string} [tempUnit='imperial'] - The temperature unit ('imperial' or 'metric').
 * @returns {string} The background color based on temperature ranges.
 */
export const getBackgroundColor = (temperature, tempUnit = 'imperial') => {
  // Convert temperature to Fahrenheit if the unit is metric
  let tempInFahrenheit = (tempUnit === 'metric') ? convertToFahrenheit(temperature) : temperature;

  // Determine the background color based on temperature ranges
  if (tempInFahrenheit <= 32) return '#b3e0ff'; // light blue
  if (tempInFahrenheit <= 50) return '#add8e6'; // blue
  if (tempInFahrenheit <= 77) return '#ffe4b5'; // light orange
  if (tempInFahrenheit <= 113) return '#ffdab9'; // orange
  return '#ffcccb'; // light red
}