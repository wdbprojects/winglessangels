import React from "react";
import { Box } from "@mui/material";

const Rightbar = () => {
  return (
    <Box
      sx={{
        bgcolor: "lavender",
        flex: 2,
        padding: 2,
        fontSize: "2.4rem",
        display: { sx: "none", sm: "block" },
      }}>
      Rightbar
    </Box>
  );
};

export default Rightbar;
