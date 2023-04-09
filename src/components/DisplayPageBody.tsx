import React, { useState } from "react";
import getWeatherData from "./functions/getWeatherData";

type TempUnits = "C" | "F";

type Props = {
  cityName: string | undefined;
  tempUnit: TempUnits;
};

const DisplayPageBody = ({ cityName, tempUnit }: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  async function handleButtonClick() {
    if (cityName) {
      console.log("in the clickkkk functijon");
      let { todayWeatherMainDetails, forecastWeatherDetails } =
        await getWeatherData(cityName, tempUnit);
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
