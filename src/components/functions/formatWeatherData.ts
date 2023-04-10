import {
  getCurrentHour,
  getProbabilityOverHours,
  getWeatherCodeOverHours,
} from "./formatHelperFunctions";

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
  weatherCode: { morning: number; night: number; overall: number };
  sunset: string;

  preception: {
    morning: number;
    night: number;
    overall: number;
  };
  hourly: {
    [hour: string]: HourlyWeatherDetails;
  };
};

const formatHourlyTime = ({ data, tempUnit }: Props) => {
  let thisHour = getCurrentHour();

  // console.log("checking the propppsppsss");
  // console.log(data);

  let unformattedHourlyimeArray = data.hourly.time;
  let hourlyTempArray = data.hourly.temperature_2m;
  let hourlyPercipitaionProbabilityArray =
    data.hourly.precipitation_probability;
  let hourlyRainArray = data.hourly.rain;
  console.log(hourlyRainArray);
  let hourlySnowFallArray = data.hourly.snowfall;
  let unformatteddailySunriseArray = data.daily.sunrise;
  let unformatteddailySunsetArray = data.daily.sunset;
  let dailyUvIndex = data.daily.uv_index_max;
  let dailyWeatherCode = data.daily.weathercode;
  let hourlyWeatherCodeArray = data.hourly.weathercode;

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
    for (let i = index; i < index + 23; i++) {
      highestTemp =
        hourlyTempArray[i] > highestTemp ? hourlyTempArray[i] : highestTemp;
      lowestTemp =
        hourlyTempArray[i] < lowestTemp ? hourlyTempArray[i] : lowestTemp;

      let hour = convertHourFormat(i - index);

      dayTempDetails.hourly[hour] = {
        temp: Math.round(hourlyTempArray[i]),
        percipiation_probability: Math.round(
          hourlyPercipitaionProbabilityArray[i]
        ),
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

    if (day) {
      dayTempDetails.max_temp = Math.round(highestTemp);
      dayTempDetails.min_temp = Math.round(lowestTemp);
      dayTempDetails.uvMax = Math.round(dailyUvIndex[day]);
      dayTempDetails.sunrise = dailySunriseArray[day];
      dayTempDetails.sunset = dailySunsetArray[day];
      dayTempDetails.weatherCode.overall = dailyWeatherCode[day];
      dayTempDetails.weatherCode.morning = getWeatherCodeOverHours(
        hourlyWeatherCodeArray.slice(index, index + 12)
      );
      dayTempDetails.weatherCode.night = getWeatherCodeOverHours(
        hourlyWeatherCodeArray.slice(index + 12, index + 24)
      );
    }

    return dayTempDetails;
  }

  let yesterdayTempDetails = getWeatherDetailsForDay(0, 0);
  let next24HourTempDetails = getWeatherDetailsForDay(thisHour);
  let todayTempDetails = getWeatherDetailsForDay(23, 1);
  let secondDayTempDetails = getWeatherDetailsForDay(47, 2);
  let thirdDayTempDetails = getWeatherDetailsForDay(71, 3);
  let fourthDayTempDetails = getWeatherDetailsForDay(95, 4);
  let fifthDayTempDetails = getWeatherDetailsForDay(119, 5);
  let sixthDayTempDetails = getWeatherDetailsForDay(143, 6);
  let seventhDayTempDetails = getWeatherDetailsForDay(167, 7);

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
