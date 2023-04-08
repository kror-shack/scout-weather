type Props = {
  timeArray: string[];
  tempArray: number[];
};

const formatHourlyTime = ({ timeArray, tempArray }: Props) => {
  function getThisHour() {
    let date = new Date();
    return date.getHours();
  }
  let thisHour = getThisHour();

  //To get only the hours from the time array
  function formatTimeArray(array: string[]) {
    const mappedForHourArray = array.map((item) => {
      const index = item.indexOf("T");
      console.log(index);
      return item.substring(index + 1, index + 3);
    });
    const timeArray = mappedForHourArray.map((item) => {
      return parseInt(item);
    });

    return timeArray;
  }

  let formattedTimeArray = formatTimeArray(timeArray);

  //Removing the hours before the current one
  function removePreviousHours(
    timeArray: typeof formattedTimeArray
  ): typeof formattedTimeArray {
    return timeArray.slice(thisHour);
  }

  let currentHourlyTimeArray = removePreviousHours(formattedTimeArray);

  function removePreviousTemps(array: number[]): number[] {
    let slicedArray = array.slice(array.length - currentHourlyTimeArray.length);
    const tempArray = slicedArray.map((item) => {
      return Math.ceil(item);
    });
    return tempArray;
  }

  let currentHourlyTempArray = removePreviousTemps(tempArray);

  let todayTemp: object[] = [];
  let tommorrowTemp: object[] = [];
  let ThreeDayLaterTemp: object[] = [];
  let FourDayLaterTemp: object[] = [];
  let FiveDayLaterTemp: object[] = [];
  let SixDayLaterTemp: object[] = [];
  let SevenDayLaterTemp: object[] = [];

  function getTodayHourlyTemperature(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    console.log(timeArray[0]);
    for (let i = timeArray[0]; i < 24; i++) {
      timeArray.shift();
      todayTemp.push({ [i]: tempArray.shift() });
    }
    return todayTemp;
  }

  function getTommorrowTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      tommorrowTemp.push({ [i]: tempArray.shift() });
    }
    return tommorrowTemp;
  }

  function get3DayLaterTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      ThreeDayLaterTemp.push({ [i]: tempArray.shift() });
    }
  }

  function get4DayLaterTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      FourDayLaterTemp.push({ [i]: tempArray.shift() });
    }
  }
  function get5DayLaterTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      FiveDayLaterTemp.push({ [i]: tempArray.shift() });
    }
  }

  function get6DayLaterTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      SixDayLaterTemp.push({ [i]: tempArray.shift() });
    }
  }

  function get7DayLaterTemp(
    timeArray: typeof currentHourlyTimeArray,
    tempArray: typeof currentHourlyTempArray
  ) {
    for (let i = 0; i < 24; i++) {
      timeArray.shift();
      SevenDayLaterTemp.push({ [i]: tempArray.shift() });
    }
  }

  let todayHourlyTemperature = getTodayHourlyTemperature(
    currentHourlyTimeArray,
    currentHourlyTempArray
  );

  let tommorrowHourlyTemp = getTommorrowTemp(
    currentHourlyTimeArray,
    currentHourlyTempArray
  );

  get3DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);
  get4DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  get5DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  get6DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  get7DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  console.log(todayHourlyTemperature);
  console.log(tommorrowHourlyTemp);
  console.log(ThreeDayLaterTemp);
  console.log(FourDayLaterTemp);
  console.log(FiveDayLaterTemp);
  console.log(SixDayLaterTemp);
  console.log(SevenDayLaterTemp);
  console.log(currentHourlyTempArray);
  console.log(currentHourlyTimeArray);
};

export default formatHourlyTime;
