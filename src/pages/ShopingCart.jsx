import { Typography, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopingCartCard } from "../components/ShopingCartCard";
import { useNavigate } from "react-router-dom";
import { userInfo } from "../store/features/user/userSlice";
import { clearCart } from "../store/features/shopingCart/shopingCartSlice";

export const ShopingCart = () => {
  const { isAuth } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    }
  }, [isAuth, navigate]);

  const dispatch = useDispatch()

  const shopingCart = useSelector((state) => state.shopingCart.cartList);
  return (
    <>
      {shopingCart.length === 0 ? (
        <Typography variant="h3" align="center">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {shopingCart.map((item) => (
            <ShopingCartCard key={item.id} item={item} />
          ))}
          <Box sx={{display:"flex", justifyContent:"flex-end", my:"30px"}} >
            <Typography variant="h5">
              Total{" "}
              {shopingCart.reduce((acc, currentItem) => {
                return acc + Number(currentItem.price);
              }, 0)} $
            </Typography>
            <Button variant="outlined" sx={{mx:'20px'}} onClick={() => {dispatch(clearCart())}}>Buy</Button>
          </Box>
        </>
      )}
    </>
  );
};
