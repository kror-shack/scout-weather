import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./fonts/Baskervville/Baskervville-Regular.ttf";
import "./fonts/Engagement/Engagement-Regular.ttf";
import "./fonts/static/Raleway-Medium.ttf";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
