import {
  Box,
  Button,
  CardMedia,
  FormControl,
  Grid2,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import AlternateEmailOutlinedIcon from '@mui/icons-material/AlternateEmailOutlined';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import { Bounce, Fade, Slide } from "react-awesome-reveal";



const ContactSection = () => {
  return (
    <Box id="contact">
      <Slide direction="down">
      <Typography
        sx={[(theme) => ({
          fontFamily: "cursive",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
          lineHeight: 1.2,
          textAlign: "center",
          [theme.breakpoints.down("md")]: {
            fontSize: "2.5rem",
          },
        })]}
        variant="h1"
        fontWeight="bold"
      >
        Reach Out To Us
      </Typography>
      </Slide>
      <Fade direction="bottom-right">
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 1,
          maxWidth: 800,
          margin: "0 auto",
          py: 4,
        }}
      >
        Some of our recent work of the hundreds that we have for our customers
        around the world are displayed in Fusce lacinia arcu et nulla.
      </Typography>
      </Fade>
        <Paper elevation={8} sx={{p: 3}}>
        <Grid2 container spacing={2}>
        <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12}}>
        <CardMedia
              sx={{ 
                height: "100%", 
                borderRadius: "5px", 
                backgroundPosition: "50% 0",
              }}
              image="/feature1.jpeg"
              title="Features Model one"
            />
        </Grid2>
        <Grid2 size={{ lg: 8, md: 8, sm: 12, xs: 12 }}>
        <Box>
        <Box component={"form"}>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="outlined-adornment-amount">Name</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              startAdornment={
                <InputAdornment position="start">
                    <PersonOutlineOutlinedIcon />
                </InputAdornment>
              }
              label="Name"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="outlined-adornment-email">Email Address</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              startAdornment={
                <InputAdornment position="start">
                    <AlternateEmailOutlinedIcon />
                </InputAdornment>
              }
              label="Email Address"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="outlined-adornment-number">Phone Number</InputLabel>
            <OutlinedInput
              id="outlined-adornment-number"
              startAdornment={
                <InputAdornment position="start">
                    <LocalPhoneOutlinedIcon />
                </InputAdornment>
              }
              label="Phone Number"
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 2 }}>
            <InputLabel htmlFor="outlined-adornment-message">Message</InputLabel>
            <OutlinedInput
              id="outlined-adornment-message"
              multiline
              minRows={8}
            //   startAdornment={
            //     <InputAdornment position="start">
            //         <CreateOutlinedIcon />
            //     </InputAdornment>
            //   }
              label="Message"
            />
          </FormControl>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Button variant="contained" size="large">
              Send Message
            </Button>
          </Box>
        </Box>
      </Box>
        </Grid2>
      </Grid2>
        </Paper>
    </Box>
  );
};

export default ContactSection;
