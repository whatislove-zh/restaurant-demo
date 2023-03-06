import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../store/features/shopingCart/shopingCartSlice";

export const FoodCard = (props) => {
  const { name, img, dsc, price } = props.item;

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addProduct(props.item));
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
