import React, { useEffect, useState } from "react";
import DisplayPageBody from "./DisplayPageBody";
import Header from "./Header";
import { CityDetails, Temp } from "./shared-types/types";

function DisplayPage() {
  const [cityDetails, setCityDetails] = useState<CityDetails | undefined>();
  const [tempUnit, setTempUnit] = useState<Temp>("C");
  return (
    <div>
      <Header cityDetails={cityDetails} setCityDetails={setCityDetails} />
      <DisplayPageBody cityDetails={cityDetails} tempUnit={tempUnit} />
    </div>
  );
}

export default DisplayPage;
