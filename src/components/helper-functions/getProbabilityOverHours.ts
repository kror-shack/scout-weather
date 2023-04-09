const getProbabilityOverHours = (valueArray: number[]): number => {
  console.log(valueArray);
  const porbabilityOfHappening = valueArray.reduce(
    (accumulator, currentValue) => {
      const thisProbability = currentValue / 100;
      console.log(`this is the current value ${thisProbability}`);
      if (accumulator > 1) console.log(`bigger accumulator ${accumulator}`);
      return accumulator + thisProbability;
    },
    0
  );
  console.log("this is the first happeneing prob");
  console.log(porbabilityOfHappening);

  const probabilityOfBothHappening = valueArray.reduce(
    (accumulator, currentValue) => {
      return accumulator * (currentValue / 100);
    },
    1
  );
  console.log("This is the both happening prob");
  console.log(probabilityOfBothHappening);

  const porbability = porbabilityOfHappening - probabilityOfBothHappening;

  console.log("this is the probabbbbbbb");
  console.log(porbability);
  if (porbability < 0) return 0;
  return Math.round(porbability * 100);
};

export default getProbabilityOverHours;
