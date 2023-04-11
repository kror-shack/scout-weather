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

  async function handleSomething() {
    try {
      let response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=39.8983168&lon=32.7712768
&appid=0bfd43c822d3aebccceaae1fd3fb1173`,
        { mode: "cors" }
      );
      let data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <p>
        {cityDetails ? ("name" in cityDetails ? cityDetails.name : "") : ""}
      </p>
      <button onClick={() => handleButtonClick()}>Fetch Data</button>
      <button onClick={handleSomething}>THis is a button</button>
    </div>
  );
};

export default DisplayPageBody;
