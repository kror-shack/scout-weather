import {
  CityDetails,
  TodayWeatherMainDetails,
  DailyWeatherDetails,
  HourlyWeatherDetails,
} from "../../types/types";
import IconHourly from "../Icons/IconHourly/IconHourly";
import { ReactComponent as PercetpationSvg } from "../../icons/static/percepitation.svg";
import "./HourlyDetails.scss";

type Props = {
  hourlyDetails: DailyWeatherDetails;
};

const HourlyDetails = ({ hourlyDetails }: Props) => {
  return (
    <div className="Hourly-Details-container">
      <div className="Hourly-Details">
        {Object.keys(hourlyDetails.hourly).map((hour) => (
          <div key={hourlyDetails.hourly[hour].key}>
            <p>{hour}</p>
            <IconHourly
              weatherCode={hourlyDetails.hourly[hour].weatherCode}
              hour={hour}
            />

            <p>{` ${hourlyDetails.hourly[hour].temp}`}&deg;</p>
            <div className="percipitation">
              <PercetpationSvg />
              <p>{hourlyDetails.hourly[hour].percipiation_probability}%</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyDetails;
