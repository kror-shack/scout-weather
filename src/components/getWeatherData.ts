import formatHourlyTime from "./helper-functions/formatHourlyTime";

interface GeneralWeatherDetails {
  feels_like: number;
  humidity: number;
  pressure: number;
  description: string;
  uvAvgIndex: number;
  uvHighIndex: number;
}

const getWeatherData = (cityName: string) => {
  let weatherGeneralDetails = {} as GeneralWeatherDetails;
  let weatherArray: object;
  let timeArray: object = {};
  let lon = "";
  let lat = "";
  let uvArray: object = {};

  async function getDataFromOpenWeather() {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=0bfd43c822d3aebccceaae1fd3fb1173`,
        { mode: "cors" }
      );
      let data = await response.json();
      console.log(data);
      weatherGeneralDetails.feels_like = data.main.feels_like;
      weatherGeneralDetails.humidity = data.main.humidity;
      weatherGeneralDetails.pressure = data.main.pressure;
      weatherGeneralDetails.description = data.weather[0].description;

      lon = data.coord.lon;
      lat = data.coord.lat;
    } catch (err) {
      console.log(err);
    }
  }

  // async function getuvDataFromOpenWeather() {
  //   let myHeaders = new Headers();
  //   myHeaders.append("x-access-token", "openuv-fltferlg7qy59p-io");
  //   myHeaders.append("Content-Type", "application/json");

  //   let response = await fetch(
  //     `https://api.openuv.io/api/v1/uv?lat=${lat}&lng=${lon}&alt=100&dt=`,
  //     {
  //       mode: "cors",
  //       headers: myHeaders,
  //     }
  //   );

  //   let data = await response.json();
  //   uvArray = data;
  //   weatherGeneralDetails.uvAvgIndex = Math.floor(data.result.uv);
  //   weatherGeneralDetails.uvHighIndex = Math.floor(data.result.uv_max);

  //   // console.log(weatherGeneralDetails);
  // }

  async function getDataFromMetoeWeather() {
    let response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,precipitation_probability,precipitation,rain,showers,snowfall,uv_index&daily=sunrise,sunset,uv_index_max&timeformat=unixtime&timezone=auto`,
      { mode: "cors" }
    );
    let data = await response.json();
    console.log(data);
    formatHourlyTime({
      timeArray: data.hourly.time,
      tempArray: data.hourly.temperature_2m,
    });
    console.log("the data from the meteo API -------------------");
    console.log(weatherArray);
  }

  async function getDataFromTimeApi() {
    let response = await fetch(
      `http://api.timezonedb.com/v2.1/get-time-zone?key=9D7VMO9IUHJ&format=json&by=position&lat=${lat}&lng=${lon}`,
      { mode: "cors" }
    );
    let data = await response.json();
    timeArray = data;
    console.log("the data from the time API -------------------");
    console.log(timeArray);
  }

  async function fetchData() {
    try {
      await getDataFromOpenWeather();
      // await getDataFromTimeApi();
      await Promise.all([getDataFromMetoeWeather()]);

      console.log("Did not get an error");
    } catch (err) {
      console.log("-----------------Got an error---------------");
      console.error(err);
    }
  }

  fetchData();

  return {
    timeArray,
  };
};

export default getWeatherData;
