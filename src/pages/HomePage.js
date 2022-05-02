import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link, useNavigate } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import AddNewPost from "../components/AddNewPost";

const HomePage = (props) => {
  const [loggedIn, setLoggedIn] = useState(
    Boolean(localStorage.getItem("waToken")),
  );
  const navigate = useNavigate();
  useEffect(() => {
    if (!loggedIn) {
      navigate("/login");
    }
  }, [loggedIn]);

  useEffect(() => {
    document.title = `Welcome! | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page pageTitle="Home">
      <Header setLoggedIn={setLoggedIn} />
      {/* <div className="mainContent container"> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
      {/* <Footer /> */}
      {/* </div> */}
      <AddNewPost />
    </Page>
  );
};

export default HomePage;
