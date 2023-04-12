import {
  CityDetails,
  TodayWeatherMainDetails,
  DailyWeatherDetails,
  HourlyWeatherDetails,
} from "../../types/types";

import "./HourlyDetails.scss";

type Props = {
  hourlyDetails: DailyWeatherDetails;
};

const HourlyDetails = ({ hourlyDetails }: Props) => {
  return (
    <div className="Hourly-Details">
      {Object.keys(hourlyDetails.hourly).map((hour) => (
        <div key={hourlyDetails.hourly[hour].key}>
          <p>{hour}</p>
          <p>{` ${hourlyDetails.hourly[hour].temp}`}&deg;</p>
        </div>
      ))}
    </div>
  );
};

export default HourlyDetails;
