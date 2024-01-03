// Description: This file contains the functions related to time.
export function formatHour(hour) {
    // Convert hour to 12-hour format
    return hour >= 12 ? (hour === 12 ? 12 : hour - 12) + ' PM' : (hour === 0 ? 12 : hour) + ' AM';
  }
  
  export function getAdjustedDateTime(datetimeEpoch, timezoneOffset) {
    const forecastDateTime = new Date(datetimeEpoch * 1000);
    return new Date(forecastDateTime.getTime() + (timezoneOffset * 60 * 1000));
  }


