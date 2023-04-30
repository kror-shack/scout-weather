import {
  convertKelvinToCelcius,
  convertKelvinToFahrenheit,
} from "./formatHelperFunctions";

type Coordinates = {
  lon: number;
  lat: number;
};

const getOtherLocationWeatherData = async (
  cityName: string,
  tempUnit: "C" | "F"
) => {
  let coordinates = {} as Coordinates;
  let cityTemp: number | undefined;
  let weatherCode: number | undefined;

  async function getDataFromOpenWeather() {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0bfd43c822d3aebccceaae1fd3fb1173`,
        { mode: "cors" }
      );
      let data = await response.json();
      coordinates.lon = data.coord.lon;

      coordinates.lat = data.coord.lat;
      if (tempUnit === "C") return convertKelvinToCelcius(data.main.temp);
      else return convertKelvinToFahrenheit(data.temp.main);
    } catch (err) {
      console.log(err);
    }
  }

  async function getDataFromMetoeWeather() {
    try {
      let response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${coordinates.lat}&longitude=${coordinates.lon}&daily=weathercode&timezone=auto`
      );
      let data = await response.json();
      console.log(data.daily.weathercode[0]);
      return data.daily.weathercode[0];
    } catch (err) {
      console.error(err);
    }
  }

  async function fetchData() {
    try {
      cityTemp = await getDataFromOpenWeather();
      console.log("this is the city temp");
      console.log(cityTemp);
      weatherCode = await getDataFromMetoeWeather();
    } catch (err) {
      console.error(err);
    }
  }

  await fetchData();

  return { cityTemp, weatherCode };
};

export default getOtherLocationWeatherData;
