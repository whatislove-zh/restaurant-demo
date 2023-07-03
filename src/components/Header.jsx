import {
  AppBar,
  Box,
  IconButton,
  Button,
  Typography,
  Toolbar,
} from "@mui/material";

import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { userInfo } from "../store/features/user/userSlice";

export const Header = () => {
  const { isAuth } = useSelector(userInfo);

  return (
    <AppBar position="static" sx={{ background: "none", mb: "30px" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Link to="/">
            <IconButton sx={{ padding: "10px" }}>
              <Typography>Logo</Typography>
            </IconButton>
          </Link>
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
          <Link to="/products" style={{ textDecoration: "none" }}>
            <Button>Products</Button>
          </Link>
          {isAuth ? (
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button>Profile</Button>
            </Link>
          ) : (
            <Link to="/signup" style={{ textDecoration: "none" }}>
              <Button>Sign Up</Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};
