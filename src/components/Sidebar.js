import React from "react";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";
import StorefrontIcon from "@mui/icons-material/Storefront";
import PeopleIcon from "@mui/icons-material/People";
import DisplaySettingsIcon from "@mui/icons-material/DisplaySettings";

const Sidebar = () => {
  return (
    <Box
      sx={{
        flex: 1,
        padding: 2,
        fontSize: "1.6rem",
        display: { xs: "none", sm: "block" },
      }}>
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: "2.4rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Homepage"
                primaryTypographyProps={{ fontSize: "1.6rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <GroupsIcon sx={{ fontSize: "2.4rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Groups"
                primaryTypographyProps={{ fontSize: "1.6rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <StorefrontIcon sx={{ fontSize: "2.4rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Marketplace"
                primaryTypographyProps={{ fontSize: "1.6rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PeopleIcon sx={{ fontSize: "2.4rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Friends"
                primaryTypographyProps={{ fontSize: "1.6rem" }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <DisplaySettingsIcon sx={{ fontSize: "2.4rem" }} />
              </ListItemIcon>
              <ListItemText
                primary="Settings"
                primaryTypographyProps={{ fontSize: "1.6rem" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
