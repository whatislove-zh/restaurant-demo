import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { userInfo } from "../store/features/user/userSlice";

export default function Navigation({
  position = { display: "flex", alignItems: "center" },
  cartIconColor = { color: "black", mx: "10px" },
}) {
  const { isAuth } = useSelector(userInfo);

  return (
    <>
      <Box sx={position}>
        <Link
          to="shopping-cart"
          style={{ textDecoration: "none", padding: "5px" }}
        >
          <ShoppingCartIcon sx={cartIconColor} />
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
    </>
  );
}
