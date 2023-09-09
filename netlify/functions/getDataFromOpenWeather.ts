import axios from "axios";

exports.handler = async (event, context) => {
  const { cityName, lat, lon } = event.queryStringParameters || {};

  const apiKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

  let apiUrl: string = "";

  if (cityName.length > 0) {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${apiKey}`;
  } else {
    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${apiKey}`;
  }

  try {
    let response = await axios.get(apiUrl, {
      headers: {
        accept: "application/json",
        "Accept-Encoding": "identity",
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
