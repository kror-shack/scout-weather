const convertKelvinToCelcius = (kelvin: number): number => {
  const celsius = kelvin - 273.15; // convert to Celsius
  const roundedCelsius = Math.ceil(celsius); // round up to nearest integer
  return roundedCelsius;
};

export default convertKelvinToCelcius;
