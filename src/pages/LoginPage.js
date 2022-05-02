import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import bg_login from "../assets/images/bg-form2.jpg";

const LoginPage = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        username: username,
        password: password,
      });
      if (response.data) {
        localStorage.setItem("waToken", response.data.token);
        localStorage.setItem("waUsername", response.data.username);
        localStorage.setItem("waAvatar", response.data.avatar);
        props.setLoggedIn(true);
        setLoggedIn(true);
      } else {
        console.log("Incorrect name/password");
      }
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    document.title = `Login | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (loggedIn) {
      return navigate("/");
    }
  }, [loggedIn]);

  return (
    <div id="plainContent" className="plainContent">
      <div
        className="plainContent__coverPhoto plainContent__coverPhoto--login"
        style={{ backgroundImage: `url(${bg_login})` }}></div>
      <div className="plainContent__formContainer">
        <div className="plainContent__formContainer--title">
          <h2>Sign In</h2>
          <p>
            Do you need an account?&nbsp; <Link to="/register">Sign Up</Link>
          </p>
        </div>
        <div className="plainContent__formContainer--form">
          <form className="form" onSubmit={handleSubmit}>
            {/* USERNAME */}
            <div className="form__group">
              <label
                htmlFor="reg_username"
                className="form__group--label text-muted">
                <small>Username</small>
              </label>
              <input
                id="reg_username"
                type="text"
                name="reg_username"
                placeholder="Your username"
                autoComplete="off"
                className="form__group--formControl text-muted"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
            </div>
            {/* PASSWORD */}
            <div className="form__group">
              <label
                htmlFor="reg_password"
                className="form__group--label text-muted">
                <small>Password</small>
              </label>
              <input
                id="reg_password"
                type="password"
                name="reg_password"
                placeholder="Your password"
                autoComplete="off"
                className="form__group--formControl text-muted"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>
            {/* BUTTON */}
            <div className="form__group">
              <Button
                variant="contained"
                type="submit"
                size="large"
                color="primary"
                sx={{ fontSize: "1.8rem", marginTop: "2rem" }}>
                Log In
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
