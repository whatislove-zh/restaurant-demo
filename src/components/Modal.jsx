import { Box, Typography } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setModal } from "../store/features/modalShow/modalSlice";

export const Modal = () => {
  const dispatch = useDispatch();
  const display = useSelector((state) => state.modal.display);
  return (
    <Box
      onClick={() => {
        dispatch(setModal("none"));
      }}
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        minHeight: "100vh",
        background:
          "linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6))",
        display: display,
        alignItems: "center",
        justifyContent: "center",
        zIndex: "1000",
      }}
    >
      <Box
        sx={{
          background: "#30343f",
          width: "280px",
          
          borderRadius: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent:"center",
          position: "relative",
        }}
      >
        <Typography sx={{color:"white", px:"20px", my:"50px"}}>
          Чтобы добавить товар в корзину, Вам нужно{" "}
          <Link to="/signup" style={{ textDecoration: "none", color:"rgb(62, 62, 255)"}}>
            Sign Up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};
