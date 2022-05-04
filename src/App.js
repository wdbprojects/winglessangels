import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SinglePost from "./components/SinglePost";
import FlashMessage from "./components/FlashMessage";
import AddNewPost from "./components/AddNewPost";

axios.defaults.baseURL = "http://localhost:5000";

function App(props) {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("waToken")),
  );
  const [flashMessages, setFlashMessages] = useState([]);

  const addFlashMessage = (msg) => {
    setFlashMessages((prev) => {
      return prev.concat(msg);
    });
  };

  return (
    <BrowserRouter>
      <div className="mainContainer">
        <div className="flashMessages">
          <FlashMessage messages={flashMessages} />
        </div>
        <Routes>
          <Route
            path="/"
            element={<HomePage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/posts/:id"
            element={
              <SinglePost loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/login"
            element={
              <LoginPage loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
            }
          />
        </Routes>
        <AddNewPost addFlashMessage={addFlashMessage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
