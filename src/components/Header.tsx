import React, { useState } from "react";

type CityName = {
  cityName: string | undefined;
};

type Props = {
  setCityName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const Header = ({ setCityName }: Props) => {
  const [searchTitle, setSearchTitle] = useState<string | undefined>();

  function handleSearchInputChange(e: React.FormEvent<HTMLInputElement>) {
    setSearchTitle(e.currentTarget.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCityName(searchTitle);
    setSearchTitle("");
  }

  return (
    <div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          onChange={(e) => handleSearchInputChange(e)}
          type="text"
          value={searchTitle}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default Header;
