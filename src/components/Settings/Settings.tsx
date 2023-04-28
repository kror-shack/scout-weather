import { useState } from "react";
import { ReactComponent as MenuSvg } from "../../icons/static/menu.svg";
import Sidebar from "../Sidebar/Sidebar";
import "./Settings.scss";

type Props = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({ setShowSidebar }: Props) => {
  const [sidebarShown, setSidebarShown] = useState(false);
  function openSidebar() {
    setShowSidebar((prev) => !prev);
    setSidebarShown((prev) => !prev);
  }

  return (
    <div className="Settings">
      <div className="container">
        <button
          onClick={openSidebar}
          id="menu-toggle"
          className={sidebarShown ? "menu-toggle" : "menu-toggle nav-open"}
        >
          <span className="menu-toggle-bar menu-toggle-bar--top"></span>
          <span className="menu-toggle-bar menu-toggle-bar--middle"></span>
          <span className="menu-toggle-bar menu-toggle-bar--bottom"></span>
        </button>
      </div>
    </div>
  );
};

export default Settings;
