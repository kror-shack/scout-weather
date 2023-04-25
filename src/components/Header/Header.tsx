import React, { useCallback, useEffect, useRef, useState } from "react";
import getCitiesWithAutocomplete from "../../utils/getCitiesWithAutocomplete";
import "./Header.scss";
import _debounce, { _ } from "lodash.debounce";
import AutoCompleteList from "../AutocompleteCiyList/AutoCompleteList";
import { CityDetails } from "../../types/types";
import "../../index.css";
import getUserLocation from "../../utils/getUserLocation";
import Settings from "../Settings/Settings";
import { ReactComponent as SunriseSvg } from "../../icons/static/sunrise.svg";

type Props = {
  setCityDetails: React.Dispatch<React.SetStateAction<CityDetails>>;
  cityDetails: CityDetails | undefined;
};

type CityData = {
  city: string;
  countryCode: string;
  id: number;
};

type FormSubmit =
  | React.FormEvent<HTMLFormElement>
  | React.MouseEvent<HTMLButtonElement>;

const Header = ({ cityDetails, setCityDetails }: Props) => {
  const [searchTitle, setSearchTitle] = useState<string | undefined>();
  const [autoCompletedList, setAutoCompletedList] = useState<CityData[]>();
  const [showAutoCompleteList, setShowAutoCompleteList] = useState(false);
  const inputElement = useRef<HTMLInputElement>(null);
  const [location, setLocation] = useState<{
    lat: number | null;
    lon: number | null;
  }>();
  const formElement = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const autoCompletelistRef = useRef<HTMLDivElement>(null);

  const debouncedSearch = useCallback(
    _debounce(async (inputValue: string | undefined) => {
      console.log("this is the debounce function running");
      if (inputValue) {
        setAutoCompletedList(undefined);
        if (inputValue.length > 3) {
          let cityList = await getCitiesWithAutocomplete(inputValue);
          setAutoCompletedList(cityList);
        }
      }
    }, 1500),
    []
  );

  function handleSubmit(e: FormSubmit) {
    console.log("handling submit");

    e.preventDefault();
    setCityDetails((prev) => ({
      ...prev,
      name: searchTitle,
    }));
    setShowAutoCompleteList((prev) => !prev);
  }

  function handleInputChange(inputValue: string | undefined) {
    if (inputValue === "") setAutoCompletedList([]);
    setSearchTitle(inputValue);
    debouncedSearch(inputValue);
  }

  function handleInputFoucusState() {
    setShowAutoCompleteList(true);
  }

  function handleInputBlurState() {
    setShowAutoCompleteList(false);
  }

  function handleLocationOnnClick(e: any) {
    e.stopPropagation();
    console.log("handling the locaiton on click");
    // e.stopPropagation();
    getUserLocation(setLocation);
    if (location) {
      setCityDetails((prev) => ({
        lat: location.lat,
        lon: location.lon,
      }));
    }
  }

  useEffect(() => {
    if (location) {
      setCityDetails(() => ({
        lat: location.lat,
        lon: location.lon,
      }));
    }
  }, [location]);

  //to empty the search bar after searching
  useEffect(() => {
    console.log("this  is the use effect running");
    setSearchTitle("");
    setAutoCompletedList(undefined);
    setShowAutoCompleteList(false);
    inputElement.current?.blur();

    debouncedSearch.cancel();
  }, [cityDetails]);

  //add a debounce function
  useEffect(() => {
    function handleResize() {
      console.log("handling resize");
      const inputWidth = inputRef?.current?.offsetWidth;
      if (autoCompletelistRef.current)
        autoCompletelistRef.current.style.width = inputWidth + "px";
    }

    console.log("running the use effect");
    console.log(inputRef.current);
    console.log(autoCompletelistRef);
    // Get the initial width of the search input
    if (inputRef.current && autoCompletelistRef.current) {
      console.log("the typecheck passes for refs");
      const inputWidth = inputRef?.current?.offsetWidth;

      // Set the initial width of the autocomplete list to match the width of the search input
      autoCompletelistRef.current.style.width = inputWidth + "px";

      // Add a resize event listener to the window object to update the width of the autocomplete list

      window.addEventListener("resize", handleResize);

      return () => {
        // window.removeEventListener("resize", handleResize);
      };
    }

    // Remove the resize event listener when the component unmounts
  }, []);

  return (
    <div className="Header">
      <Settings />
      <div>
        <div className="title">
          <h1>WEATHER</h1>
          <SunriseSvg />
        </div>
        <div className="container">
          <div className="search-bar">
            <form
              ref={formElement}
              className="form"
              action=""
              onSubmit={(e) => handleSubmit(e)}
            >
              <input
                ref={inputRef}
                className="form__field"
                onFocus={handleInputFoucusState}
                onBlur={() => handleInputBlurState()}
                onChange={(event) => handleInputChange(event.target.value)}
                value={searchTitle}
                type="text"
                placeholder="Search"
              />

              <button
                onMouseDown={(e) => {
                  e.preventDefault();
                }}
                onClick={
                  showAutoCompleteList
                    ? (e) => {
                        handleSubmit(e);
                      }
                    : (e) => {
                        handleLocationOnnClick(e);
                      }
                }
                type={showAutoCompleteList ? "submit" : "button"}
              >
                {showAutoCompleteList ? (
                  <svg
                    viewBox="0 0 124 123"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M118.913 98.4229L98.1151 77.6249L82.1178 71.0157C87.4444 63.4409 90.2981 54.4041 90.2878 45.1439C90.2878 20.2514 70.0364 0 45.1439 0C20.2514 0 0 20.2514 0 45.1439C0 70.0364 20.2514 90.2878 45.1439 90.2878C54.4847 90.2984 63.5962 87.3954 71.2091 81.9831L77.8011 97.9374L98.5984 118.736C99.9322 120.07 101.516 121.128 103.258 121.85C105.001 122.572 106.869 122.944 108.755 122.944C110.642 122.944 112.51 122.572 114.252 121.851C115.995 121.129 117.579 120.071 118.912 118.737C120.246 117.403 121.304 115.82 122.026 114.077C122.748 112.334 123.12 110.466 123.12 108.58C123.12 106.694 122.749 104.826 122.027 103.083C121.305 101.34 120.247 99.7568 118.913 98.4229ZM8.20798 45.1439C8.20798 24.7778 24.7778 8.20798 45.1439 8.20798C65.5099 8.20798 82.0798 24.7778 82.0798 45.1439C82.0798 65.5099 65.5099 82.0798 45.1439 82.0798C24.7778 82.0798 8.20798 65.5099 8.20798 45.1439ZM113.109 112.933C111.953 114.085 110.388 114.733 108.756 114.733C107.124 114.733 105.558 114.085 104.403 112.933L84.762 93.2919L78.6332 78.4573L93.4684 84.5861L113.109 104.227C114.262 105.382 114.909 106.948 114.909 108.58C114.909 110.212 114.262 111.777 113.109 112.933Z" />
                  </svg>
                ) : (
                  <svg
                    viewBox="0 0 20 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.94433 1.31149C8.00317 -0.465819 11.763 -0.434754 14.7931 1.39286C17.7935 3.2577 19.617 6.58589 19.6 10.1661C19.5302 13.7228 17.5748 17.0661 15.1306 19.6507C13.7199 21.1491 12.1418 22.4741 10.4285 23.5986C10.2521 23.7006 10.0588 23.7689 9.8582 23.8001C9.66515 23.7919 9.47716 23.7349 9.31117 23.6342C6.69548 21.9445 4.40072 19.7878 2.5373 17.2677C0.978036 15.164 0.092171 12.6225 1.62644e-06 9.98825C-0.00202257 6.40118 1.88549 3.08879 4.94433 1.31149ZM6.71236 11.473C7.2269 12.7415 8.44141 13.5689 9.78882 13.5689C10.6715 13.5752 11.5201 13.2217 12.1453 12.587C12.7706 11.9523 13.1207 11.0892 13.1176 10.19C13.1223 8.81752 12.3142 7.5775 11.0708 7.04894C9.82727 6.52039 8.39362 6.80755 7.43919 7.77635C6.48476 8.74515 6.19783 10.2045 6.71236 11.473Z"
                    />
                    <path
                      opacity="0.4"
                      d="M16.7994 26.6C16.7994 27.3732 13.6654 28 9.79936 28C5.93334 28 2.79932 27.3732 2.79932 26.6C2.79932 25.8268 5.93334 25.2 9.79936 25.2C13.6654 25.2 16.7994 25.8268 16.7994 26.6Z"
                      fill="#00BABA"
                    />
                  </svg>
                )}
              </button>
            </form>
            <div ref={autoCompletelistRef}>
              {showAutoCompleteList ? (
                <AutoCompleteList
                  searchTitle={searchTitle}
                  cityNameList={autoCompletedList}
                  setCityDetails={setCityDetails}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
