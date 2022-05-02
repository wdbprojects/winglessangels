import React from "react";
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  IconButton,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Feed = () => {
  return (
    <Box sx={{ flex: 4, padding: 2 }}>
      <Card sx={{ marginBottom: "3rem" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "slateblue" }} aria-label="Editor">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ fontSize: "2.4rem" }} />
            </IconButton>
          }
          title={"Tell me again about the day you rescued me!"}
          subheader={"September 10, 2022"}
          titleTypographyProps={{
            variant: "h3",
            color: "text",
            fontSize: "2rem",
            marginBottom: "0.5rem",
          }}
          subheaderTypographyProps={{
            variant: "h5",
            fontSize: "1.5rem",
          }}
        />
        <CardMedia
          component="img"
          height="280"
          image="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg"
          alt="Happy rescued dog!"
        />
        <CardContent sx={{ marginBottom: "0px", paddingBottom: "1rem" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1.6rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            odio? Iste beatae possimus, optio quas odio, aut ipsa adipisci
            dignissimos nobis mollitia veniam illo. Commodi consectetur possimus
            adipisci ipsa reiciendis?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like story">
            <FavoriteIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ marginBottom: "3rem" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "slateblue" }} aria-label="Editor">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ fontSize: "2.4rem" }} />
            </IconButton>
          }
          title={"Tell me again about the day you rescued me!"}
          subheader={"September 10, 2022"}
          titleTypographyProps={{
            variant: "h3",
            color: "text",
            fontSize: "2rem",
            marginBottom: "0.5rem",
          }}
          subheaderTypographyProps={{
            variant: "h5",
            fontSize: "1.5rem",
          }}
        />
        <CardMedia
          component="img"
          height="280"
          image="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg"
          alt="Happy rescued dog!"
        />
        <CardContent sx={{ marginBottom: "0px", paddingBottom: "1rem" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1.6rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            odio? Iste beatae possimus, optio quas odio, aut ipsa adipisci
            dignissimos nobis mollitia veniam illo. Commodi consectetur possimus
            adipisci ipsa reiciendis?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like story">
            <FavoriteIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ marginBottom: "3rem" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "slateblue" }} aria-label="Editor">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon sx={{ fontSize: "2.4rem" }} />
            </IconButton>
          }
          title={"Tell me again about the day you rescued me!"}
          subheader={"September 10, 2022"}
          titleTypographyProps={{
            variant: "h3",
            color: "text",
            fontSize: "2rem",
            marginBottom: "0.5rem",
          }}
          subheaderTypographyProps={{
            variant: "h5",
            fontSize: "1.5rem",
          }}
        />
        <CardMedia
          component="img"
          height="280"
          image="https://images.pexels.com/photos/789303/pexels-photo-789303.jpeg"
          alt="Happy rescued dog!"
        />
        <CardContent sx={{ marginBottom: "0px", paddingBottom: "1rem" }}>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "1.6rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            odio? Iste beatae possimus, optio quas odio, aut ipsa adipisci
            dignissimos nobis mollitia veniam illo. Commodi consectetur possimus
            adipisci ipsa reiciendis?
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like story">
            <FavoriteIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon sx={{ fontSize: "2.4rem" }} />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Feed;
