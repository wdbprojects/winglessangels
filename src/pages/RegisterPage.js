import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import bg_reg from "../assets/images/bg-form1.jpg";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:5000/register", {
        username: username,
        email: email,
        password: password,
      });
    } catch (err) {
      console.log(err.response.data);
    }
  };

  useEffect(() => {
    document.title = `Register | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div id="plainContent" className="plainContent">
      <div
        className="plainContent__coverPhoto plainContent__coverPhoto--reg"
        style={{ backgroundImage: `url(${bg_reg})` }}></div>
      <div className="plainContent__formContainer">
        <div className="plainContent__formContainer--title">
          <Typography variant="h1" align="center" sx={{ fontSize: "2.4rem" }}>
            Sign Up
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ fontSize: "1.6rem" }}>
            Do you have an account? &nbsp;<Link to="/login">Log In</Link>
          </Typography>
        </div>
        {/* FORM */}
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
                name="reg_username"
                type="text"
                placeholder="Pick a username"
                autoComplete="off"
                className="form__group--formControl text-muted"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
                value={username}
              />
            </div>
            {/* FIRST NAME */}
            <div className="form__group">
              <label
                htmlFor="reg_fname"
                className="form__group--label text-muted">
                <small>First Name</small>
              </label>
              <input
                id="reg_fname"
                name="reg_fname"
                type="text"
                placeholder="Your first name"
                autoComplete="off"
                className="form__group--formControl text-muted"
              />
            </div>
            {/* LAST NAME */}
            <div className="form__group">
              <label
                htmlFor="reg_lname"
                className="form__group--label text-muted">
                <small>Last name</small>
              </label>
              <input
                id="reg_lname"
                name="reg_lname"
                type="text"
                placeholder="Your last name"
                autoComplete="off"
                className="form__group--formControl text-muted"
              />
            </div>
            {/* EMAIL */}
            <div className="form__group">
              <label
                htmlFor="reg_email"
                className="form__group--label text-muted">
                <small>Email</small>
              </label>
              <input
                id="reg_email"
                name="reg_email"
                type="text"
                placeholder="you@example.com"
                autoComplete="off"
                className="form__group--formControl text-muted"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                value={email}
              />
            </div>
            {/* PASSWORD 1 */}
            <div className="form__group">
              <label
                htmlFor="reg_password1"
                className="form__group--label text-muted">
                <small>Password</small>
              </label>
              <input
                id="reg_password1"
                name="reg_password1"
                type="password"
                placeholder="Your password"
                autoComplete="off"
                className="form__group--formControl text-muted"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
                value={password}
              />
            </div>
            <div className="form__group">
              <label
                htmlFor="reg_password2"
                className="form__group--label text-muted">
                <small>Confirm password</small>
              </label>
              <input
                id="reg_password2"
                name="reg_password3"
                type="password"
                placeholder="Confirm your password"
                autoComplete="new-password"
                className="form__group--formControl text-muted"
              />
            </div>
            <div className="form__group">
              <Button
                variant="contained"
                type="submit"
                color="primary"
                size="large"
                sx={{ fontSize: "1.8rem", marginTop: "2rem" }}>
                Get Started
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
