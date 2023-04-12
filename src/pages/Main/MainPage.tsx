import React, { useEffect, useState } from "react";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import { CityDetails, Temp } from "../../types/types";

function DisplayPage() {
  const [cityDetails, setCityDetails] = useState<CityDetails | undefined>();
  const [tempUnit, setTempUnit] = useState<Temp>("C");
  return (
    <div>
      <Header cityDetails={cityDetails} setCityDetails={setCityDetails} />
      <Body cityDetails={cityDetails} tempUnit={tempUnit} />
    </div>
  );
}

export default DisplayPage;
