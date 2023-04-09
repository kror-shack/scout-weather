import React, { useEffect, useState } from "react";
import DisplayPageBody from "./DisplayPageBody";
import getWeatherData from "./functions/getWeatherData";
import Header from "./Header";

function DisplayPage() {
  const [cityName, setCityName] = useState<string | undefined>();
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C");
  return (
    <div>
      <Header setCityName={setCityName} />
      <DisplayPageBody cityName={cityName} tempUnit={tempUnit} />
    </div>
  );
}

export default DisplayPage;
