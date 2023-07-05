import {
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useDispatch } from "react-redux";
import { removeItem } from "../store/features/shopingCart/shopingCartSlice";

export const ShoppingCartCard = (props) => {
  const { name, price, img, dsc, id } = props.item;

  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(removeItem(id));
  };

  return (
    <>
      <Card sx={{ display: "flex", my: "20px" }}>
        <CardMedia
          component="img"
          alt={name}
          height="150px"
          image={img}
          sx={{ cursor: "pointer", maxWidth: "280px" }}
        />
        <CardContent
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="body2">{dsc}</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <IconButton onClick={removeFromCart}>
              <DeleteIcon fontSize="large" sx={{ m: "10px", color: "black" }} />
            </IconButton>
            <Typography sx={{ color: "green" }} variant="h6">
              Price is {price} $
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};
