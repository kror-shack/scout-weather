import { convertKelvinToCelcius } from "./formatHelperFunctions";
import formatForecastDailyTempDetails from "./formatWeatherData";

interface TodayWeatherMainDetails {
  name: string;
  temp: number;
  maxTemp: number;
  minTemp: number;
  feelsLike: number;
  description: string;
}

type Coordinates = {
  lon: number;
  lat: number;
};

const getWeatherData = async (cityName: string) => {
  let todayWeatherMainDetails = {} as TodayWeatherMainDetails;
  let forecastWeatherDetails = {};
  let coordinates = {} as Coordinates;

  async function getDataFromOpenWeather() {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0bfd43c822d3aebccceaae1fd3fb1173`,
        { mode: "cors" }
      );
      let data = await response.json();
      // console.log(data);
      todayWeatherMainDetails.description = data.weather[0].description;
      todayWeatherMainDetails.name = data.name;
      todayWeatherMainDetails.feelsLike = convertKelvinToCelcius(
        data.main.feels_like
      );
      todayWeatherMainDetails.temp = convertKelvinToCelcius(data.main.temp);

      // console.log(todayWeatherMainDetails);

      coordinates.lon = data.coord.lon;
      coordinates.lat = data.coord.lat;
    } catch (err) {
      console.log(err);
    }
  }
  async function getDataFromMetoeWeather() {
    let response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m,weathercode,precipitation_probability,precipitation,rain,showers,snowfall,uv_index&daily=weathercode,sunrise,sunset,uv_index_max&time&past_days=1&timezone=auto`
    );
    let data = await response.json();
    forecastWeatherDetails = formatForecastDailyTempDetails({
      data: data,
      unit: "celcius",
    });

    // console.log("the data from the meteo API -------------------");
    // console.log(data);
  }

  async function fetchData() {
    try {
      await getDataFromOpenWeather();
      await getDataFromMetoeWeather();
    } catch (err) {
      console.error(err);
    }
  }

  await fetchData();

  console.log(
    "-----------this is the end of the get weather funcdtion ----------"
  );
  console.log(todayWeatherMainDetails);
  console.log(forecastWeatherDetails);

  return {
    todayWeatherMainDetails,
    forecastWeatherDetails,
  };
};

export default getWeatherData;
