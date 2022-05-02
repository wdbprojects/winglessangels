import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo5.png";
import LogoutIcon from "@mui/icons-material/Logout";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import NotificationsIcon from "@mui/icons-material/Notifications";
import { IconButton } from "@mui/material";

const Header = (props) => {
  const LogOutIcon = () => {
    return (
      <span className="logoutIcon">
        <IconButton
          size="large"
          onClick={() => {
            props.setLoggedIn(false);
            localStorage.removeItem("waToken");
            localStorage.removeItem("waUsername");
            localStorage.removeItem("waAvatar");
          }}>
          <LogoutIcon fontSize="large" color="secondary" />
        </IconButton>
      </span>
    );
  };
  return (
    <div className="mainHeader">
      <div className="topbar">
        <div className="topbar__logo">
          <Link to="/">
            <img src={logo} alt="Hi Paws!" />
          </Link>
        </div>
        <div className="topbar__search">
          <span className="topbar__search--icon">Icon Over Here</span>
          <input
            className="topbar__search--icon"
            type="text"
            autoComplete="off"
            placeholder="Search for content and more..."
          />
        </div>
        <div className="topbar__link">
          <ul className="topbar__links--ul">
            <li>
              <IconButton size="large" component={Link} to="/">
                <img
                  src={localStorage.getItem("waAvatar")}
                  alt="aV"
                  className="avatarProfile"
                />
              </IconButton>
            </li>
            <li>
              <span className="commentIcon">
                <IconButton size="large">
                  <ModeCommentIcon color="secondary" fontSize="large" />
                </IconButton>
              </span>
            </li>
            <li>
              <span className="notificationIcon">
                <IconButton size="large">
                  <NotificationsIcon
                    fontSize="large"
                    sx={{ color: "#8385f9" }}
                  />
                </IconButton>
              </span>
            </li>
            <li>
              <LogOutIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
