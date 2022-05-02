import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import Page from "../components/Page";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

const AboutPage = () => {
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
    document.title = `About us | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);
  return (
    <Page pageTitle="About Us">
      <Header setLoggedIn={setLoggedIn} />
      <div className="mainContent">
        <div className="container container--narrow">
          <Typography variant="h1" sx={{ marginTop: "3rem" }} gutterBottom>
            Por qué existimos
          </Typography>
          <Typography variant="body1" sx={{ fontSize: "1.5rem" }}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur, voluptates? Tempora eum dolores voluptate quos iste
            dignissimos, ratione natus consectetur ea quas rerum dolorum vel
            fugit ad commodi, perspiciatis deleniti esse vitae molestiae
            nesciunt corporis omnis asperiores obcaecati praesentium! Aut, rem
            unde eius quas autem quod at ut voluptatem nulla.
          </Typography>
        </div>
      </div>
    </Page>
  );
};

export default AboutPage;
