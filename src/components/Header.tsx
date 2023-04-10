import React, { useState } from "react";
import { DebounceInput } from "react-debounce-input";
import getCitiesWIthAutocomplete from "./functions/getCitiesWithAutocomplete";
import "../styles/Header.scss";

type CityName = {
  cityName: string | undefined;
};

type Props = {
  setCityName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Header = ({ setCityName }: Props) => {
  const [searchTitle, setSearchTitle] = useState<string | undefined>();

  function handleSearchInputChange(e: string) {
    setSearchTitle(e);
    console.log("on change input ");
    if (e.length > 3) {
      getCitiesWIthAutocomplete(e);
    }
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCityName(searchTitle);
    setSearchTitle("");
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <DebounceInput
          debounceTimeout={1500}
          onChange={(event) => handleSearchInputChange(event.target.value)}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
