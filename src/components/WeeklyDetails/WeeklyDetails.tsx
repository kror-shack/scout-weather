import { useState } from "react";
import { ForecastDetails } from "../../types/types";
import IconHourly from "../Icons/IconHourly/IconHourly";
import { ReactComponent as PercetpationSvg } from "../../icons/static/percepitation.svg";
import { ReactComponent as WindSvg } from "../../icons/animated/wind.svg";
import { ReactComponent as SunriseSvg } from "../../icons/static/sunrise.svg";
import { ReactComponent as SunsetSvg } from "../../icons/static/sunset.svg";
import { ReactComponent as SunSvg } from "../../icons/static/day-clear-sky.svg";

import "./WeeklyDetails.scss";

type Props = {
  weeklyDetails: ForecastDetails;
};

const WeeklyDetails = ({ weeklyDetails }: Props) => {
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(1);

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
    <section className="Weekly-Details">
      {Object.keys(weeklyDetails)
        .filter((item) => {
          const excludedDays = [
            "next24HourTempDetails",
            // "yesterdayTempDetails",
          ];
          return !excludedDays.includes(item);
        })
        .map((day, index) => (
          <div
            onClick={index !== 0 ? () => handleDayClick(index) : () => {}}
            key={weeklyDetails[day].key}
            className="daily-details"
          >
            <div className="day">
              <div>
                <p>{weeklyDetails[day].dayName}</p>
              </div>
              <div className="percepitation-container">
                {index !== 0 ? <PercetpationSvg /> : ""}
              </div>
              <div>
                {index !== 0 ? (
                  <p>{weeklyDetails[day].preception.overall} %</p>
                ) : (
                  ""
                )}
              </div>
              {index !== 0 ? (
                <div className="icons">
                  <IconHourly
                    weatherCode={weeklyDetails[day].weatherCode.morning}
                    hour="morning"
                  />
                  <IconHourly
                    weatherCode={weeklyDetails[day].weatherCode.night}
                    hour="night"
                  />
                </div>
              ) : (
                ""
              )}
              <div className="min-max">
                <p>
                  {weeklyDetails[day].max_temp}&deg; / {""}
                  {weeklyDetails[day].min_temp}&deg;
                </p>
              </div>
            </div>
            <div>
              <div className={dropdownIndex === index ? "hourly" : "hide"}>
                {dropdownIndex === index &&
                  Object.keys(weeklyDetails[day].hourly).map((hour) => (
                    <div key={weeklyDetails[day].hourly[hour].key}>
                      <p>{hour}</p>
                      <div className="percipitation">
                        <PercetpationSvg />
                        <p>
                          {
                            weeklyDetails[day].hourly[hour]
                              .percipiation_probability
                          }
                          %
                        </p>
                      </div>
                      <IconHourly
                        weatherCode={
                          weeklyDetails[day].hourly[hour].weatherCode
                        }
                        hour={hour}
                        sunrise={weeklyDetails[day].sunrise}
                        sunset={weeklyDetails[day].sunset}
                      />
                      <p>{` ${weeklyDetails[day].hourly[hour].temp}`}&deg;</p>
                    </div>
                  ))}
                <div className="details">
                  <div className="uv-container">
                    <h4>UV Index</h4>

                    <SunSvg />
                    <p>{weeklyDetails[day].uvMax} UV</p>
                  </div>

                  <div className="sun-times">
                    <h4>Sunrise & Sunset</h4>
                    <div className="icons">
                      <SunriseSvg />
                      <SunsetSvg />
                    </div>
                    <div>
                      <p>{weeklyDetails[day].sunrise}</p>
                      <p>-</p>
                      <p> {weeklyDetails[day].sunset}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default WeeklyDetails;
