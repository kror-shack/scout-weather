import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/Contact/ContactPage";
import DisplayPage from "./pages/Main/MainPage";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DisplayPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
