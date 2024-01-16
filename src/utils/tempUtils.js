/**
 * Module: tempUtils
 * This module provides utility functions for temperature conversion between Celsius and Fahrenheit.
 * @module tempUtils
 */

/**
 * Converts temperature from Celsius to Fahrenheit.
 * @function
 * @param {number} celsius - The temperature in Celsius.
 * @returns {number} The equivalent temperature in Fahrenheit.
 */
export function convertToFahrenheit(celsius) {
  return celsius * 9/5 + 32;
}

/**
* Converts temperature from Fahrenheit to Celsius.
* @function
* @param {number} fahrenheit - The temperature in Fahrenheit.
* @returns {number} The equivalent temperature in Celsius.
*/
export function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
