import getCurrentHour from "./getCurrentHour";

type Props = {
  data: Data;
  unit: string;
};

type Data = {
  daily: {
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    weathecode: number[];
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    rain: number[];
    snowfall: number[];
  };
};

type HourlyWeatherDetails = {
  temp: number;
  percipiation_probability: number;
  rain?: number;
  snow?: number;
};

type DailyWeatherDetails = {
  max_temp: number;
  min_temp: number;
  uvMax: number;
  sunrise: string;
  sunset: string;
  hourly: {
    [hour: string]: HourlyWeatherDetails;
  };
};

const formatHourlyTime = ({ data, unit }: Props) => {
  let thisHour = getCurrentHour();

  console.log("checking the propppsppsss");
  console.log(data);

  let unformattedHourlyimeArray = data.hourly.time;
  let hourlyTempArray = data.hourly.temperature_2m;
  let hourlyPercipitaionProbabilityArray =
    data.hourly.precipitation_probability;
  let hourlyRainArray = data.hourly.rain;
  let hourlySnowFallArray = data.hourly.snowfall;
  let unformatteddailySunriseArray = data.daily.sunrise;
  let unformatteddailySunsetArray = data.daily.sunset;
  let dailyUvIndex = data.daily.uv_index_max;
  let dailyWeatherCode = data.daily.weathecode;

  function convertTo12HourFormat(time24: string): string {
    const [hours, minutes] = time24.split(":");
    const parsedHours = parseInt(hours);
    const suffix = parsedHours >= 12 ? "PM" : "AM";
    const displayHours = parsedHours % 12 === 0 ? 12 : parsedHours % 12;
    const displayMinutes = minutes.padStart(2, "0");
    return `${displayHours}:${displayMinutes}${suffix}`;
  }

  //To get only the hours from the time array
  const converIsoTimeArrayToHourArray = (array: string[]): string[] => {
    const mappedForHourArray = array.map((item) => {
      const index = item.indexOf("T");
      return item.substring(index + 1);
    });
    const timeArray = mappedForHourArray.map((item) => {
      let formattedItem = convertTo12HourFormat(item);
      return formattedItem;
    });

    return timeArray;
  };

  let dailySunriseArray = converIsoTimeArrayToHourArray(
    unformatteddailySunriseArray
  );
  let dailySunsetArray = converIsoTimeArrayToHourArray(
    unformatteddailySunsetArray
  );
  let hourlyTimeArray = converIsoTimeArrayToHourArray(
    unformattedHourlyimeArray
  );

  function convertHourFormat(hour: number): string {
    if (hour === 0) {
      return "12AM";
    } else if (hour < 12) {
      return `${hour}AM`;
    } else if (hour === 12) {
      return "12PM";
    } else {
      return `${hour - 12}PM`;
    }
  }

  function getYesterdayTempDetails() {
    let yesterdayTempDetails = { hourly: {} } as DailyWeatherDetails;
    let highestTemp = hourlyTempArray[0];
    let lowestTemp = hourlyTempArray[0];
    for (let i = 0; i < 23; i++) {
      highestTemp =
        hourlyTempArray[i] > highestTemp ? hourlyTempArray[i] : highestTemp;
      lowestTemp =
        hourlyTempArray[i] < lowestTemp ? hourlyTempArray[i] : lowestTemp;

      let hour = convertHourFormat(i);

      yesterdayTempDetails.hourly[hour] = {
        temp: Math.ceil(hourlyTempArray[i]),
        percipiation_probability: Math.ceil(
          hourlyPercipitaionProbabilityArray[i]
        ),
      };
      if (
        hourlyRainArray[i] > hourlySnowFallArray[i] &&
        hourlyRainArray[i] + hourlySnowFallArray[i] !== 0
      ) {
        yesterdayTempDetails.hourly[hour].rain = Math.ceil(hourlyRainArray[i]);
      } else if (
        hourlyRainArray[i] < hourlySnowFallArray[i] &&
        hourlyRainArray[i] + hourlySnowFallArray[i] !== 0
      ) {
        yesterdayTempDetails.hourly[hour].snow = Math.ceil(
          hourlySnowFallArray[i]
        );
      }
    }
    yesterdayTempDetails.max_temp = Math.ceil(highestTemp);
    yesterdayTempDetails.min_temp = Math.ceil(lowestTemp);
    yesterdayTempDetails.uvMax = Math.ceil(dailyUvIndex[0]);
    yesterdayTempDetails.sunrise = dailySunriseArray[0];
    yesterdayTempDetails.sunset = dailySunsetArray[0];

    console.log(yesterdayTempDetails);
  }

  getYesterdayTempDetails();

  function getTodayTempDetails() {
    let todayTempDetails = { hourly: {} } as DailyWeatherDetails;
    let highestTemp = hourlyTempArray[0];
    let lowestTemp = hourlyTempArray[0];

    for (let i = 23; i < 47; i++) {
      highestTemp =
        hourlyTempArray[i] > highestTemp ? hourlyTempArray[i] : highestTemp;
      lowestTemp =
        hourlyTempArray[i] < lowestTemp ? hourlyTempArray[i] : lowestTemp;

      let hour = convertHourFormat(i - 23);

      todayTempDetails.hourly[hour] = {
        temp: Math.ceil(hourlyTempArray[i]),
        percipiation_probability: Math.ceil(
          hourlyPercipitaionProbabilityArray[i]
        ),
      };

      if (hourlyRainArray[i] > hourlySnowFallArray[i]) {
        if (hourlyRainArray[i] + hourlySnowFallArray[i] !== 0) {
          todayTempDetails.hourly[hour].rain = Math.ceil(hourlyRainArray[i]);
        }
      } else {
        if (hourlyRainArray[i] + hourlySnowFallArray[i] !== 0) {
          todayTempDetails.hourly[hour].snow = Math.ceil(
            hourlySnowFallArray[i]
          );
        }
      }
    }

    todayTempDetails.max_temp = Math.ceil(highestTemp);
    todayTempDetails.min_temp = Math.ceil(lowestTemp);
    todayTempDetails.uvMax = Math.ceil(dailyUvIndex[0]);
    todayTempDetails.sunrise = dailySunriseArray[0];
    todayTempDetails.sunset = dailySunsetArray[0];

    console.log("this is todas weather");
    console.log(todayTempDetails);
  }

  getTodayTempDetails();

  //   let todayTemp: object[] = [];
  //   let tommorrowTemp: object[] = [];
  //   let ThreeDayLaterTemp: object[] = [];
  //   let FourDayLaterTemp: object[] = [];
  //   let FiveDayLaterTemp: object[] = [];
  //   let SixDayLaterTemp: object[] = [];
  //   let SevenDayLaterTemp: object[] = [];

  //   function getTodayHourlyTemperature(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     console.log(timeArray[0]);
  //     for (let i = timeArray[0]; i < 24; i++) {
  //       timeArray.shift();
  //       todayTemp.push({ [i]: tempArray.shift() });
  //     }
  //     return todayTemp;
  //   }

  //   function getTommorrowTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       tommorrowTemp.push({ [i]: tempArray.shift() });
  //     }
  //     return tommorrowTemp;
  //   }

  //   function get3DayLaterTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       ThreeDayLaterTemp.push({ [i]: tempArray.shift() });
  //     }
  //   }

  //   function get4DayLaterTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       FourDayLaterTemp.push({ [i]: tempArray.shift() });
  //     }
  //   }
  //   function get5DayLaterTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       FiveDayLaterTemp.push({ [i]: tempArray.shift() });
  //     }
  //   }

  //   function get6DayLaterTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       SixDayLaterTemp.push({ [i]: tempArray.shift() });
  //     }
  //   }

  //   function get7DayLaterTemp(
  //     timeArray: typeof currentHourlyTimeArray,
  //     tempArray: typeof currentHourlyTempArray
  //   ) {
  //     for (let i = 0; i < 24; i++) {
  //       timeArray.shift();
  //       SevenDayLaterTemp.push({ [i]: tempArray.shift() });
  //     }
  //   }

  //   let todayHourlyTemperature = getTodayHourlyTemperature(
  //     currentHourlyTimeArray,
  //     currentHourlyTempArray
  //   );

  //   let tommorrowHourlyTemp = getTommorrowTemp(
  //     currentHourlyTimeArray,
  //     currentHourlyTempArray
  //   );

  //   get3DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);
  //   get4DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  //   get5DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  //   get6DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  //   get7DayLaterTemp(currentHourlyTimeArray, currentHourlyTempArray);

  //   console.log(todayHourlyTemperature);
  //   console.log(tommorrowHourlyTemp);
  //   console.log(ThreeDayLaterTemp);
  //   console.log(FourDayLaterTemp);
  //   console.log(FiveDayLaterTemp);
  //   console.log(SixDayLaterTemp);
  //   console.log(SevenDayLaterTemp);
  //   console.log(currentHourlyTempArray);
  //   console.log(currentHourlyTimeArray);
};

export default formatHourlyTime;
