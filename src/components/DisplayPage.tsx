import React, { useEffect, useState } from "react";
import DisplayPageBody from "./DisplayPageBody";
import getWeatherData from "./functions/getWeatherData";
import Header from "./Header";
import { CityDetails } from "./shared-types/types";

function DisplayPage() {
  const [cityDetails, setCityDetails] = useState<CityDetails | undefined>();
  const [tempUnit, setTempUnit] = useState<"C" | "F">("C");
  return (
    <div>
      <Header setCityDetails={setCityDetails} />
      <DisplayPageBody cityDetails={cityDetails} tempUnit={tempUnit} />
    </div>
  );
}

export default DisplayPage;
