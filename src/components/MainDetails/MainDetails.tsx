import { useEffect, useState } from "react";
import { TodayWeatherMainDetails } from "../../types/types";
import IconMain from "../Icons/IconMain/IconMain";
import "./MainDetails.scss";

type Props = {
  mainDetails: TodayWeatherMainDetails;
};

const MainDetails = ({ mainDetails }: Props) => {
  return (
    <div className="Main-Details">
      <div className="left">
        <div>
          <h2>{mainDetails.temp}&#176;</h2>
          <span>C</span>
        </div>
        <span className="city-name">
          <p>{mainDetails.name}</p>
        </span>
        <div className="min-max">
          <p>
            {mainDetails.minTemp}&#176; / {mainDetails.maxTemp}&#176;
          </p>
          <p> Feels Like: {mainDetails.feelsLike}&#176;</p>
        </div>
        <p>{mainDetails.uvMax} UV</p>
      </div>
      <div className="right">
        <IconMain
          weatherCode={mainDetails.weatherCode}
          sunrise={mainDetails.sunrise}
          sunset={mainDetails.sunset}
        />
        <p>{mainDetails.description}</p>
      </div>
    </div>
  );
};

export default MainDetails;
