import { useEffect, useState } from "react";
import { TodayWeatherMainDetails } from "../../types/types";
import { getCurrentHour, isDay } from "../../utils/formatHelperFunctions";
import "./MainDetails.scss";

type Props = {
  mainDetails: TodayWeatherMainDetails;
};

const MainDetails = ({ mainDetails }: Props) => {
  const [dayState, setDayState] = useState<boolean>();

  useEffect(() => {
    let isDayBoolean = isDay();
    setDayState(isDayBoolean);
  }, []);

  return (
    <div className="Main-Details">
      <h2>{mainDetails.name}</h2>
      <p>{mainDetails.temp}</p>
      <p>
        {mainDetails.minTemp} / {mainDetails.maxTemp}
      </p>
      <p> Feels Like:{mainDetails.feelsLike}</p>
      <p>UV: {mainDetails.uvMax}</p>
      <p>{mainDetails.description}</p>
      <p>{mainDetails.weatherCode}</p>
    </div>
  );
};

export default MainDetails;
