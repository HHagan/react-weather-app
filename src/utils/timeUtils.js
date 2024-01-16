/**
 * Module: timeUtils
 * This module contains utility functions related to time.
 * @module timeUtils
 */

/**
 * Formats the hour in 12-hour clock format with AM/PM indication.
 * @function
 * @param {number} hour - The hour value (24-hour format).
 * @returns {string} The formatted hour in 12-hour clock format with AM/PM.
 */
export const formatHour = (hour) => {
  // Determine the period (AM or PM) and adjust the hour
  const period = hour >= 12 ? 'PM' : 'AM';
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour} ${period}`;
}

/**
 * Adjusts the provided epoch time to the specified timezone offset.
 * @function
 * @param {number} datetimeEpoch - The epoch time to be adjusted.
 * @param {number} timezoneOffset - The timezone offset in minutes.
 * @returns {Date} The adjusted date and time object.
 */
export const getAdjustedDateTime = (datetimeEpoch, timezoneOffset) => {
  // Convert epoch time to a Date object and adjust based on timezone offset
  const forecastDateTime = new Date(datetimeEpoch * 1000);
  return new Date(forecastDateTime.getTime() + (timezoneOffset * 60 * 1000));
}