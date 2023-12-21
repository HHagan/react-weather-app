// Purpose: To convert temperature from celsius to fahrenheit and vice versa
export function convertToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
  }
  
  export function convertToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
  }

