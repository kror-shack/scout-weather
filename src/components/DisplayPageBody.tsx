import React, { useState } from "react";
import getWeatherData from "./functions/getWeatherData";
import { CityDetails } from "./shared-types/types";

type TempUnits = "C" | "F";

type Props = {
  cityDetails: CityDetails | undefined;
  tempUnit: TempUnits;
};

const DisplayPageBody = ({ cityDetails, tempUnit }: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  async function handleButtonClick() {
    if (cityDetails) {
      console.log("in the clickkkk functijon");
      let { todayWeatherMainDetails, forecastWeatherDetails } =
        await getWeatherData({ cityDetails, tempUnit });
      console.log(todayWeatherMainDetails);
      console.log(forecastWeatherDetails);
    }
  }

  return (
    <div>
      <p>
        {cityDetails ? ("name" in cityDetails ? cityDetails.name : "") : ""}
      </p>
      <button onClick={() => handleButtonClick()}>Fetch Data</button>
    </div>
  );
};

export default DisplayPageBody;
