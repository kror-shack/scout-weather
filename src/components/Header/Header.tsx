import React, { useCallback, useEffect, useRef, useState } from "react";
import getCitiesWithAutocomplete from "../../utils/getCitiesWithAutocomplete";
import "./Header.scss";
import debounce from "lodash.debounce";
import AutoCompleteList from "../AutocompleteCiyList/AutoCompleteList";
import { CityDetails } from "../../types/types";

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
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);

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
    setShowAutoCompleteList(false);
  }
  function handleInputChange(inputValue: string | undefined) {
    console.log(inputValue);
    setSearchTitle(inputValue);
    setShowAutoCompleteList(true);
    console.log(`this is the search title value: ${searchTitle}`);
    debouncedSearch(inputValue);
  }

  //to empty the search bar after searching
  useEffect(() => {
    setSearchTitle("");
    setShowAutoCompleteList(false);
  }, [cityDetails]);

  return (
    <div className="Header">
      <div>
        <svg
          width="35"
          height="27"
          viewBox="0 0 35 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.1528 11.25H1.84722C0.82703 11.25 0 12.207 0 13.3875V13.6125C0 14.793 0.82703 15.75 1.84722 15.75H33.1528C34.173 15.75 35 14.793 35 13.6125V13.3875C35 12.207 34.173 11.25 33.1528 11.25Z"
            fill="white"
          />
          <path
            d="M33.1528 22.5002H1.84722C0.82703 22.5002 0 23.4572 0 24.6377V24.8627C0 26.0433 0.82703 27.0002 1.84722 27.0002H33.1528C34.173 27.0002 35 26.0433 35 24.8627V24.6377C35 23.4572 34.173 22.5002 33.1528 22.5002Z"
            fill="white"
          />
          <path
            d="M33.1528 0H1.84722C0.82703 0 0 0.956991 0 2.1375V2.3625C0 3.54301 0.82703 4.5 1.84722 4.5H33.1528C34.173 4.5 35 3.54301 35 2.3625V2.1375C35 0.956991 34.173 0 33.1528 0Z"
            fill="white"
          />
        </svg>
      </div>
      <div className="Title">
        <h1>Weather</h1>
      </div>
      <div className="search-bar">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(event) => handleInputChange(event.target.value)}
            value={searchTitle}
            type="text"
          />
        </form>
        {showAutoCompleteList ? (
          <AutoCompleteList
            cityNameList={autoCompletedList}
            setCityDetails={setCityDetails}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Header;
