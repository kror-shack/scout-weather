import React, { useState } from "react";
import getWeatherData from "./getWeatherData";
import formatHourlyTime from "./helper-functions/formatHourlyTime";

type Props = {
  cityName: string | undefined;
};

const DisplayPageBody = ({ cityName }: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  function handleButtonClick() {
    if (cityName) console.log(getWeatherData(cityName));
  }

  return (
    <div>
      <p>{cityName}</p>
      <button onClick={() => handleButtonClick()}>Fetch Data</button>
    </div>
  );
};

export default DisplayPageBody;
