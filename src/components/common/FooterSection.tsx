import {
  Box,
  Button,
  CardMedia,
  Container,
  Divider,
  Grid2,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

const articles = [
  {
    title: "Introducing Our New 3D Printing Service",
    image: "https://images.unsplash.com/photo-1525097487452-6278ff080c31",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
  {
    title: "The Future of Robotics",
    image: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
  {
    title: "Ai is the Future of Humanity",
    image: "https://images.unsplash.com/photo-1563298723-dcfebaa392e3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisl vel tellus ultricies condimentum. Sed faucibus, ipsum a malesuada fermentum, nisi ex varius neque, vel tincidunt nunc velit in felis. Donec vel ipsum at dolor eleifend consequat. Integer vel eros vel ex lobortis tincidunt.",
  },
];

const FooterSection = () => {
  return (
    <Box
      sx={[
        (theme) => ({
          mt: 4,
          minHeight: 500,
          backgroundColor: theme.vars.palette.grey[800],
          color: theme.vars.palette.common.white,
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.grey[900],
          })
        }),
      ]}
    >
      <Container maxWidth="xl">
        <Grid2 container spacing={2} sx={{ pt: 2 }}>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
              <Fade direction="left" duration={1200}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "cursive",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                About Us
              </Typography>
              </Fade>
              <Divider variant="fullWidth" />
              <Slide direction="down" duration={1300}>
              <CardMedia
                sx={{ width: "100%" }}
                component="img"
                height="100%"
                image="/white_logo.svg"
                alt="logo"
              />
              </Slide>
              <Fade direction="down" duration={1400}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  py: 2,
                  fontFamily: "cursive",
                }}
              >
                Some of our recent work of the hundreds that we have for our
                customers around the world are displayed in Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis faucipus.
              </Typography>
              </Fade>
              <Fade direction="left" duration={1600}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: "justify",
                  py: 2,
                  fontFamily: "cursive",
                }}
              >
                Some of our recent work of the hundreds that we have for our
                customers around the world are displayed in Fusce lacinia arcu
                et nulla. Nulla vitae mauris non felis mollis faucipus.
              </Typography>
              </Fade>
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
            <Fade direction="down" duration={1400}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "cursive",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                Articles
              </Typography>
              </Fade>
              <Divider variant="fullWidth" />
              {articles.map((article, index) => (
                <Stack
                  key={index}
                  spacing={2}
                  direction={"row"}
                  sx={{ my: 1, alignItems: "center" }}
                >
                  <CardMedia
                    component="img"
                    height={120}
                    image={article.image}
                    alt={article.title}
                    sx={{
                      width: 120,
                      borderRadius: "2px",
                    }}
                  />
                  <Box>
                  <Fade direction="left" duration={800}>
                    <Typography
                      variant="h6"
                      sx={{
                        textAlign: "justify",
                        fontFamily: "cursive",
                      }}
                    >
                      {article.title}
                    </Typography>
                    </Fade>
                    <Fade direction="right" duration={1200}>
                    <Typography
                      variant="body2"
                      sx={{
                        textAlign: "justify",
                        overflow: "hidden",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 3,
                        fontFamily: "cursive",
                      }}
                    >
                      {article.content}
                    </Typography>
                    </Fade>
                  </Box>
                </Stack>
              ))}
            </Box>
          </Grid2>
          <Grid2 size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Box>
            <Fade direction="right" duration={1600}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 400,
                  textAlign: "center",
                  fontFamily: "cursive",
                  lineHeight: "1.3",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  py: 2,
                }}
              >
                Contact Us
              </Typography>
              </Fade>
              <Divider variant="fullWidth" />
              <Fade direction="left" duration={800}>
              <Typography
                variant="h5"
                // color="secondary"
                sx={{
                  py: 0.5,
                  fontFamily: "cursive",
                }}
              >
                Canada
              </Typography>
              </Fade>
              <Fade direction="down" duration={1200}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "fantasy",
                }}
              >
                No. 77 George Welsh Street
              </Typography>
              </Fade>
              <Fade direction="left" duration={800}>
              <Typography
                variant="h5"
                sx={{
                  py: 0.5,
                  fontFamily: "cursive",
                }}
              >
                United States
              </Typography>
              </Fade>
              <Fade direction="down" duration={1200}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "fantasy",
                }}
              >
                No. 34 John Doe Street
              </Typography>
              </Fade>
              <Slide direction="down" duration={1200}>
              <Box sx={{ py: 2 }}>
               <Box sx={{ py: 1 }}>
               <TextField
                  id="standard-basic"
                  label="Name"
                  variant="standard"
                  fullWidth
                  color="secondary"
                />
               </Box>
                <Box sx={{ py: 1 }}>
                <TextField
                  
                  id="standard-basic"
                  label="Email"
                  variant="standard"
                  fullWidth
                  color="secondary"
                />
                </Box>
                <Box sx={{ textAlign: "center", display: "block", my: 2 }}>
                    <Button variant="outlined" color="secondary">Subscribe</Button>
                </Box>
              </Box>
              </Slide>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
      <Box
      sx={[
        (theme) => ({
          py: 4,
          backgroundColor: theme.vars.palette.grey[900],
          color: theme.vars.palette.common.white,
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.background.default,
          })
        }),
      ]}
    >
        <Container maxWidth="xl">
          <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} spacing={2} justifyContent="space-between">
          <Typography
            variant="h6"
            sx={{
              py: 2,
              fontFamily: "cursive",
            }}
          >
            &copy; {new Date().getFullYear()} DigiAgency Service. All rights reserved.
          </Typography>
          <Box>
            <Stack direction={{ lg: "row", md: "row", sm: "column", xs: "column" }} spacing={2}>
              <Button sx={{ fontFamily: "cursive", }} variant="text" color="inherit">Privacy Policy</Button>
              <Button sx={{ fontFamily: "cursive", }} variant="text" color="inherit">Terms of Service</Button>
              <Button sx={{ fontFamily: "cursive", }} variant="text" color="inherit">Contact Us</Button>
            </Stack>
          </Box>
          </Stack>
        </Container>
    </Box>
    </Box>
  );
};

export default FooterSection;
