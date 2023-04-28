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
import Sidebar from "../Sidebar/Sidebar";

type TempUnits = "C" | "F";

type Props = {
  cityDetails: CityDetails | undefined;
  tempUnit: TempUnits;
  setError: React.Dispatch<React.SetStateAction<boolean>>;
  showSidebar: boolean;
  setTempUnit: React.Dispatch<React.SetStateAction<TempUnits>>;
};

const Body = ({
  cityDetails,
  tempUnit,
  setError,
  showSidebar,
  setTempUnit,
}: Props) => {
  const [cityData, setCityData] = useState<[] | undefined>();
  const [hourlyWeatherDetails, setHourlyWeatherDetails] =
    useState<DailyWeatherDetails>();
  const [mainWeatherDetials, setMainWeatherDetails] =
    useState<TodayWeatherMainDetails>();
  const [weeklyWeatherDetails, setWeeeklyWeatherDetails] =
    useState<ForecastDetails>();

  async function getCityWeatherData() {
    if (cityDetails) {
      //console.log("in the clickkkk functijon");
      let { todayWeatherMainDetails, forecastWeatherDetails } =
        await getWeatherData({ cityDetails, tempUnit, setError });
      setMainWeatherDetails(todayWeatherMainDetails);
      setHourlyWeatherDetails(forecastWeatherDetails.next24HourTempDetails);
      setWeeeklyWeatherDetails(forecastWeatherDetails);
      //console.log(todayWeatherMainDetails);

      //console.log(forecastWeatherDetails);
    }
  }

  useEffect(() => {
    getCityWeatherData();
  }, [cityDetails, tempUnit]);
  return (
    <div className="Body">
      {mainWeatherDetials ? (
        <MainDetails mainDetails={mainWeatherDetials} tempUnit={tempUnit} />
      ) : (
        ""
      )}
      {hourlyWeatherDetails && mainWeatherDetials ? (
        <HourlyDetails
          hourlyDetails={hourlyWeatherDetails}
          sunrise={mainWeatherDetials.sunrise}
          sunset={mainWeatherDetials?.sunset}
        />
      ) : (
        ""
      )}
      {mainWeatherDetials && weeklyWeatherDetails ? (
        <Suggestions
          weatherCode={mainWeatherDetials.weatherCode}
          uvIndex={mainWeatherDetials.uvMax}
          yesterdayMax={weeklyWeatherDetails.yesterdayTempDetails.max_temp}
          yesterdayMin={weeklyWeatherDetails.yesterdayTempDetails.min_temp}
          todayMax={mainWeatherDetials.maxTemp}
          todayMin={mainWeatherDetials.minTemp}
        />
      ) : (
        ""
      )}
      {weeklyWeatherDetails ? (
        <WeeklyDetails weeklyDetails={weeklyWeatherDetails} />
      ) : (
        ""
      )}
      {weeklyWeatherDetails && mainWeatherDetials ? (
        <AdditionalDetails
          additionalDetails={weeklyWeatherDetails.todayTempDetails}
          wind={mainWeatherDetials.wind}
        />
      ) : (
        ""
      )}
      <Sidebar
        showSidebar={showSidebar}
        setTempUnit={setTempUnit}
        tempUnit={tempUnit}
      />
    </div>
  );
};

export default Body;
