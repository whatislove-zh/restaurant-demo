import {
  AppBar,
  Box,
  IconButton,
  Button,
  Typography,
  Toolbar,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export const Header = () => {
  return (
    <AppBar position="static" sx={{ background: "none", mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <IconButton size="large" edge="start" sx={{ color: "#000000" }}>
            <MenuRoundedIcon sx={{ fontSize: "25px" }} />
          </IconButton>
          <IconButton sx={{ padding: 0 }}>
            <Typography>Logo</Typography>
          </IconButton>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Link
            to="shoping-cart"
            style={{ textDecoration: "none", padding: "5px" }}
          >
            <ShoppingCartIcon sx={{ color: "black", mx: "10px" }} />
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button>Home</Button>
          </Link>
          <Link to="products" style={{ textDecoration: "none" }}>
            <Button>Products</Button>
          </Link>
          <Link to="signup" style={{ textDecoration: "none" }}>
            <Button>Sign up</Button>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
