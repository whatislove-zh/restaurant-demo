import { Box, Button } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

export default function BurgerMenu({closeMenu}) {
  const position = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "50px",
  };

  const cartIconColor = { color: "white" };
 
  return (
    <Box
      sx={{
        display: "flex",
        background: "#001C30",
        width: "320px",
        height: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      <Navigation position={position} cartIconColor={cartIconColor} />
      <Button variant="outlined" onClick={closeMenu(false)} >
        Close menu
      </Button>
    </Box>
  );
}
