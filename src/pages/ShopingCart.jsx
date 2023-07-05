import { Typography, Box, Button, Backdrop } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShopingCartCard } from "../components/ShopingCartCard";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../store/features/user/userSlice";
import { clearCart } from "../store/features/shopingCart/shopingCartSlice";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";

export const ShopingCart = () => {
  const [open, setOpen] = useState(false);
  const [documentData, setDocumentData] = useState({});
  const [shoppingCart, setShoppingCart] = useState([]);
  const { email } = useSelector(userInfo);

  const handleClose = () => {
    setOpen(false);
  };
  const acceptPurchase = () => {
    setOpen(true);

    dispatch(clearCart());
  };

  const { isAuth } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    }
  }, [isAuth, navigate]);

  const dispatch = useDispatch();

  const getData = async () => {
    const docRef = doc(db, email, "shoppingCart");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      setDocumentData(docSnap.data());
      console.log("Document data:", docSnap.data());
    } else {
      setDocumentData([]);
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setShoppingCart(documentData.shoppingCart);
  }, [documentData]);

  console.log(shoppingCart);

  return (
    <>
      {shoppingCart?.length === 0 || shoppingCart === undefined ? (
        <Typography variant="h3" align="center">
          Your cart is empty
        </Typography>
      ) : (
        <>
          {shoppingCart.map((item) => (
            <ShopingCartCard key={item.id} item={item} />
          ))}
          <Box sx={{ display: "flex", justifyContent: "flex-end", my: "30px" }}>
            <Typography variant="h5">
              Total{" "}
              {shoppingCart.reduce((acc, currentItem) => {
                return acc + Number(currentItem.price);
              }, 0)}{" "}
              $
            </Typography>
            <Button
              variant="outlined"
              sx={{ mx: "20px" }}
              onClick={acceptPurchase}
            >
              Buy
            </Button>
          </Box>
        </>
      )}

      <Backdrop
        sx={{
          color: "#fff",
          flexDirection: "column",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={open}
        onClick={handleClose}
      >
        <Typography variant="h3" sx={{ mb: "50px" }}>
          You have successfully completed your purchase!{" "}
        </Typography>
        <Typography variant="h3">
          Click <Link to="/products">here</Link> to continue shopping{" "}
        </Typography>
      </Backdrop>
    </>
  );
};
