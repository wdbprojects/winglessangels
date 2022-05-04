import { Alert } from "@mui/material";
import React from "react";

const FlashMessage = (props) => {
  return (
    <>
      {props.messages.map((msg, index) => {
        return (
          <Alert
            key={index}
            severity="success"
            variant="standard"
            className="flashMessage"
            sx={{
              fontSize: "2rem",
              alignItems: "center",
              justifyContent: "center",
            }}>
            {msg}
          </Alert>
        );
      })}

      {/* <Alert
        severity="error"
        variant="standard"
        sx={{
          fontSize: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
        This is a success alert — check it out!
      </Alert>
      <Alert
        severity="warning"
        variant="standard"
        sx={{
          fontSize: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
        This is a success alert — check it out!
      </Alert>
      <Alert
        severity="info"
        variant="standard"
        sx={{
          fontSize: "2rem",
          alignItems: "center",
          justifyContent: "center",
        }}>
        This is a success alert — check it out!
      </Alert> */}
    </>
  );
};

export default FlashMessage;
