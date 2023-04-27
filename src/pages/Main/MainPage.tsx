import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Body from "../../components/Body/Body";
import Header from "../../components/Header/Header";
import { CityDetails, Temp } from "../../types/types";
import "./MainPage.scss";

function DisplayPage() {
  const [cityDetails, setCityDetails] = useState<CityDetails | undefined>();
  const [tempUnit, setTempUnit] = useState<Temp>("C");
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  useEffect(() => {
    setCityDetails((prev) => ({
      ...prev,
      name: "Munich",
    }));
  }, []);

  useEffect(() => {
    if (error) navigate("/404");
  }, [error]);

  return (
    <div className="Main-Page">
      <Header
        cityDetails={cityDetails}
        setCityDetails={setCityDetails}
        setShowSidebar={setShowSidebar}
      />
      <Body
        cityDetails={cityDetails}
        tempUnit={tempUnit}
        setError={setError}
        showSidebar={showSidebar}
        setTempUnit={setTempUnit}
      />
    </div>
  );
}

export default DisplayPage;
