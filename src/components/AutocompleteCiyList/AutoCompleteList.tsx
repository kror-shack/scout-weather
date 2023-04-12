import React, { useEffect, useState } from "react";
import "./AutoCompleteList.scss";
import getUserLocation from "../../utils/getUserLocation";
import { CityDetails } from "../../types/types";

type CityData = {
  city: string;
  countryCode: string;
  id: number;
};

type Props = {
  cityNameList: CityData[] | undefined;
  setCityDetails: React.Dispatch<React.SetStateAction<CityDetails>>;
};

const AutoCompleteList = ({ cityNameList, setCityDetails }: Props) => {
  const [location, setLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>();
  console.log(cityNameList);

  function handleButtonClick(cityName: string) {
    setCityDetails((prev) => ({
      ...prev,
      name: cityName,
    }));
  }

  function handleLocationOnClick() {
    getUserLocation(setLocation);
    if (location) {
      setCityDetails((prev) => ({
        ...prev,
        lat: location.lat,
        lon: location.lon,
      }));
    }
  }

  useEffect(() => {
    if (location) {
      setCityDetails((prev) => ({
        ...prev,
        lat: location.lat,
        lon: location.lon,
      }));
    }
  }, [location]);

  return (
    <div className="Autocomplete-list">
      <button onClick={() => handleLocationOnClick()}>Use Your Location</button>
      {cityNameList
        ? cityNameList.map((listElement, i) => {
            return (
              <button
                onClick={() => handleButtonClick(listElement.city)}
                key={listElement.id}
              >
                {listElement.city}, {listElement.countryCode}
              </button>
            );
          })
        : ""}
    </div>
  );
};

export default AutoCompleteList;
