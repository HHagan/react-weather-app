// Description: This file contains the functions related to time.
export const formatHour = (hour) => {
  const period = hour >= 12 ? 'PM' : 'AM';
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour} ${period}`;
}

export const getAdjustedDateTime = (datetimeEpoch, timezoneOffset) => {
  const forecastDateTime = new Date(datetimeEpoch * 1000);
  return new Date(forecastDateTime.getTime() + (timezoneOffset * 60 * 1000));
}