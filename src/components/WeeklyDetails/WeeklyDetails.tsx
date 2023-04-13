import { useState } from "react";
import { ForecastDetails } from "../../types/types";

import "./WeeklyDetails.scss";

type Props = {
  weeklyDetails: ForecastDetails;
};

const WeeklyDetails = ({ weeklyDetails }: Props) => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  function handleDayClick(index: number) {
    // it matches the index with the prev state
    // to check whether a dropDown is already open
    // or to check if the click is on the same
    // container to close it
    setDropdownIndex((prevIndex) => {
      if (prevIndex === index) {
        return null;
      } else {
        return index;
      }
    });
  }

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
        .map((day, index) => (
          <div
            onClick={() => handleDayClick(index)}
            key={weeklyDetails[day].key}
          >
            <div>
              <p>{weeklyDetails[day].dayName}</p>
              <p>
                {weeklyDetails[day].max_temp} / {weeklyDetails[day].min_temp}
              </p>
              <p>{weeklyDetails[day].weatherCode.overall}</p>
            </div>
            <div>
              {dropdownIndex === index &&
                Object.keys(weeklyDetails[day].hourly).map((hour) => (
                  <div key={weeklyDetails[day].hourly[hour].key}>
                    <p>{hour}</p>
                    <p>{` ${weeklyDetails[day].hourly[hour].temp}`}&deg;</p>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default WeeklyDetails;
