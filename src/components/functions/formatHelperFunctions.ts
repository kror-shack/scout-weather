const convertKelvinToCelcius = (kelvin: number): number => {
  const celsius = kelvin - 273.15; // convert to Celsius
  const roundedCelsius = Math.ceil(celsius); // round up to nearest integer
  return roundedCelsius;
};

const getProbabilityOverHours = (valueArray: number[]): number => {
  console.log(valueArray);

  const probabilityOfNotHappening = valueArray.reduce(
    (accumulator, currentValue) => {
      return accumulator * (1 - currentValue / 100);
    },
    1
  );

  const porbability = 1 - probabilityOfNotHappening;

  if (porbability < 0) return 0;
  return Math.round(porbability * 100);
};

const getCurrentHour = () => {
  let date = new Date();
  return date.getHours();
};

const getWeatherCodeOverHours = (valueArray: number[]): number => {
  const recordObj: Record<number, number> = {};
  let maxFreq = 0;
  let mostFrequentNum = 0;

  for (const num of valueArray) {
    recordObj[num] = (recordObj[num] || 0) + 1;
    if (recordObj[num] > maxFreq) {
      maxFreq = recordObj[num];
      mostFrequentNum = num;
    }
  }

  return mostFrequentNum;
};

export {
  convertKelvinToCelcius,
  getProbabilityOverHours,
  getCurrentHour,
  getWeatherCodeOverHours,
};
