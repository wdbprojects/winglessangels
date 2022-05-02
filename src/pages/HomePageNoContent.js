import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Stack, Typography } from "@mui/material";
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
    <Page pageTitle="Your Feed">
      <Header setLoggedIn={setLoggedIn} />
      {/* <div className="mainContent container"> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        <Box sx={{ flex: 4, padding: 2 }}>
          <Typography variant="h3" color="primary" gutterBottom>
            Hello username
          </Typography>
          <Typography variant="body1" paragraph sx={{ fontSize: "1.6rem" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            eligendi! Dicta quod est perferendis deserunt libero, repudiandae
            pariatur nobis distinctio dolorem, similique quasi fugit
            perspiciatis nesciunt reiciendis consequatur porro assumenda?
          </Typography>
        </Box>

        <Rightbar />
      </Stack>
      {/* <Footer /> */}
      {/* </div> */}
      <AddNewPost />
    </Page>
  );
};

export default HomePage;
