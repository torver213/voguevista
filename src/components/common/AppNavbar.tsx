"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { CardMedia, Typography, useColorScheme, useScrollTrigger } from "@mui/material";
import { ToggleThemeButton } from "./ToggleThemeButton";
import Link from "next/link";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children?: React.ReactElement<{ elevation?: number }>;
}

function ElevationScroll(props: Props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

const drawerWidth = 240;
const navItems = [
  {
    title: "Home",
    url: "/"
  },
  {
    title: "About Us",
    url: "#team"
  },
  {
    title: "Services",
    url: "#services"
  },
  {
    title: "Portfolio",
    url: "#portfolio"
  },
  {
    title: "Models",
    url: "#features"
  },
  {
    title: "Contact Us",
    url: "#contact"
  }
  
];

export default function DrawerAppBar(props: Props) {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const { mode, setMode } = useColorScheme();

  const [activeSection, setActiveSection] = React.useState<string>("/");

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
      .map(item => (item.url.startsWith("#") ? document.querySelector(item.url) : null))
      .filter(Boolean) as HTMLElement[];
      const options = { threshold: 0.1 };
      let activeId = activeSection;
      const observer = new IntersectionObserver(
        (entries) => {
           
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              activeId = `#${entry.target.id}`;
            }            
          });
          if (window.scrollY <= 220) {
            activeId = "/"; // Set Home active only when at the top
          }
          console.log("window.scrollY = ", window.scrollY)
          setActiveSection(activeId);
        },
        options
      );
      sections.forEach((section) => {
        if (section) observer.observe(section);
      });

      return () => {
        sections.forEach((section) => {
          if (section) observer.unobserve(section);
        });
      };
    };

    handleScroll();
  }, []);
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ my: 2 }}>
        <Link href={"/"}>
        <CardMedia
          sx={{ width: "100%", cursor: "pointer" }}
          component="img"
          height="100%"
          image={mode === "light" ? "/black_logo.svg" : "/white_logo.svg"}
          alt="logo"
        />
        </Link>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton 
              LinkComponent={Link}
              href={item.url} 
              sx={[(theme) => ({ 
                ...((item.url === activeSection) ? { 
                  borderBottom: `2px solid ${theme.vars.palette.common.white}` } : {}) 
              })]}>
              <ListItemText primary={<Typography sx={{fontFamily: "cursive"}}>{item.title}</Typography>} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window?.scrollY > 50); // Change when scrolling past 50px
    };

    window?.addEventListener("scroll", handleScroll);
    return () => window?.removeEventListener("scroll", handleScroll);
  }, []);

  // const { window } = props;

  const container =
    window !== undefined ? () => window?.document.body : undefined;

  return (
    <Box>
      <ElevationScroll {...props}>
        <AppBar
          sx={{
            backgroundColor: isScrolled ? "primary.main" : "transparent",
            boxShadow: isScrolled ? 2 : "none",
            transition: "0.3s ease-in-out",
            
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            <Link href={"/"}>
              <CardMedia
                sx={{ width: 300, cursor: "pointer"}}
                component="img"
                height="100%"
                image="/white_logo.svg"
                alt="logo"
              />
              </Link>
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button
                  size="large"
                  key={item.title}
                  color="inherit"
                  disableRipple
                  disableFocusRipple
                  disableTouchRipple
                  sx={[(theme) => ({ 
                    fontFamily: "cursive",
                    fontWeight: 800, 
                    fontSize: "1.2rem",
                    borderRadius: 0,
                    ...((item.url === activeSection) ? { 
                      // color: theme.vars.palette.warning.light, 
                      borderBottom: `2px solid ${theme.vars.palette.common.white}` } : {}) 
                  })]}
                  LinkComponent={Link}
                  href={item.url}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <ToggleThemeButton />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
