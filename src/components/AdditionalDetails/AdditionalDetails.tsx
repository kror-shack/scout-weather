import { DailyWeatherDetails } from "../../types/types";
import "./AdditionalDetails.scss";
import { ReactComponent as WindSvg } from "../../icons/animated/wind.svg";
import { ReactComponent as SunriseSvg } from "../../icons/animated/sunrise.svg";

import { ReactComponent as SunsetSvg } from "../../icons/animated/sunset.svg";

type Props = {
  additionalDetails: DailyWeatherDetails;
  wind: number;
};

const AdditionalDetails = ({ additionalDetails, wind }: Props) => {
  return (
    <div className="Additional-Details">
      <div className="wind-container">
        <h4>Wind</h4>
        <WindSvg />
        <p>{wind} m/s</p>
      </div>

      <div className="sun-times">
        <h4>Sunrise & Sunset</h4>
        <div className="icons">
          <SunriseSvg />
          <SunsetSvg />
        </div>
        <div>
          <p>{additionalDetails.sunrise}</p>
          <p>-</p>
          <p> {additionalDetails.sunset}</p>
        </div>
      </div>
    </div>
  );
};

export default AdditionalDetails;
