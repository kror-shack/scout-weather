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
  sunrise: string;
  sunset: string;
};

const HourlyDetails = ({ hourlyDetails, sunrise, sunset }: Props) => {
  return (
    <section className="Hourly-Details-container">
      <div className="Hourly-Details">
        {Object.keys(hourlyDetails.hourly).map((hour) => (
          <div key={hourlyDetails.hourly[hour].key}>
            <p>{hour}</p>
            <IconHourly
              weatherCode={hourlyDetails.hourly[hour].weatherCode}
              hour={hour}
              sunrise={sunrise}
              sunset={sunset}
            />

            <p>{` ${hourlyDetails.hourly[hour].temp}`}&deg;</p>
            <div className="percipitation">
              <PercetpationSvg />
              <p>{hourlyDetails.hourly[hour].percipiation_probability}%</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HourlyDetails;
