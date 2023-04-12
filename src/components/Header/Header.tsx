import React, { useCallback, useEffect, useRef, useState } from "react";
import getCitiesWithAutocomplete from "../../utils/getCitiesWithAutocomplete";
import "./Header.scss";
import debounce from "lodash.debounce";
import AutoCompleteList from "../AutocompleteCiyList/AutoCompleteList";
import { CityDetails } from "../../types/types";
import { time } from "console";

type Props = {
  setCityDetails: React.Dispatch<React.SetStateAction<CityDetails>>;
  cityDetails: CityDetails | undefined;
};

type CityData = {
  city: string;
  countryCode: string;
  id: number;
};

const Header = ({ cityDetails, setCityDetails }: Props) => {
  const [searchTitle, setSearchTitle] = useState<string | undefined>();
  const [autoCompletedList, setAutoCompletedList] = useState<CityData[]>();

  const debouncedSearch = useCallback(
    debounce(async (inputValue: string | undefined) => {
      console.log("debounce funciton has been called");
      if (inputValue) {
        setAutoCompletedList([]);
        if (inputValue.length > 3) {
          let cityList = await getCitiesWithAutocomplete(inputValue);
          setAutoCompletedList(cityList);
        }
      }
    }, 1500),
    []
  );

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCityDetails((prev) => ({
      ...prev,
      name: searchTitle,
    }));
  }
  function handleInputChange(inputValue: string | undefined) {
    console.log(inputValue);
    setSearchTitle(inputValue);
    console.log(`this is the search title value: ${searchTitle}`);
    debouncedSearch(inputValue);
  }

  //to empty the search bar after searching
  useEffect(() => {
    setSearchTitle("");
  }, [cityDetails]);

  return (
    <div className="Header">
      <h1>Weather</h1>
      <div className="search-bar">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(event) => handleInputChange(event.target.value)}
            value={searchTitle}
            type="text"
          />
        </form>
        <AutoCompleteList
          cityNameList={autoCompletedList}
          setCityDetails={setCityDetails}
        />
      </div>
    </div>
  );
};

export default Header;
