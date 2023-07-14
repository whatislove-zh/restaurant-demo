import {
  AppBar,
  Box,
  IconButton,
  Typography,
  Toolbar,
  useMediaQuery,
  Container,
  SwipeableDrawer,
} from "@mui/material";

import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import MenuIcon from "@mui/icons-material/Menu";
import BurgerMenu from "./BurgerMenu";
import { useState } from "react";

export const Header = () => {
  const mobileWidth = useMediaQuery("(max-width:769px)");
  const [asideOpen, setAsideOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setAsideOpen(open);
  };

  return (
    <header style={{ transition: "all 0.5s ease" }}>
      
      <Container>
        <AppBar position="static" sx={{ background: "none", mb: "30px" }}>
          <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Link to="/">
                <IconButton sx={{ padding: "10px" }}>
                  <Typography>Logo</Typography>
                </IconButton>
              </Link>
            </Box>
            {mobileWidth ? (
              <MenuIcon
                onClick={toggleDrawer(true)}
                fontSize="large"
                sx={{ color: "black", cursor: "pointer" }}
              />
            ) : (
              <Navigation />
            )}
          </Toolbar>
        </AppBar>
      </Container>
      <>
        <SwipeableDrawer
          anchor={"right"}
          open={asideOpen}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <BurgerMenu closeMenu={toggleDrawer} />
        </SwipeableDrawer>
      </>
    </header>
  );
};
