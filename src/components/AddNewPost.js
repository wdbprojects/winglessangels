import React, { useState } from "react";
import {
  Fab,
  Modal,
  Tooltip,
  Typography,
  Box,
  TextField,
  Stack,
  ButtonGroup,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotions from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DateRangeIcon from "@mui/icons-material/DateRange";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const AddNewPost = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        onClick={() => {
          setOpen(true);
        }}
        placement="right"
        title={
          <Typography variant="caption" sx={{ fontSize: "1.1rem" }}>
            Add new post
          </Typography>
        }
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50%)", md: 20 },
          transform: { xs: "translateX(-50%)", md: "translateX(0)" },
        }}>
        <Fab color="error" aria-label="add">
          <AddIcon sx={{ fontSize: "2.4rem" }} />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box
          p={3}
          sx={{
            backgroundColor: "#F8F8F8",
            borderRadius: "4px",
            width: "550px",
            height: "auto",
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          }}>
          <Typography
            variant="h4"
            color="#1a237e"
            textAlign="center"
            sx={{ textTransform: "uppercase", fontSize: "2.2rem" }}>
            Create post
          </Typography>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={6}
            placeholder="What is in your mind..."
            variant="standard"
            InputProps={{ style: { fontSize: "1.6rem" } }}
            sx={{ width: "100%", marginTop: "2rem" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions
              color="primary"
              sx={{ fontSize: "2.2rem", marginRight: "0.5rem" }}
            />
            <ImageIcon
              color="secondary"
              sx={{ fontSize: "2.2rem", marginRight: "0.5rem" }}
            />
            <VideoCameraBackIcon
              color="success"
              sx={{ fontSize: "2.2rem", marginRight: "0.5rem" }}
            />
            <PersonAddIcon
              color="error"
              sx={{ fontSize: "2.2rem", marginRight: "0.5rem" }}
            />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group">
            <Button sx={{ fontSize: "1.6rem" }}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRangeIcon sx={{ fontSize: "2rem" }} />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default AddNewPost;
