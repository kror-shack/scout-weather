import axios from "axios";

exports.handler = async (event, context) => {
  const { keyword } = event.queryStringParameters;
  try {
    let response = await axios.get(
      `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=100000&namePrefix=${keyword}&namePrefixDefaultLangResults=true&limit=8&sort=population`,
      {
        headers: {
          accept: "application/json",
          "Accept-Encoding": "identity",
          "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
          "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
        },
      }
    );

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
