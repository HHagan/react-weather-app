export const getContrastColor = (backgroundColor) => {
  const bg = parseInt(backgroundColor.replace('#', ''), 16);
  return bg > 0xffffff / 2 ? '#000000' : '#ffffff';
}

export const getBackgroundColor = (temperature) => {
  if (temperature <= -5) return '#b3e0ff'; // light blue
  if (temperature <= 15) return '#add8e6';
  if (temperature <= 20) return '#ffe4b5';  
  if (temperature <= 30) return '#ffdab9';  //
  return '#ffcccb'; // light red
}

export const darkenColor = (hexColor, factor) => {
  const darken = (color) => Math.round(parseInt(color, 16) * factor).toString(16).padStart(2, '0');
  return `#${darken(hexColor.slice(1, 3))}${darken(hexColor.slice(3, 5))}${darken(hexColor.slice(5, 7))}`;
}