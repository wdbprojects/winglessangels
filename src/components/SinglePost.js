import React, { useEffect, useState } from "react";
import Page from "../components/Page";
import { Link, useNavigate } from "react-router-dom";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Divider,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Feed from "../components/Feed";
import Rightbar from "../components/Rightbar";
import AddNewPost from "../components/AddNewPost";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import post1 from "../assets/images/post1.jpg";
import FlashMessage from "./FlashMessage";

const FeedNoPosts = () => {
  return (
    <Box
      sx={{
        flex: 4,
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Box sx={{ maxWidth: "700px" }}>
        <Card sx={{ marginBottom: "3rem" }}>
          <Box
            sx={{
              padding: "0.7rem 1.4rem",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}>
            <Box>
              <Typography variant="h3" color="primary">
                Dogs are angels
              </Typography>
              <Stack
                direction="row"
                sx={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}>
                <IconButton component={Link} to="/" size="small">
                  <Avatar
                    alt="aV"
                    src={localStorage.getItem("waAvatar")}
                    sx={{ width: 20, height: 20, marginRight: "0.75rem" }}
                  />
                </IconButton>

                <Typography variant="body1" sx={{ fontSize: "1.6rem" }}>
                  Created by{" "}
                  <Link to="/">
                    <span style={{ fontWeight: 500 }}>
                      {localStorage.getItem("waUsername")}
                    </span>
                  </Link>{" "}
                  on 02/05/22
                </Typography>
              </Stack>
            </Box>
            <Box>
              <IconButton
                sx={{ width: 50, height: 50, margin: "0px", padding: "0px" }}>
                <EditIcon sx={{ fontSize: "2.4rem" }} color="secondary" />
              </IconButton>
              <IconButton
                sx={{ width: 50, height: 50, margin: "0px", padding: "0px" }}>
                <DeleteIcon color="error" sx={{ fontSize: "2.4rem" }} />
              </IconButton>
            </Box>
          </Box>
          <CardMedia
            component="img"
            height="350"
            image={post1}
            alt="Dogs are angels"
          />
          <CardContent>
            <Typography variant="body1" paragraph sx={{ fontSize: "1.6rem" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
              eligendi! Dicta quod est perferendis deserunt libero, repudiandae
              pariatur nobis distinctio dolorem, similique quasi fugit
              perspiciatis nesciunt reiciendis consequatur porro assumenda?
            </Typography>
          </CardContent>
          <Divider />
          <CardActions>
            <ButtonGroup
              color="warning"
              fullWidth
              aria-label="medium secondary button group">
              <Button variant="text">
                <FavoriteBorderIcon sx={{ fontSize: "2.4rem" }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    marginLeft: "1rem",
                  }}>
                  Like
                </Typography>
              </Button>
              <Button variant="text">
                <ChatBubbleOutlineOutlinedIcon sx={{ fontSize: "2rem" }} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    marginLeft: "1rem",
                  }}>
                  Comment
                </Typography>
              </Button>
              <Button variant="text">
                <ShareOutlinedIcon sx={{ fontSize: "2rem" }} />{" "}
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: "1.6rem",
                    textTransform: "capitalize",
                    fontWeight: 500,
                    marginLeft: "1rem",
                  }}>
                  Share
                </Typography>
              </Button>
            </ButtonGroup>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
};

const SinglePost = (props) => {
  const [posts, setPosts] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    if (!props.loggedIn) {
      navigate("/login");
    }
  }, [props.loggedIn]);

  useEffect(() => {
    document.title = `Single post | Wingless Angels`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <Page pageTitle="Home">
      <Header setLoggedIn={props.setLoggedIn} loggedIn={props.loggedIn} />
      {/* <div className="mainContent container"> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar />
        {!posts ? <FeedNoPosts /> : <Feed />}

        <Rightbar />
      </Stack>
      {/* <Footer /> */}
      {/* </div> */}
      <AddNewPost />
    </Page>
  );
};

export default SinglePost;
