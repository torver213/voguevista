"use client";
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { AppNavbar, ContactSection, FeaturesSection, FooterSection, PortfolioSection, ServicesSection, TeamSection, TopSection } from "../common";

const HomePage = () => {
  return (
    <React.Fragment>
      <AppNavbar />
      <TopSection />
      <Container sx={{pt: 2}} component="main" maxWidth="xl">
        <TeamSection />
        <ServicesSection />
        <PortfolioSection />
        <FeaturesSection />
        <ContactSection />
      </Container>
      <FooterSection />
    </React.Fragment>
  );
};


export default HomePage;
