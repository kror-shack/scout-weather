import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/Contact/ContactPage";
import ErrorPage from "./pages/Error/ErrorPage";
import DisplayPage from "./pages/Main/MainPage";
const App = () => {
  return (
    <div
      style={{
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
      className="App"
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
