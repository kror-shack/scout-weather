import React, { useEffect, useState } from "react";
import DisplayPageBody from "./DisplayPageBody";
import getWeatherData from "./getWeatherData";
import Header from "./Header";

function DisplayPage() {
  const [cityName, setCityName] = useState<string | undefined>();
  const [weatherData, setWeatherData] = useState();

  return (
    <div>
      <Header setCityName={setCityName} />
      <DisplayPageBody cityName={cityName} />
    </div>
  );
}

export default DisplayPage;
