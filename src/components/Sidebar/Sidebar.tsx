import { useEffect, useState } from "react";
import OtherLocations from "../OtherLocations/OtherLocations";
import "./Sidebar.scss";
import { Link } from "react-router-dom";

type TempUnits = "C" | "F";

type Props = {
  showSidebar: boolean;
  setTempUnit: React.Dispatch<React.SetStateAction<TempUnits>>;
  tempUnit: "C" | "F";
};

const Sidebar = ({ showSidebar, setTempUnit, tempUnit }: Props) => {
  const [componentHasMounted, setComponentHasMounted] = useState(false);

  function handleTempChange() {
    setTempUnit((prev) => {
      if (prev === "C") {
        return "F";
      } else return "C";
    });
  }

  useEffect(() => {
    //to prevent it on running on first load
    if (showSidebar) setComponentHasMounted(true);
  }, [showSidebar]);
  return (
    <div
      className={
        showSidebar ? "Sidebar" : componentHasMounted ? "Sidebar close" : "hide"
      }
    >
      <div className="unit-container">
        <div className="switch-button">
          <input
            onChange={handleTempChange}
            className="switch-button-checkbox"
            type="checkbox"
          ></input>
          <label className="switch-button-label" htmlFor="">
            <span className="switch-button-label-span">Celcius</span>
          </label>
        </div>
      </div>
      <OtherLocations tempUnit={tempUnit} />
      <Link to="./contact">Contact Us</Link>
    </div>
  );
};

export default Sidebar;
