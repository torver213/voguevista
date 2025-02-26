import {
  Box,
  Button,
  CardMedia,
  Grid2,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

import CircularProgressWithIcon from "./CircularProgressWithIcon";
import { Fade, Slide } from "react-awesome-reveal";
import { Checkroom, Style, TrendingUp } from "@mui/icons-material";

const services = [
  {
    icon: <Checkroom />, // Represents clothing and fashion styling
    title: "Fashion Styling",
    description:
      "Expert styling services to curate the perfect look for any occasion, from editorial shoots to personal wardrobe makeovers.",
    value: 100,
  },
  {
    icon: <Style />, // Represents creative branding and fashion identity
    title: "Brand Identity",
    description:
      "Building unique fashion brands with cohesive visual aesthetics, from logos to complete design solutions.",
    value: 100,
  },
  {
    icon: <TrendingUp />, // Represents trend forecasting and insights
    title: "Trend Analysis",
    description:
      "Stay ahead in the fashion industry with expert insights on emerging trends, colors, and consumer preferences.",
    value: 100,
  },
];


const FeaturesSection = () => {
  return (
    <Box
    id="features"
      sx={[
        (theme) => ({
          mt: 10,
          backgroundColor: theme.vars.palette.grey[100],
          minHeight: "300px",
          padding: theme.spacing(4),
          ...theme.applyStyles("dark", {
            background: theme.vars.palette.grey[900],
          })
        }),
      ]}
    >
      <Box sx={{ width: "100%" }}>
        <Slide duration={1400} direction="left">
        <Typography
          variant="h2"
          sx={
            {
            fontWeight: 800,
            textAlign: "center",
            fontFamily: "cursive",
            lineHeight: "1.3",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Why Choose us
        </Typography>
        </Slide>
        <Slide duration={1700} direction="right">
        <Typography
          variant="subtitle1"
          sx={{
            textAlign: "center",
            mb: 2,
            maxWidth: 500,
            margin: "0 auto",
            pb: 4,
            fontFamily: "cursive"
          }}
        >
          Some of our recent work of the hundreds that we have for our customers
          around the world are displayed in Fusce lacinia arcu et nulla. Nulla
          vitae mauris non felis mollis faucipus.
        </Typography>
        </Slide>
        <Grid2 container spacing={2}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <CardMedia
              sx={{ 
                height: 400, 
                borderRadius: "5px", 
                backgroundPosition: "50% 0",
              }}
              image="/feature1.jpeg"
              title="Features Model one"
            />
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Slide duration={700} direction="right">
            <Typography
              variant="h3"
              sx={{
                fontWeight: 400,
                fontFamily: "cursive",
                lineHeight: "1",
                py: 4,
                
              }}
            >
              Elevating Fashion Brands Online
            </Typography>
            </Slide>
            <Slide duration={900} direction="left">
            <Typography variant="subtitle1" sx={{pb: 2, fontFamily: "fantasy"}}>
            We Craft Stunning Visuals with High-End Aesthetics
            </Typography>
            </Slide>
            <Slide duration={1100} direction="left">
            <Typography variant="subtitle2" sx={{pb: 2}}>
            Fashion is more than just clothing—it’s a statement, a lifestyle, and an ever-evolving art form. Our expertise blends creativity with technology to build visually compelling fashion brands that stand out in the digital world.
            </Typography>
            </Slide>
            <Slide duration={1300} direction="left">
            <Typography variant="body2">
            From luxury editorial shoots to trendsetting campaigns, we design high-quality imagery and branding solutions that capture the essence of style and sophistication.
            </Typography>
            </Slide>
            <Slide duration={1500} direction="left">
            <Typography variant="body2">
            Whether it’s haute couture or streetwear, we ensure your fashion brand makes a lasting impression with visually striking and trend-forward designs.
            </Typography>
            </Slide>
            <Fade duration={1700}>
            <Box sx={{ display: "block", textAlign: "center" }}>
              <Button variant="outlined">Learn More</Button>
            </Box>
            </Fade>
          </Grid2>
        </Grid2>

        <Grid2 container spacing={2} mt={4}>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <Grid2 container spacing={6} sx={{ width: "100%" }}>
              {services.map((item) => (
                <Grid2
                  key={item.title}
                  size={{ lg: 12, md: 12, sm: 12, xs: 12 }}
                  alignItems={"center"}
                  justifyContent={"center"}
                >
                  <Slide duration={500}>
                  <Grid2 container>
                    <Grid2 size={{ lg: 2, md: 2, sm: 12, xs: 12 }}>
                      <CircularProgressWithIcon
                        value={item.value}
                        icon={
                          <IconButton color="secondary" size="small">
                            {item.icon}
                          </IconButton>
                        }
                      />
                    </Grid2>
                    <Grid2 size={{ lg: 10, md: 10, sm: 12, xs: 12 }}>
                      <Box>
                        <Typography variant="h5">{item.title}</Typography>
                        <Typography>{item.description}</Typography>
                      </Box>
                    </Grid2>
                  </Grid2>
                  </Slide>
                </Grid2>
              ))}
            </Grid2>
          </Grid2>
          <Grid2 size={{ lg: 6, md: 6, sm: 12, xs: 12 }}>
            <CardMedia
              sx={{ 
                height: 400, 
                borderRadius: "5px",
                backgroundPosition: "50% 0", 
              }}
              image="/features2.jpeg"
              title="Features Model"
            />
          </Grid2>
        </Grid2>
      </Box>
    </Box>
  );
};

export default FeaturesSection;
