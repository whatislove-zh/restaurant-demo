import { TextField, Box, Button, Typography } from "@mui/material";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser, userInfo } from "../store/features/user/userSlice";

export const Login = () => {
  const { isAuth } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const emailHendler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHendler = (e) => {
    setPassword(e.target.value);
  };
  const loginHelper = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        localStorage.setItem(
          "user",
          JSON.stringify({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate("/profile");
      })
      .catch(console.error);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "75vh",
      }}
    >
      <Box
        component="form"
        onSubmit={loginHelper}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          margin: "25px",
        }}
      >
        <TextField
          sx={{ m: "15px" }}
          type="email"
          fullWidth
          placeholder="email"
          value={email}
          onChange={emailHendler}
        />
        <TextField
          sx={{ m: "15px" }}
          type="password"
          fullWidth
          placeholder="password"
          value={password}
          onChange={passwordHendler}
        />

        <Button variant="outlined" type="submit">
          Login
        </Button>
      </Box>
      <Typography>
        Don't have an account?
        <Link to="/signup" style={{ textDecoration: "none" }}>
          Sign Up
        </Link>
      </Typography>
    </Box>
  );
};
