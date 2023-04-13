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
  searchTitle: string | undefined;
};

const AutoCompleteList = ({
  cityNameList,
  setCityDetails,
  searchTitle,
}: Props) => {
  const [location, setLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>();
  console.log(cityNameList);

  function handleButtonClick(cityName: string) {
    console.log("in the handling of the auto complete button list");
    console.log(cityName);
    setCityDetails((prev) => ({
      ...prev,
      name: cityName,
    }));
  }

  function handleLocationOnClick() {
    console.log("handling the locaiton on click");
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
      {cityNameList ? (
        cityNameList.map((listElement, i) => {
          return (
            <button
              onClick={() => handleButtonClick(listElement.city)}
              key={listElement.id}
            >
              <p>this be a button</p>
              {listElement.city}, {listElement.countryCode}
            </button>
          );
        })
      ) : searchTitle ? (
        <button>searching</button>
      ) : (
        ""
      )}
    </div>
  );
};

export default AutoCompleteList;
