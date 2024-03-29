import {
  getCurrentHour,
  getProbabilityOverHours,
  getWeatherCodeOverHours,
  getDayFromDate,
  convertHourFormat,
  getUVLevel,
} from "./formatHelperFunctions/formatHelperFunctions";

import {
  DailyWeatherDetails,
  ForecastDetails,
  HourlyWeatherDetails,
} from "../types/types";
import uniqid from "uniqid";
type Props = {
  data: Data;
  tempUnit: "C" | "F";
};

type Data = {
  daily: {
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    weathercode: number[];
    time: string[];
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation_probability: number[];
    rain: number[];
    snowfall: number[];
    weathercode: number[];
  };
};

const formatHourlyTime = ({ data, tempUnit }: Props) => {
  let thisHour = getCurrentHour();

  let unformattedHourlyimeArray = data.hourly.time;
  let hourlyTempArray = data.hourly.temperature_2m;
  let hourlyPercipitaionProbabilityArray =
    data.hourly.precipitation_probability;
  let hourlyRainArray = data.hourly.rain;
  let hourlySnowFallArray = data.hourly.snowfall;
  let unformatteddailySunriseArray = data.daily.sunrise;
  let unformatteddailySunsetArray = data.daily.sunset;
  let dailyUvIndex = data.daily.uv_index_max;
  let dailyWeatherCode = data.daily.weathercode;
  let hourlyWeatherCodeArray = data.hourly.weathercode;
  let dailyNameArray = data.daily.time;

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

  //index: start point of the array
  // day: from yesterday = 0
  function getWeatherDetailsForDay(index: number, day?: number) {
    let dayTempDetails = {
      hourly: {},
      preception: {},
      weatherCode: {},
    } as DailyWeatherDetails;
    let highestTemp = hourlyTempArray[index];
    let lowestTemp = hourlyTempArray[index];

    for (let i = index; i < index + 24; i++) {
      highestTemp =
        hourlyTempArray[i] > highestTemp ? hourlyTempArray[i] : highestTemp;
      lowestTemp =
        hourlyTempArray[i] < lowestTemp ? hourlyTempArray[i] : lowestTemp;

      let hour = convertHourFormat(i - index);
      if (index === thisHour) {
        hour = convertHourFormat(i);
        if (i > 23) {
          hour = convertHourFormat(i - 24);
        }
      }

      dayTempDetails.hourly[hour] = {
        temp: Math.round(hourlyTempArray[i]),
        key: uniqid(),
        percipiation_probability: Math.round(
          hourlyPercipitaionProbabilityArray[i]
        ),
        weatherCode: hourlyWeatherCodeArray[i],
      };

      if (
        hourlyRainArray[i] >= hourlySnowFallArray[i] &&
        hourlyPercipitaionProbabilityArray[i] !== 0
      ) {
        dayTempDetails.hourly[hour].rain = Math.round(hourlyRainArray[i]);
      } else if (
        hourlyRainArray[i] < hourlySnowFallArray[i] &&
        hourlyPercipitaionProbabilityArray[i] !== 0
      ) {
        dayTempDetails.hourly[hour].snow = Math.round(hourlySnowFallArray[i]);
      }
    }
    dayTempDetails.preception.morning = getProbabilityOverHours(
      hourlyPercipitaionProbabilityArray.slice(index, index + 12)
    );
    dayTempDetails.preception.night = getProbabilityOverHours(
      hourlyPercipitaionProbabilityArray.slice(index + 12, index + 24)
    );
    dayTempDetails.preception.overall = getProbabilityOverHours(
      hourlyPercipitaionProbabilityArray.slice(index, index + 24)
    );

    dayTempDetails.weatherCode.morning = getWeatherCodeOverHours(
      hourlyWeatherCodeArray.slice(index, index + 12)
    );
    dayTempDetails.weatherCode.night = getWeatherCodeOverHours(
      hourlyWeatherCodeArray.slice(index + 12, index + 24)
    );

    if (day) {
      dayTempDetails.max_temp = Math.round(highestTemp);
      dayTempDetails.min_temp = Math.round(lowestTemp);
      dayTempDetails.uvMax = getUVLevel(Math.round(dailyUvIndex[day]));
      dayTempDetails.sunrise = dailySunriseArray[day];
      dayTempDetails.sunset = dailySunsetArray[day];
      dayTempDetails.dayName = getDayFromDate(dailyNameArray[day]);
      dayTempDetails.weatherCode.overall = dailyWeatherCode[day];
    } else {
      dayTempDetails.max_temp = Math.round(highestTemp);
      dayTempDetails.dayName = "Yesterday";

      dayTempDetails.min_temp = Math.round(lowestTemp);
    }
    dayTempDetails.key = uniqid();

    return dayTempDetails;
  }

  let yesterdayTempDetails = getWeatherDetailsForDay(0, 0);
  let next24HourTempDetails = getWeatherDetailsForDay(thisHour);

  let todayTempDetails = getWeatherDetailsForDay(24, 1);
  let secondDayTempDetails = getWeatherDetailsForDay(48, 2);
  let thirdDayTempDetails = getWeatherDetailsForDay(72, 3);
  let fourthDayTempDetails = getWeatherDetailsForDay(96, 4);
  let fifthDayTempDetails = getWeatherDetailsForDay(120, 5);
  let sixthDayTempDetails = getWeatherDetailsForDay(144, 6);
  let seventhDayTempDetails = getWeatherDetailsForDay(168, 7);

  return {
    yesterdayTempDetails,
    todayTempDetails,
    next24HourTempDetails,
    secondDayTempDetails,
    thirdDayTempDetails,
    fourthDayTempDetails,
    fifthDayTempDetails,
    sixthDayTempDetails,
    seventhDayTempDetails,
  };
};

export default formatHourlyTime;
