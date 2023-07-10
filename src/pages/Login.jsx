import { TextField, Box, Button, Typography } from "@mui/material";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser, userInfo } from "../store/features/user/userSlice";
import { useForm } from "react-hook-form";

import GoogleIcon from "@mui/icons-material/Google";

const testUser = {
  email: "test@test.test",
  password: "testtest",
};

export const Login = ({ isSignUp = false }) => {
  const {
    register,
    handleSubmit,

    formState: { errors, isValid },
  } = useForm({
    mode: "onBlur",
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [authError, setAuthError] = useState(null);
  const { isAuth } = useSelector(userInfo);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);

  const dispatch = useDispatch();

  const loginHelper = (data) => {
    const { email, password } = data;

    const auth = getAuth();

    if (isSignUp === false) {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
            })
          );
          navigate("/profile");
        })
        .catch((err) => {
          setAuthError(err.message);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
            })
          );
          navigate("/profile");
        })
        .catch((err) => {
          setAuthError(err.message);
        });
    }
  };

  const googleAuth = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log("click");
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
        onSubmit={handleSubmit(loginHelper)}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "50%",
          margin: "25px",
        }}
      >
        {authError && <Typography>{authError}</Typography>}

        <TextField
          sx={{ m: "15px" }}
          type="email"
          fullWidth
          placeholder="email"
          helperText={errors?.email ? errors.email.message : ""}
          error={errors?.email ? true : false}
          {...register("email", {
            required: "Enter your email",
            pattern: {
              value: /^[\w-.-]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "Enter valid email",
            },
          })}
        />
        <TextField
          sx={{ m: "15px" }}
          type="password"
          fullWidth
          placeholder="password"
          helperText={errors?.password ? errors.password.message : ""}
          error={errors?.password ? true : false}
          {...register("password", {
            required: "Enter your Password",
            minLength: {
              value: 5,
              message: "Input at least five (5) characters",
            },
          })}
        />

        <Button variant="outlined" type="submit" disabled={!isValid}>
          {isSignUp ? "Sign Up" : "Login"}
        </Button>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <Typography>Or you can Login with</Typography>
        <GoogleIcon
          onClick={googleAuth}
          fontSize="large"
          sx={{ color: "#0F9D58", cursor: "pointer" }}
        />
      </Box>

      {isSignUp ? (
        <Typography>
          Already have an account?
          <Link to="/login" style={{ textDecoration: "none" }}>
            Login
          </Link>
        </Typography>
      ) : (
        <Typography>
          Don't have an account?
          <Link to="/signup" style={{ textDecoration: "none" }}>
            Sign Up
          </Link>
        </Typography>
      )}

      <Typography sx={{ mt: "50px" }}>
        Test User: {JSON.stringify(testUser)}
      </Typography>
    </Box>
  );
};
