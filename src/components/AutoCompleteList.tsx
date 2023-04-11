import React, { useState } from "react";
import "../styles/AutoCompleteList.scss";
import { CityDetails } from "./shared-types/types";

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
  console.log(cityNameList);

  function handleButtonClick(cityName: string) {
    setCityDetails((prev) => ({
      ...prev,
      name: cityName,
    }));
  }

  return (
    <div className="Autocomplete-list">
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
