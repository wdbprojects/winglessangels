import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { alpha } from "@mui/material/styles";
import styled from "@emotion/styled";
import {
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Typography,
  InputBase,
  Badge,
  Avatar,
} from "@mui/material";
import logo from "../assets/images/logo5.png";
import LogoutIcon from "@mui/icons-material/Logout";
import PetsIcon from "@mui/icons-material/Pets";
import SearchIcon from "@mui/icons-material/Search";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import NotificationsIcon from "@mui/icons-material/Notifications";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});
const Search = styled("div")(({ theme }) => ({
  padding: "0px 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
}));

const Icons = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "none",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  backgroundColor: "transparent",
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Header = (props) => {
  const LogOutIcon = () => {
    return (
      <span className="logoutIcon">
        <IconButton
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
    <AppBar position="sticky" sx={{ backgroundColor: "#F8F8F8" }}>
      <StyledToolbar>
        <Box sx={{ padding: "0px", width: "300px" }}>
          <Link to="/">
            <img
              src={logo}
              alt="Wingless Angels - logo"
              style={{
                display: "block",
                padding: "0px",
                margin: "0px",
                height: "40px",
              }}
            />
          </Link>
        </Box>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search className="topSearchCont">
          <Box>
            <SearchIcon
              sx={{
                color: "#A6A6A6",
                fontSize: "2rem",
                margin: "0px",
                padding: "0px",
              }}
            />
          </Box>
          <InputBase
            placeholder="Search Wingless Angels..."
            sx={{
              width: "100%",
              padding: "3px 0.5rem",
              fontSize: "1.6rem",
            }}
          />
        </Search>
        <Icons className="topIconsCont">
          <IconButton component={Link} to="/">
            <Avatar
              alt="aV"
              src={localStorage.getItem("waAvatar")}
              sx={{ width: 28, height: 28 }}
            />
          </IconButton>
          <IconButton>
            <Badge
              badgeContent={4}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 10,
                  height: 20,
                  width: 20,
                  top: "5px",
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              <ModeCommentIcon color="secondary" sx={{ fontSize: "2.6rem" }} />
            </Badge>
          </IconButton>
          <IconButton>
            <Badge
              badgeContent={2}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 10,
                  height: 20,
                  width: 20,
                  top: "5px",
                },
              }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}>
              <NotificationsIcon
                color="secondary"
                sx={{ fontSize: "2.6rem" }}
              />
            </Badge>
          </IconButton>
          <LogOutIcon />
        </Icons>
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
