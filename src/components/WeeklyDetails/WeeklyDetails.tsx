import { ForecastDetails } from "../../types/types";

import "./WeeklyDetails.scss";

type Props = {
  weeklyDetails: ForecastDetails;
};

const WeeklyDetails = ({ weeklyDetails }: Props) => {
  return (
    <div className="Weekly-Details">
      {Object.keys(weeklyDetails)
        .filter((item) => {
          const excludedDays = [
            "next24HourTempDetails",
            "yesterdayTempDetails",
          ];
          return !excludedDays.includes(item);
        })
        .map((day) => (
          <div key={weeklyDetails[day].key}>
            <p>{weeklyDetails[day].dayName}</p>
            <p>
              {weeklyDetails[day].max_temp} / {weeklyDetails[day].min_temp}
            </p>
            <p>{weeklyDetails[day].weatherCode.overall}</p>
          </div>
        ))}
    </div>
  );
};

export default WeeklyDetails;
