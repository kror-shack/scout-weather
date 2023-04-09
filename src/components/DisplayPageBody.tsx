import React, { useState } from "react";
import getWeatherData from "./functions/getWeatherData";

type Props = {
  cityName: string | undefined;
};

const DisplayPageBody = ({ cityName }: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  async function handleButtonClick() {
    if (cityName) {
      console.log("in the clickkkk functijon");
      let { todayWeatherMainDetails, forecastWeatherDetails } =
        await getWeatherData(cityName);
      console.log(todayWeatherMainDetails);
      console.log(forecastWeatherDetails);
    }
  }

  return (
    <div>
      <p>{cityName}</p>
      <button onClick={() => handleButtonClick()}>Fetch Data</button>
    </div>
  );
};

export default DisplayPageBody;
