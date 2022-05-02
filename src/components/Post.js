import React from "react";
import { Avatar, Card, CardHeader } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Post = () => {
  return (
    <Card sx={{ marginBottom: 3 }}>
      <CardHeader
        avatar={
          <Avatar
            alt="aV"
            src={localStorage.getItem("waAvatar")}
            sx={{ width: 28, height: 28 }}
          />
        }></CardHeader>
    </Card>
  );
};

export default Post;
