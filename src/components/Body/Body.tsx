import React, { useEffect, useState } from "react";
import getWeatherData from "../../utils/getWeatherData";
import {
  CityDetails,
  TodayWeatherMainDetails,
  DailyWeatherDetails,
  ForecastDetails,
} from "../../types/types";
import MainDetails from "../MainDetails/MainDetails";
import "./Body.scss";
import HourlyDetails from "../HourlyDetails/HourlyDetails";
import Suggestions from "../Suggestions/Suggestions";
import WeeklyDetails from "../WeeklyDetails/WeeklyDetails";
import AdditionalDetails from "../AdditionalDetails/AdditionalDetails";

type TempUnits = "C" | "F";

type Props = {
  cityDetails: CityDetails | undefined;
  tempUnit: TempUnits;
};

const Body = ({ cityDetails, tempUnit }: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  const [hourlyWeatherDetails, setHourlyWeatherDetails] =
    useState<DailyWeatherDetails>();
  const [mainWeatherDetials, setMainWeatherDetails] =
    useState<TodayWeatherMainDetails>();
  const [weeklyWeatherDetails, setWeeeklyWeatherDetails] =
    useState<ForecastDetails>();

  async function getCityWeatherData() {
    if (cityDetails) {
      console.log("in the clickkkk functijon");
      let { todayWeatherMainDetails, forecastWeatherDetails } =
        await getWeatherData({ cityDetails, tempUnit });
      setMainWeatherDetails(todayWeatherMainDetails);
      setHourlyWeatherDetails(forecastWeatherDetails.next24HourTempDetails);
      setWeeeklyWeatherDetails(forecastWeatherDetails);
      console.log(todayWeatherMainDetails);

      console.log(forecastWeatherDetails);
    }
  }

  async function handleSomething() {
    try {
      let response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?appid=0bfd43c822d3aebccceaae1fd3fb1173&id=80
`,
        { mode: "cors" }
      );
      let data = await response.json();
      console.log("this is the weather code description");
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getCityWeatherData();
  }, [cityDetails]);
  return (
    <div className="Body">
      {/* <p>
        {cityDetails ? ("name" in cityDetails ? cityDetails.name : "") : ""}
      </p> */}
      {mainWeatherDetials ? (
        <MainDetails mainDetails={mainWeatherDetials} />
      ) : (
        ""
      )}
      {hourlyWeatherDetails ? (
        <HourlyDetails hourlyDetails={hourlyWeatherDetails} />
      ) : (
        ""
      )}
      <Suggestions />
      {weeklyWeatherDetails ? (
        <WeeklyDetails weeklyDetails={weeklyWeatherDetails} />
      ) : (
        ""
      )}
      {weeklyWeatherDetails ? (
        <AdditionalDetails
          additionalDetails={weeklyWeatherDetails.todayTempDetails}
        />
      ) : (
        ""
      )}
      <button onClick={handleSomething}>Handle something</button>
    </div>
  );
};

export default Body;
