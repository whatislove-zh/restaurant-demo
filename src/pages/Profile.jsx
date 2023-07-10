import { Paper, Box, Avatar, Typography, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeUser, userInfo } from "../store/features/user/userSlice";
import { getAuth, signOut } from "firebase/auth";

const headImg = "https://source.unsplash.com/random";

export const Profile = () => {
  const { isAuth, email } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (!isAuth) {
      navigate("/signup");
    }
  }, [isAuth, navigate]);

  const dispatch = useDispatch();

  const logoutHandler = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        console.log("An error happened.");
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          height: 350,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${headImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
          }}
        >
          <Avatar sx={{ width: "100px", height: "100px" }} src="userAvatar" />
          <Typography variant="h6">{email}</Typography>
        </Box>
      </Paper>
      <Button
        sx={{ mx: "auto", my: "30px" }}
        variant="outlined"
        onClick={logoutHandler}
      >
        Logout
      </Button>
    </Box>
  );
};
