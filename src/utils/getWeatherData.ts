import {
  capitalizeWords,
  convertHourFormat,
  convertKelvinToCelcius,
  convertKelvinToFahrenheit,
  getCurrentHour,
  getUVLevel,
  isDay,
} from "./formatHelperFunctions";
import formatForecastDailyTempDetails from "./formatWeatherData";
import {
  CityDetails,
  TodayWeatherMainDetails,
  DailyWeatherDetails,
  ForecastDetails,
} from "../types/types";
import { useNavigate } from "react-router-dom";

type Coordinates = {
  lon: number;
  lat: number;
};

type Props = {
  cityDetails: CityDetails;
  tempUnit: "C" | "F";
  setError: React.Dispatch<React.SetStateAction<boolean>>;
};

const getWeatherData = async ({ cityDetails, tempUnit, setError }: Props) => {
  let todayWeatherMainDetails = {} as TodayWeatherMainDetails;
  let forecastWeatherDetails = {} as ForecastDetails;
  let coordinates = {} as Coordinates;

  async function getDataFromOpenWeather() {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?${
          "name" in cityDetails
            ? `q=${cityDetails.name}`
            : `lat=${cityDetails.lat}&lon=${cityDetails.lon}`
        }&APPID=0bfd43c822d3aebccceaae1fd3fb1173`,
        { mode: "cors" }
      );
      let data = await response.json();
      console.log(data);
      todayWeatherMainDetails.description = capitalizeWords(
        data.weather[0].description
      );
      todayWeatherMainDetails.name = data.name;
      if (tempUnit === "F") {
        todayWeatherMainDetails.feelsLike = convertKelvinToFahrenheit(
          data.main.feels_like
        );
        todayWeatherMainDetails.temp = convertKelvinToFahrenheit(
          data.main.temp
        );
      } else {
        todayWeatherMainDetails.feelsLike = convertKelvinToCelcius(
          data.main.feels_like
        );
        todayWeatherMainDetails.temp = convertKelvinToCelcius(data.main.temp);
      }
      todayWeatherMainDetails.wind = data.wind.speed;

      // console.log(todayWeatherMainDetails);

      coordinates.lon = data.coord.lon;

      coordinates.lat = data.coord.lat;
      //console.log("these are the cooridnates--------------");
      //console.log(coordinates);
    } catch (err) {
      console.log(err);
      setError(true);
    }
  }
  async function getDataFromMetoeWeather() {
    try {
      let tempDetails;
      if (tempUnit === "F") {
        tempDetails = "&temperature_unit=fahrenheit";
      } else {
        tempDetails = "";
      }
      let response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${
          "name" in cityDetails ? coordinates.lat : cityDetails.lat
        }&longitude=${
          "name" in cityDetails ? coordinates.lon : cityDetails.lon
        }&hourly=temperature_2m,weathercode,precipitation_probability,precipitation,rain,showers,snowfall,uv_index&daily=weathercode,sunrise,sunset,uv_index_max&time&past_days=1&timezone=auto&${tempDetails}`
      );
      let data = await response.json();
      forecastWeatherDetails = formatForecastDailyTempDetails({
        data: data,
        tempUnit: tempUnit,
      });
      todayWeatherMainDetails.uvMax =
        forecastWeatherDetails.todayTempDetails.uvMax;
      todayWeatherMainDetails.maxTemp =
        forecastWeatherDetails.todayTempDetails.max_temp;
      todayWeatherMainDetails.minTemp =
        forecastWeatherDetails.todayTempDetails.min_temp;
      let unformattedThisHour = getCurrentHour();
      let thisHour = convertHourFormat(unformattedThisHour);

      todayWeatherMainDetails.weatherCode =
        forecastWeatherDetails.todayTempDetails.hourly[thisHour].weatherCode;
      console.log(todayWeatherMainDetails.weatherCode);
      todayWeatherMainDetails.sunrise =
        forecastWeatherDetails.todayTempDetails.sunrise;
      todayWeatherMainDetails.sunset =
        forecastWeatherDetails.todayTempDetails.sunset;

      //console.log("the data from the meteo API -------------------");
      console.log(data);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  }

  async function fetchData() {
    try {
      //if there are no coordinates then openWeather
      //provides the cordinates for meteoWeather
      if ("name" in cityDetails) {
        await getDataFromOpenWeather();
        await getDataFromMetoeWeather();
      } else {
        await Promise.all([
          getDataFromOpenWeather(),
          getDataFromMetoeWeather(),
        ]);
      }
    } catch (err) {
      console.error(err);
    }
  }

  await fetchData();

  //console.log(
  //"-----------this is the end of the get weather funcdtion ----------"
  // );
  //console.log(todayWeatherMainDetails);
  console.log(forecastWeatherDetails);

  return {
    todayWeatherMainDetails,
    forecastWeatherDetails,
  };
};

export default getWeatherData;
