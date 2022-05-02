import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import HomePageNoContent from "./pages/HomePageNoContent";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(props.setLoggedIn);
  return (
    <BrowserRouter>
      <div className="mainContainer">
        <Routes>
          {/* <Route path="/" element={<HomePage logState={loggedIn} />} /> */}
          <Route path="/" element={<HomePageNoContent logState={loggedIn} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={<LoginPage setLoggedIn={setLoggedIn} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
