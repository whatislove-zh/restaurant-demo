import { TextField, Box, Button, Typography } from "@mui/material";
import { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/features/user/userSlice";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailHendler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHendler = (e) => {
    setPassword(e.target.value);
  };

  const signupHandler = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(
          setUser({
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

        <Button onClick={signupHandler} variant="outlined" type="submit">
          Sign Up
        </Button>
      </Box>
      <Typography>
        Already have an account?
        <Link to="/login" style={{ textDecoration: "none" }}>
          Login
        </Link>
      </Typography>
    </Box>
  );
};
