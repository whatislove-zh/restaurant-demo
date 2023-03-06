import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { ShopingCartCard } from "../components/ShopingCartCard";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../store/features/user/userSlice";

export const ShopingCart = () => {
  const { isAuth } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    }
  }, [isAuth, navigate]);

  const shopingCart = useSelector((state) => state.shopingCart.cartList);
  return (
    <>
      {shopingCart.length === 0 ? (
        <Typography variant="h3" align="center">
          Your cart is empty
        </Typography>
      ) : (
        shopingCart.map((item) => <ShopingCartCard key={item.id} item={item} />)
      )}
    </>
  );
};
