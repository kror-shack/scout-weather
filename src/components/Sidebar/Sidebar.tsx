import { useEffect, useState } from "react";
import "./Sidebar.scss";

type TempUnits = "C" | "F";
type Props = {
  showSidebar: boolean;
  setTempUnit: React.Dispatch<React.SetStateAction<TempUnits>>;
};

const Sidebar = ({ showSidebar, setTempUnit }: Props) => {
  const [componentHasMounted, setComponentHasMounted] = useState(false);

  function handleOnChange() {
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
      <div className="close-container">
        <button>X</button>
      </div>
      <div className="unit-container">
        <div className="switch-button">
          <input
            onChange={handleOnChange}
            className="switch-button-checkbox"
            type="checkbox"
          ></input>
          <label className="switch-button-label" htmlFor="">
            <span className="switch-button-label-span">Celcius</span>
          </label>
        </div>
      </div>
      <div>
        <p>Favourtie Locations</p>
        <p>somewhere</p>
      </div>
    </div>
  );
};

export default Sidebar;
