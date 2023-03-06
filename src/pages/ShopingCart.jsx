import { Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { ShopingCartCard } from "../components/ShopingCartCard";

export const ShopingCart = () => {
  const shopingCart = useSelector((state) => state.shopingCart.cartList);

  return (
    <>
      {shopingCart.length === 0 ? (
        <Typography variant="h3" align="center">Your cart is empty</Typography>
      ) : (
        shopingCart.map((item) => <ShopingCartCard key={item.id} item={item} />)
      )}
    </>
  );
};
