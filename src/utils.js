export function getContrastColor(backgroundColor) {
    // Convert the background color to a number
    const bg = parseInt(backgroundColor.replace('#', ''), 16);
  
    // Calculate the contrast color
    const contrast = (bg > 0xffffff / 2) ? '#000000' : '#ffffff';
  
    return contrast;
  }

  export function convertTemperature(temp, temperatureUnit) {
    return temperatureUnit === 'metric' ? Math.round(temp) : Math.round((temp * 9) / 5 + 32);
  }
  
  export function formatHour(hour) {
    // Convert hour to 12-hour format
    return hour >= 12 ? (hour === 12 ? 12 : hour - 12) + ' PM' : (hour === 0 ? 12 : hour) + ' AM';
  }
  
  export function getAdjustedDateTime(datetimeEpoch, timezoneOffset) {
    const forecastDateTime = new Date(datetimeEpoch * 1000);
    return new Date(forecastDateTime.getTime() + (timezoneOffset * 60 * 1000));
  }

  export function getBackgroundColor(temperature) {
    if (temperature <= 0) {
      return '#b3e0ff'; // Cold color - Light blue
    } else if (temperature > 0 && temperature <= 20) {
      return '#add8e6'; // Cool color - Light steel blue
    } else if (temperature > 20 && temperature <= 30) {
      return '#ffe4b5'; // Subdued warm color - Moccasin
    } else {
      return '#ffccbc'; // Hot color - Apricot
    }
  }

  export function darkenColor(hexColor, factor) {
    // Convert hex color to RGB
    const r = parseInt(hexColor.slice(1, 3), 16);
    const g = parseInt(hexColor.slice(3, 5), 16);
    const b = parseInt(hexColor.slice(5, 7), 16);
  
    // Darken the color by a factor
    const darkenedR = Math.round(r * factor);
    const darkenedG = Math.round(g * factor);
    const darkenedB = Math.round(b * factor);
  
    // Convert back to hex
    const darkenedHex = `#${darkenedR.toString(16).padStart(2, '0')}${darkenedG.toString(16).padStart(2, '0')}${darkenedB.toString(16).padStart(2, '0')}`;
  
    return darkenedHex;
  }