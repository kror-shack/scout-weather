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
  //console.log(cityNameList);

  function handleButtonClick(cityName: string) {
    //console.log("in the handling of the auto complete button list");
    //console.log(cityName);
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

  return (
    <div>
      <div className="Autocomplete-list">
        <button
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => handleLocationOnClick()}
        >
          <p>Use Your Location</p>
          <svg
            width="18"
            height="24"
            viewBox="0 0 20 28"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.94433 1.31149C8.00317 -0.465819 11.763 -0.434754 14.7931 1.39286C17.7935 3.2577 19.617 6.58589 19.6 10.1661C19.5302 13.7228 17.5748 17.0661 15.1306 19.6507C13.7199 21.1491 12.1418 22.4741 10.4285 23.5986C10.2521 23.7006 10.0588 23.7689 9.8582 23.8001C9.66515 23.7919 9.47716 23.7349 9.31117 23.6342C6.69548 21.9445 4.40072 19.7878 2.5373 17.2677C0.978036 15.164 0.092171 12.6225 1.62644e-06 9.98825C-0.00202257 6.40118 1.88549 3.08879 4.94433 1.31149ZM6.71236 11.473C7.2269 12.7415 8.44141 13.5689 9.78882 13.5689C10.6715 13.5752 11.5201 13.2217 12.1453 12.587C12.7706 11.9523 13.1207 11.0892 13.1176 10.19C13.1223 8.81752 12.3142 7.5775 11.0708 7.04894C9.82727 6.52039 8.39362 6.80755 7.43919 7.77635C6.48476 8.74515 6.19783 10.2045 6.71236 11.473Z"
              fill="#00BABA"
            />
            <path
              opacity="0.4"
              d="M16.7994 26.6C16.7994 27.3732 13.6654 28 9.79936 28C5.93334 28 2.79932 27.3732 2.79932 26.6C2.79932 25.8268 5.93334 25.2 9.79936 25.2C13.6654 25.2 16.7994 25.8268 16.7994 26.6Z"
              fill="#00BABA"
            />
          </svg>
        </button>
        {cityNameList ? (
          cityNameList.map((listElement, i) => {
            return (
              <button
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleButtonClick(listElement.city)}
                key={listElement.id}
              >
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
    </div>
  );
};

export default AutoCompleteList;
