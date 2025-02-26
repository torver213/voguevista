import {
  Box,
  Button,
  Grid2,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import FlippingButton from "./FlippingButton";
import { Bounce, Fade, Slide } from "react-awesome-reveal";

type Team = {
  name: string;
  role: string;
  image: string;
};
const team: Team[] = [
  {
    name: "James Landon",
    role: "CEO/Co-founder",
    image: "/team4.jpeg",
  },
  {
    name: "Amanda Welsh",
    role: "Web Designer",
    image: "/team1.jpeg",
  },
  {
    name: "Chris Werner",
    role: "Software Engineer",
    image: "/team3.jpeg",
  },

  {
    name: "Jane Doe",
    role: "UI/UX Designer",
    image: "/team2.jpeg",
  },
];

const TeamCard = ({ item }: { item: Team }) => {
  return (
    <Card
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: 2,
        "&:hover .overlay": { opacity: 1 }, // Show overlay on hover
        "&:hover .textOverlay": { bottom: 0 }, // Slide in text
      }}
    >
      <CardActionArea>
        <Box sx={{ position: "relative" }}>
          <CardMedia
            component="img"
            height={400}
            image={item.image}
            alt={item.name}
            sx={{
              transition: "0.5s ease",
            }}
          />
          <Box
            className="overlay"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              bgcolor: "rgba(175, 38, 113, 0.4)", // Warning color overlay
              opacity: 0,
              transition: "0.5s ease",
            }}
          />
        </Box>

        {/* Typography Section with Animation */}
        <CardContent
          className="textOverlay"
          sx={{
            position: "absolute",
            bottom: "-100px",
            left: 0,
            width: "100%",
            bgcolor: "rgba(150, 10, 66, 0.7)",
            color: "#fff",
            padding: 2,
            textAlign: "center",
            transition: "0.5s ease",
          }}
        >
          <Typography gutterBottom variant="h5">
            {item.name}
          </Typography>
          <Typography variant="body2">{item.role}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

const HeroSection = () => {
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        backgroundImage: `url(/team-bg.jpg)`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // Fixed background effect
        color: "white",
        textAlign: "center",
        mt: 14,
      }}
    >
      {/* Overlay */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          bgcolor: "rgba(0, 0, 0, 0.6)", // Dark overlay
        }}
      />

      {/* Centered Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: 3,
        }}
      >
        <Slide direction="up" duration={1000}>
        <Typography
          sx={[(theme) => ({
            fontFamily: "cursive",
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            lineHeight: 1.2,
            [theme.breakpoints.down("md")]: {
              fontSize: "2.5rem",
            },
          })]}
          variant="h1"
          fontWeight="bold"
        >
          Embrace Iconic Elegance
        </Typography>
        </Slide>
        <Slide duration={800}>
        <Typography variant="h6" sx={{fontFamily: "fantasy",}}>Awesome Customer Service</Typography>
        </Slide>
        {/* Buttons Container */}
        <Box sx={{position: "relative" }}>
        <Stack direction="row" spacing={2} sx={{ mt: 4}}>
          <Button variant="contained" size="large">Book Us Now</Button>
          <Button variant="contained" size="large" color="secondary">Learn More</Button>
        </Stack>
        </Box>
      </Box>
    </Box>
  );
};

const TeamSection = () => {
  return (
    <Box id="team" >
      <Box sx={{ py: 4 }}>

      <Fade duration={700} direction="up">
      <Typography
        variant="h1"
        sx={[(theme) => ({
          fontWeight: 800,
          textAlign: "center",
          fontFamily: "cursive",
          lineHeight: "1.3",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          // text gradient
          background: "linear-gradient(45deg, #FF006E, #86A8E7, #e4820b, #df13cb)",
          backgroundSize: "300% 300%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          animation: "gradientAnimation 5s infinite linear",
          "@keyframes gradientAnimation": {
            "0%": { backgroundPosition: "0% 50%" },
            "50%": { backgroundPosition: "100% 50%" },
            "100%": { backgroundPosition: "0% 50%" },
          },
          [theme.breakpoints.down("md")]: {
            fontSize: "2.5rem",
          },
        })]}
      >
        Meet Our Team
      </Typography>
      </Fade>
      <Slide direction="right" duration={800}>
      <Typography
        variant="subtitle1"
        sx={{
          textAlign: "center",
          mb: 2,
          maxWidth: 400,
          margin: "0 auto",
          py: 4,
        }}
      >
        Some of our recent work of the hundreds that we have for our customers
        around the world are displayed in Fusce lacinia arcu et nulla. Nulla
        vitae mauris non felis mollis faucipus.
      </Typography>
      </Slide>
      <Box>
        <Grid2 container spacing={2}>
          {team.map((item) => (
            <Grid2 key={item.role} size={{ lg: 3, md: 3, sm: 12, xs: 12 }}>
              <Slide cascade duration={600}>
              <TeamCard item={item} />
              </Slide>
            </Grid2>
          ))}
        </Grid2>
      </Box>
      <HeroSection />
    </Box>
    </Box>
  );
};

export default TeamSection;
