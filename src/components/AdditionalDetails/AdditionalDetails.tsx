import { DailyWeatherDetails } from "../../types/types";
import "./AdditionalDetails.scss";

type Props = {
  additionalDetails: DailyWeatherDetails;
};

const AdditionalDetails = ({ additionalDetails }: Props) => {
  return (
    <div className="Additional-Details">
      <p>Sunrise: {additionalDetails.sunrise}</p>
      <p>Sunset: {additionalDetails.sunset}</p>
      <p>UV: {additionalDetails.uvMax}</p>
    </div>
  );
};

export default AdditionalDetails;
