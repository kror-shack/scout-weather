import React, { useEffect, useState } from "react";
import "./IconMain.scss";
import { ReactComponent as DayClearSkySvg } from "../../../icons/animated/day-clear-sky.svg";
import { ReactComponent as NightClearSkySvg } from "../../../icons/animated/night-clear-sky.svg";
import { ReactComponent as DayPartlyCloudySvg } from "../../../icons/animated/day-partly-cloudy.svg";
import { ReactComponent as NightPartlyCloudySvg } from "../../../icons/animated/night-partly-cloudy.svg";
import { ReactComponent as DayOvercastSvg } from "../../../icons/animated/day-overcast.svg";
import { ReactComponent as NightOvercastSvg } from "../../../icons/animated/night-overcast.svg";
import { ReactComponent as DayFogSvg } from "../../../icons/animated/day-fog.svg";
import { ReactComponent as NightFogSvg } from "../../../icons/animated/night-fog.svg";
import { ReactComponent as DayLightDrizzleSvg } from "../../../icons/animated/day-light-drizzle.svg";
import { ReactComponent as NightLightDrizzleSvg } from "../../../icons/animated/night-light-drizzle.svg";
import { ReactComponent as DayHeavyDrizzleSvg } from "../../../icons/animated/dag-heavy-drizzle.svg";
import { ReactComponent as NightHeavyDrizzleSvg } from "../../../icons/animated/night-heavy-drizzle.svg";
import { ReactComponent as DayLightRainSvg } from "../../../icons/animated/day-light-rain.svg";
import { ReactComponent as NightLightRainSvg } from "../../../icons/animated/night-light-rain.svg";
import { ReactComponent as DayHeavyRainSvg } from "../../../icons/animated/day-heavy-rain.svg";
import { ReactComponent as NightHeavyRainSvg } from "../../../icons/animated/night-heavy-rain.svg";
import { ReactComponent as DayLightSnowSvg } from "../../../icons/animated/day-light-snow.svg";
import { ReactComponent as NightLightSnowSvg } from "../../../icons/animated/night-light-snow.svg";
import { ReactComponent as DayHeavySnowSvg } from "../../../icons/animated/day-heavy-snow.svg";
import { ReactComponent as NightHeavySnowSvg } from "../../../icons/animated/night-heavy-snow.svg";
import { ReactComponent as DayThunderstormSvg } from "../../../icons/animated/day-thunderstorm.svg";
import { ReactComponent as NightThunderstormSvg } from "../../../icons/animated/night-thunderstorm.svg";
import { ReactComponent as DayThunderstormLightHailSvg } from "../../../icons/animated/day-thunderstorm-light-hail.svg";
import { ReactComponent as NightThunderstormLightHailSvg } from "../../../icons/animated/night-thunderstorm--light-hail.svg";
import { ReactComponent as DayThunderstormHeavyHailSvg } from "../../../icons/animated/day-thundersorm-heavy-hail.svg";
import { ReactComponent as NightThunderstormHeavyHailSvg } from "../../../icons/animated/night-thundersorm-heavy-hail.svg";
import { ReactComponent as CompassSvg } from "../../../icons/animated/compass.svg";
import {
  getCurrentHour,
  isDay,
} from "../../../utils/formatHelperFunctions/formatHelperFunctions";

type Props = {
  weatherCode: number;
  sunrise: string;
  sunset: string;
};

const IconMain = ({ weatherCode, sunrise, sunset }: Props) => {
  const [selectedIcon, setSelectedIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    console.log("This is the weatehr code");
    console.log(weatherCode);
    let isDayTime = isDay(sunrise, sunset);

    if (isDayTime !== undefined) {
      switch (weatherCode) {
        case 0:
        case 1:
          //Clear sky

          if (isDayTime) {
            setSelectedIcon(<DayClearSkySvg />);
          } else {
            setSelectedIcon(<NightClearSkySvg />);
          }
          break;
        case 2:
          // Partly cloudy
          if (isDayTime) {
            setSelectedIcon(<DayPartlyCloudySvg />);
          } else {
            setSelectedIcon(<NightPartlyCloudySvg />);
          }
          break;
        case 3:
          //Overcast
          if (isDayTime) {
            setSelectedIcon(<DayOvercastSvg />);
          } else {
            setSelectedIcon(<NightOvercastSvg />);
          }
          break;

        case 45:
        case 48:
          //fog
          if (isDayTime) {
            setSelectedIcon(<DayFogSvg />);
          } else {
            setSelectedIcon(<NightFogSvg />);
          }
          break;

        case 51:
        case 53:
        case 56:
          //light and moderate drizzle
          if (isDayTime) {
            setSelectedIcon(<DayLightDrizzleSvg />);
          } else {
            setSelectedIcon(<NightLightDrizzleSvg />);
          }
          break;

        case 55:
        case 57:
          //heavy drizzle
          if (isDayTime) {
            setSelectedIcon(<DayHeavyDrizzleSvg />);
          } else {
            setSelectedIcon(<NightHeavyDrizzleSvg />);
          }
          break;

        case 61:
        case 63:
        case 66:
        case 80:
        case 81:
          //light and moderate rain
          if (isDayTime) {
            setSelectedIcon(<DayLightRainSvg />);
          } else {
            setSelectedIcon(<NightLightRainSvg />);
          }
          break;

        case 65:
        case 67:
        case 82:
          //heavy rain

          if (isDayTime) {
            setSelectedIcon(<DayHeavyRainSvg />);
          } else {
            setSelectedIcon(<NightHeavyRainSvg />);
          }
          break;

        case 71:
        case 73:
        case 77:
        case 85:
          //light and moderate snow
          if (isDayTime) {
            setSelectedIcon(<DayLightSnowSvg />);
          } else {
            setSelectedIcon(<NightLightSnowSvg />);
          }
          break;

        case 75:
        case 86:
          //heavy snow
          if (isDayTime) {
            setSelectedIcon(<DayHeavySnowSvg />);
          } else {
            setSelectedIcon(<NightHeavySnowSvg />);
          }
          break;

        case 96:
          //thunderstorm with slight hail
          if (isDayTime) {
            setSelectedIcon(<DayThunderstormLightHailSvg />);
          } else {
            setSelectedIcon(<NightThunderstormLightHailSvg />);
          }
          break;

        case 99:
          //thunderstorm with heavy hail
          if (isDayTime) {
            setSelectedIcon(<DayThunderstormHeavyHailSvg />);
          } else {
            setSelectedIcon(<NightThunderstormHeavyHailSvg />);
          }
          break;

        default:
          //"Unknown code";
          setSelectedIcon(<CompassSvg />);
          break;
      }
    } else {
      setSelectedIcon(<CompassSvg />);
    }
  }, [weatherCode]);

  return <div className="Icon">{selectedIcon}</div>;
};

export default IconMain;
