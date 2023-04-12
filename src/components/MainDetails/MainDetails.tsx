import { TodayWeatherMainDetails } from "../../types/types";
import "./MainDetails.scss";

type Props = {
  mainDetails: TodayWeatherMainDetails;
};

const MainDetails = ({ mainDetails }: Props) => {
  return (
    <div className="Main-Details">
      <h2>{mainDetails.name}</h2>
      <p>{mainDetails.temp}</p>
      <p>
        {mainDetails.minTemp} / {mainDetails.maxTemp}
      </p>
      <p> Feels Like:{mainDetails.feelsLike}</p>

      <p>UV: {mainDetails.uvMax}</p>
    </div>
  );
};

export default MainDetails;
