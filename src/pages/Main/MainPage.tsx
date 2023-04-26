import React, { useEffect, useState } from "react";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import { CityDetails, Temp } from "../../types/types";
import "./MainPage.scss";

function DisplayPage() {
  const [cityDetails, setCityDetails] = useState<CityDetails | undefined>();
  const [tempUnit, setTempUnit] = useState<Temp>("C");

  useEffect(() => {
    setCityDetails((prev) => ({
      ...prev,
      name: "Munich",
    }));
  }, []);

  return (
    <div className="Main-Page">
      <Header cityDetails={cityDetails} setCityDetails={setCityDetails} />
      <Body cityDetails={cityDetails} tempUnit={tempUnit} />
    </div>
  );
}

export default DisplayPage;
