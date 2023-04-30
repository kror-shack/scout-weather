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
    <div className="Weekly-Details">
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
                {index !== 0 ? (
                  <svg
                    width="10"
                    height="12"
                    viewBox="0 0 10 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M0 6.35858C0 7.06424 0.176414 7.72387 0.536913 8.32982C0.897411 8.93576 1.38063 9.42665 1.99425 9.78715C2.60786 10.1476 3.2675 10.3317 3.98082 10.3317C4.69415 10.3317 5.36146 10.1476 5.98274 9.78715C6.60403 9.42665 7.09492 8.93576 7.45542 8.32982C7.81592 7.7162 8 7.06424 8 6.35858C8 5.89837 7.86961 5.35379 7.60115 4.71716C7.33269 4.08054 7.01055 3.48993 6.63471 2.95302C6.29722 2.51582 5.89837 2.0326 5.43816 1.51103C4.97795 0.989454 4.17258 0.184084 3.98849 0L3.00671 0.989453C2.53116 1.44966 2.07095 1.97891 1.63375 2.58485C1.19655 3.1908 0.813039 3.84276 0.490891 4.54075C0.153403 5.23873 0 5.84468 0 6.35858Z" />
                  </svg>
                ) : (
                  ""
                )}
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
    </div>
  );
};

export default WeeklyDetails;
