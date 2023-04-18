/* eslint-disable no-duplicate-case */
// throwing random wrong? error (no-duplicate)
import { useEffect, useState } from "react";
import { checkIfHourIsDay, isDay } from "../../../utils/formatHelperFunctions";
import { ReactComponent as NightClearSvg } from "../../../icons/static/night-clear-sky.svg";
import { ReactComponent as DayClearSvg } from "../../../icons/static/day-clear-sky.svg";

import { ReactComponent as DayPartlyCloudySvg } from "../../../icons/static/day-partly-cloudy.svg";
import { ReactComponent as NightPartlyCloudySvg } from "../../../icons/static/night-partly-cloudy.svg";
import { ReactComponent as DayOvercastSvg } from "../../../icons/static/day-overcast.svg";
import { ReactComponent as NightOvercastSvg } from "../../../icons/static/night-overcast.svg";
import { ReactComponent as DayFogSvg } from "../../../icons/static/day-fog.svg";
import { ReactComponent as NightFogSvg } from "../../../icons/static/night-fog.svg";
import { ReactComponent as DayLightRainSvg } from "../../../icons/static/day-light-rain.svg";
import { ReactComponent as NightLightRainSvg } from "../../../icons/static/night-light-rain.svg";
import { ReactComponent as DayHeavyRainSvg } from "../../../icons/static/day-heavy-rain.svg";
import { ReactComponent as NightHeavyRainSvg } from "../../../icons/static/night-heavy-rain.svg";
import { ReactComponent as DayLightSnowSvg } from "../../../icons/static/day-light-snow.svg";
import { ReactComponent as NightLightSnowSvg } from "../../../icons/static/night-light-snow.svg";
import { ReactComponent as DayLightThunderstormSvg } from "../../../icons/static/day-light-thunderstorm.svg";
import { ReactComponent as NightLightThunderstormSvg } from "../../../icons/static/night-light-thunderstorm.svg";
import { ReactComponent as DayThunderstormHailSvg } from "../../../icons/static/day-thunderstorm-hail.svg";
import { ReactComponent as NightThunderstormHailSvg } from "../../../icons/static/night-thunderstorm-hail.svg";

type Props = {
  weatherCode: number;
  hour: string;
};

const IconHourly = ({ weatherCode, hour }: Props) => {
  const [selectedIcon, setSeletectedIcon] = useState<JSX.Element | null>();

  useEffect(() => {
    let isDayTime;
    isDayTime = checkIfHourIsDay(hour);

    switch (weatherCode) {
      case 0:
      case 1:
        //clear sky
        if (isDayTime) {
          setSeletectedIcon(<DayClearSvg />);
        } else {
          setSeletectedIcon(<NightClearSvg />);
        }
        break;

      case 2:
        //Partly Cloudy
        if (isDayTime) {
          setSeletectedIcon(<DayPartlyCloudySvg />);
        } else {
          setSeletectedIcon(<NightPartlyCloudySvg />);
        }
        break;

      case 3:
        //Overcast
        if (isDayTime) {
          setSeletectedIcon(<DayOvercastSvg />);
        } else {
          setSeletectedIcon(<NightOvercastSvg />);
        }
        break;

      case 45:
      case 48:
        //Fog
        if (isDayTime) {
          setSeletectedIcon(<DayFogSvg />);
        } else {
          setSeletectedIcon(<NightFogSvg />);
        }
        break;

      case 61:
      case 63:
      case 66:
      case 80:
      case 81:
      case 85:
      case 51:
      case 53:
      case 56:
        //Light and moderate rain
        if (isDayTime) {
          setSeletectedIcon(<DayLightRainSvg />);
        } else {
          setSeletectedIcon(<NightLightRainSvg />);
        }
        break;

      case 65:
      case 67:
      case 82:
      case 55:
      case 57:
      case 86:
        //Heavy rain
        if (isDayTime) {
          setSeletectedIcon(<DayHeavyRainSvg />);
        } else {
          setSeletectedIcon(<NightHeavyRainSvg />);
        }
        break;

      case 71:
      case 73:
      case 77:
      case 85:
      case 75:
      case 86:
        //Light and moderate snow
        if (isDayTime) {
          setSeletectedIcon(<DayLightSnowSvg />);
        } else {
          setSeletectedIcon(<NightLightSnowSvg />);
        }
        break;

      case 95:
        //Thunderstorm light or moderate
        if (isDayTime) {
          setSeletectedIcon(<DayLightThunderstormSvg />);
        } else {
          setSeletectedIcon(<NightLightThunderstormSvg />);
        }
        break;

      case 96:
      case 99:
        //Thunderstorm with slight and heavy hail
        if (isDayTime) {
          setSeletectedIcon(<DayThunderstormHailSvg />);
        } else {
          setSeletectedIcon(<NightThunderstormHailSvg />);
        }
        break;

      default:
    }
  }, [weatherCode]);

  return <div>{selectedIcon}</div>;
};

export default IconHourly;
