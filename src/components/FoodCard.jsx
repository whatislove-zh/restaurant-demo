import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/features/modalShow/modalSlice";
import { addProduct } from "../store/features/shopingCart/shopingCartSlice";
import { userInfo } from "../store/features/user/userSlice";

export const FoodCard = (props) => {
  const { name, img, dsc, price } = props.item;

  const { isAuth } = useSelector(userInfo);

  const dispatch = useDispatch();

  const addToCart = () => {
    if (isAuth) {
      dispatch(addProduct(props.item));
    } else {
      dispatch(setModal("flex"));
    }
  };

  return (
    <Grid item>
      <Card sx={{ width: "270px", m: "10px" }}>
        <CardMedia
          component="img"
          alt={name}
          width="270px"
          height="200px"
          image={img}
          sx={{ cursor: "pointer" }}
        />
        <CardContent sx={{ position: "relative" }}>
          <Typography variant="h6" sx={{ my: "10px" }}>
            {name}
          </Typography>
          <Typography variant="body2">{dsc}</Typography>
          <Typography sx={{ color: "green", my: "5px" }} variant="body2">
            Its only {price} for one portion
          </Typography>
          <Button
            sx={{ position: "absolute", right: "0", bottom: "20px" }}
            onClick={addToCart}
          >
            Buy
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};
