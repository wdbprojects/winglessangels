import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    secondary: {
      main: "#6467f7",
      light: "#8385f9",
      dark: "#4648ad",
      contrastText: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: ["Barlow", "sans-serif"].join(","),
  },
});
