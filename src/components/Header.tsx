import React, { useEffect, useRef, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import getCitiesWithAutocomplete from "./functions/getCitiesWithAutocomplete";
import "../styles/Header.scss";
import AutoCompleteList from "./AutoCompleteList";
import { CityDetails } from "./shared-types/types";

type Props = {
  setCityDetails: React.Dispatch<React.SetStateAction<CityDetails>>;
};

type CityData = {
  city: string;
  countryCode: string;
  id: number;
};

const Header = ({ setCityDetails }: Props) => {
  const [searchTitle, setSearchTitle] = useState<string | undefined>();
  const [autoCompletedList, setAutoCompletedList] = useState<CityData[]>();
  const [cityDefinedState, setCityDefinedState] = useState<boolean>(true);
  const inputElement = useRef<any>(null);

  async function handleSearchInputChange(inputValue: string) {
    setSearchTitle(inputValue);
    setAutoCompletedList([]);
    console.log("on change input ");
    if (inputValue.length > 3) {
      let cityList = await getCitiesWithAutocomplete(inputValue);
      setAutoCompletedList(cityList);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCityDetails((prev) => ({
      ...prev,
      name: searchTitle,
    }));
    setCityDefinedState((prev) => !prev);
  }

  //to empty the search bar after searching
  useEffect(() => {
    console.log("in the use effect functionnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    if (inputElement) {
      console.log("this is the value of the input feild");
      console.log(inputElement!.current!.value);
      console.log("the conditionalllllllllllllllllllll");
      inputElement!.current!.value = "khjdshfjkhfdsh";
      inputElement!.current!.textContent = "not lorem ispum";
    }
    //use ref does not re render
  }, [cityDefinedState]);

  return (
    <div className="Header">
      <h1>Weather</h1>
      <div className="search-bar">
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <DebounceInput
            ref={inputElement}
            debounceTimeout={1500}
            onChange={(event) => handleSearchInputChange(event.target.value)}
            type="text"
          />
        </form>
        <AutoCompleteList
          cityNameList={autoCompletedList}
          setCityDetails={setCityDetails}
          setCityDefinedState={setCityDefinedState}
        />
      </div>
    </div>
  );
};

export default Header;
