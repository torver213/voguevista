import React from "react";

import Paper from "@mui/material/Paper";
import {
  Box,
  CardMedia,
  Grid2,
  Stack,
  Typography,
} from "@mui/material";
import { TestimonialSection } from "./TestimonialSection";
import FlippingButton from "./FlippingButton";
import { Slide, Zoom } from "react-awesome-reveal";

const modelingServices = [
  {
    title: "Fashion Modeling",
    description: "Professional runway and editorial modeling for fashion brands, designers, and magazines.",
    url: "/services/fashion.jpeg"
  },
  {
    title: "Commercial Modeling",
    description: "Modeling for advertisements, TV commercials, billboards, and product promotions.",
    url: "/services/commercial.jpeg"
  },
  {
    title: "Fitness Modeling",
    description: "Showcasing athletic and sports-related apparel, fitness gear, and health brands.",
     url: "/services/fitness.jpeg"
  },
  {
    title: "Glamour Modeling",
    description: "Focused on aesthetic appeal, beauty, and high-end photography for magazines and promotions.",
    url: "/services/glamour.jpeg"
  },
  {
    title: "Parts Modeling",
    description: "Specialized modeling for hands, feet, eyes, or other body parts for advertisements and brands.",
    url: "/services/parts.jpeg"
  },
  {
    title: "Swimwear & Lingerie Modeling",
    description: "Modeling swimwear, lingerie, and intimate apparel for brands and advertising campaigns.",
    url: "/services/swimwear.jpeg"
  },
  {
    title: "Plus-Size Modeling",
    description: "Body-positive modeling for plus-size clothing brands and inclusive fashion campaigns.",
    url: "/services/plussize.jpeg"
  },
  {
    title: "E-commerce & Catalog Modeling",
    description: "Professional modeling for online stores, print catalogs, and digital fashion lookbooks.",
    url: "/services/catalog.jpeg"
  },
  {
    title: "Editorial & High Fashion Modeling",
    description: "Avant-garde and creative modeling for high-end fashion magazines and luxury brands.",
    url: "/services/editorial.jpeg"
  }
];


const ServicesSection = () => {
  return (
    <React.Fragment>
      <Box id="services">
        <Box sx={[
          (theme) => ({
            backgroundImage: "linear-gradient(to right bottom, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #9c98e4, #9e95e6, #a193e8, #bf7ddc, #dd61c3, #f43e9d, #ff006e)",
            [theme.breakpoints.down("md")]: {
              pt: "48px",
            },
            ...theme.applyStyles("dark", {
              backgroundImage: theme.vars.palette.grey[800],
            }),
          }),
        ]}>
      <Box
          sx={{
            // mt: {lg: 6, md: 6, sm: 0, xs: 0},
            py: {lg: 7, md: 7, sm: 0, xs: 0},
            color: (theme) => theme.vars.palette.common.white,
          }}
        >
          <Zoom direction="right" duration={1200}>
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                textAlign: "center",
                fontFamily: "cursive",
                lineHeight: "1.3",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                
              }}
            >
              Checkout Our Services
            </Typography>
          </Zoom>
          
          <Slide direction="right" duration={1500}>
            <Typography
              variant="h6"
              sx={[(theme) => ({ 
                margin: "0 auto", 
                fontWeight: 700, 
                textAlign: "center", 
                px: 2, 
                maxWidth: 600,
                [theme.breakpoints.down("md")]: {
                  maxWidth: "100%",
                },
              })]}
            >
              Some of our services rendered hundreds that we have for our
              customers around the world are displayed in Fusce lacinia arcu et
              nulla. Nulla vitae mauris non felis mollis faucipus.
            </Typography>
          </Slide>
        </Box>
        </Box>
      <Grid2 container spacing={2} mt={2}>
        {modelingServices.map((item) => (
          <Grid2 key={item.title} size={{ lg: 4, md: 4, sm: 12, xs: 12 }}>
            <Slide cascade delay={100}>
            <Paper elevation={2} sx={{ }}>
              <CardMedia 
                component={"img"}
                alt={item.title}
                height="400"
                image={item.url}
                sx={{ borderTopRightRadius: 3, borderTopLeftRadius: 3 }}
              />
              
                <Box sx={{px: 2, py: 1}}>
                  <Slide direction="left" duration={1000}>
                <Typography
                  sx={{
                    fontFamily: "cursive",
                    fontWeight: 400,
                  }}
                  variant="h5"
                >
                  {item.title}
                </Typography>
                </Slide>
                <Slide direction="left" duration={1200}>
              <Typography sx={{
                    fontFamily: "fantasy",
                  }}>{item.description}</Typography>
              </Slide>
                </Box>
            </Paper>
            </Slide>
          </Grid2>
        ))}
      </Grid2>
      <Box
        sx={[
          (theme) => ({
            mt: 1,
            py: 4,
            px: 2,
            background: theme.vars.palette.grey[100],
            ...theme.applyStyles("dark", {
              background: theme.vars.palette.grey[900],
            })
          }),
        ]}
      >
        <Stack direction={{lg: "row", md: "row", sm: "column", xs: "column"}} sx={{ justifyContent: "space-between" }}>
          <Slide direction="right" duration={2000}>
          <Typography
            variant="h3"
            sx={[
              (theme) => ({
                fontWeight: 500,
                fontFamily: "cursive",
                lineHeight: 1.3,
                
                [theme.breakpoints.down("md")]: {
                  fontSize: "30px",
                }
              }),
            ]}
          >
            How about Pose & Prestige?
          </Typography>
          </Slide>
          <Slide direction="left" duration={3000}>
          <FlippingButton
            frontText={"Book Us Now"}
            backText={"Start Now"}
            frontColor={"primary"}
            backColor={"inherit"}
            variant="outlined"
          />
          </Slide>
        </Stack>
      </Box>

      <Box
        sx={{
          height: "100vh",
          position: "relative",
          backgroundImage: "url(/service_bg.jpg)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100%",
          backgroundAttachment: "fixed",
          width: "100%",
          p: 4,
          display: "flex", // Enables Flexbox
          justifyContent: "center", // Centers horizontally
          alignItems: "center", // Centers vertically
        }}
      >
        <Box
          sx={{
            position: "relative",
            zIndex: 1,
            width: "100%",
            maxWidth: "800px", // Adjust width as needed
          }}
        >
          <TestimonialSection />
        </Box>
      </Box>
      </Box>
    </React.Fragment>
  );
};

export default ServicesSection;
