import { useState } from "react";
import getOtherLocationWeatherData from "../../utils/getOtherLocationWeatherData";
import uniqid from "uniqid";
import "./OtherLocations.scss";
import {
  capitalizeWords,
  getCurrentHour,
} from "../../utils/formatHelperFunctions";
import IconHourly from "../Icons/IconHourly/IconHourly";

type Locations = {
  cityName: string;
  cityTemp: number;
  weatherCode: number;
  key: string;
};

type Props = {
  tempUnit: "C" | "F";
};

const OtherLocations = ({ tempUnit }: Props) => {
  const [locationArr, setLocationArr] = useState<Locations[]>();
  const [inputValue, setInputValue] = useState<string>();

  function handleInputChange(value: string) {
    setInputValue(value);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    try {
      e.preventDefault();
      if (inputValue) {
        let { cityTemp, weatherCode } = await getOtherLocationWeatherData(
          inputValue,
          tempUnit
        );
        console.log("outside the conditional");
        console.log(cityTemp);
        if (!cityTemp || !weatherCode) {
          return;
        } else {
          console.log(cityTemp);
          console.log("inside the conditional");
          const newObject = {
            cityName: capitalizeWords(inputValue),
            cityTemp: cityTemp,
            weatherCode: weatherCode,
            key: uniqid(),
          };
          setLocationArr((prev) => {
            return prev ? [...prev, newObject] : [newObject];
          });
        }
      }
      setInputValue("");
      console.log(locationArr);
    } catch (err) {
      console.error(err);
      alert("city not found");
    }
  }

  function handleDeleteLocation(location: Locations): void {
    for (let i = 0; i < locationArr!.length; i++) {
      let array = locationArr!;

      if (locationArr![i].key === location.key) {
        const newArray = [...array.slice(0, i), ...array.slice(i + 1)];

        setLocationArr(newArray);
        return;
      }
    }
  }
  return (
    <div className="locations">
      <h3>Favourite Locations</h3>
      <ul>
        {locationArr
          ? locationArr.map((location) => {
              return (
                <li key={location.key}>
                  <p>{location.cityName}</p>
                  <div>
                    <IconHourly
                      weatherCode={location.weatherCode}
                      hour="morning"
                    />
                    <p>{location.cityTemp}&deg;</p>
                    <button onClick={() => handleDeleteLocation(location)}>
                      <p>x</p>
                    </button>
                  </div>
                </li>
              );
            })
          : ""}
      </ul>

      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          placeholder="City Name"
          onChange={(e) => handleInputChange(e.target.value)}
          type="text"
          value={inputValue}
        ></input>
        <button>Add Location</button>
      </form>
    </div>
  );
};

export default OtherLocations;
