import { useState } from "react";
import { ReactComponent as MenuSvg } from "../../icons/static/menu.svg";
import Sidebar from "../Sidebar/Sidebar";
import "./Settings.scss";

type Props = {
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>;
};

const Settings = ({ setShowSidebar }: Props) => {
  function openSidebar() {
    setShowSidebar((prev) => !prev);
  }

  return (
    <div className="Settings" onClick={openSidebar}>
      <MenuSvg />
    </div>
  );
};

export default Settings;
