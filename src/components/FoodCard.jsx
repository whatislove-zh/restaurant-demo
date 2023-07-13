import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Alert,
  Snackbar,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setModal } from "../store/features/modalShow/modalSlice";
import { addProduct } from "../store/features/shopingCart/shopingCartSlice";
import { userInfo } from "../store/features/user/userSlice";

export const FoodCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const { name, img, dsc, price } = item;

  const { isAuth } = useSelector(userInfo);

  const dispatch = useDispatch();

  const addToCart = () => {
    if (isAuth) {
      dispatch(addProduct(item));
      setOpen(true);
    } else {
      dispatch(setModal("flex"));
    }
  };

  const handleClose = (reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
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
      <Snackbar
        open={open}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        autoHideDuration={3000}
        onClose={handleClose}
        message="Success"
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Success! {name} is added to cart =)
        </Alert>
      </Snackbar>
    </>
  );
};
