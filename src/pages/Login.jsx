import {
  TextField,
  Box,
  Button,
  Typography,
  useMediaQuery,
} from "@mui/material";
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
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import { addProduct } from "../store/features/shopingCart/shopingCartSlice";

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

  const { isAuth } = useSelector(userInfo);
  const navigate = useNavigate();
  useEffect(() => {
    if (isAuth) {
      navigate("/profile");
    }
  }, [isAuth, navigate]);
  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const mobileWidth = useMediaQuery("(max-width:769px)");
  const formWidth = mobileWidth ? "100%" : "50%";
  const [authError, setAuthError] = useState(null);
  const dispatch = useDispatch();

  const loginHelper = (data) => {
    const { email, password } = data;
    const auth = getAuth();

    if (isSignUp === false) {
      signInWithEmailAndPassword(auth, email, password)
        .then(({ user }) => {
          getCartInfo(user.email);
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
          getCartInfo(user.email);
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
        getCartInfo(user.email);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getCartInfo = async (email) => {
    const collectionRef = doc(db, email, "shoppingCart");
    const docSnap = await getDoc(collectionRef);

    if (docSnap.exists()) {
      console.log("Login 105: Document data:", docSnap.data());
      const data = docSnap.data();
      data.shoppingCart.forEach((element) => {
        dispatch(addProduct(element));
      });
    } else {
      console.log("No such document!");
    }
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
          width: formWidth,
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

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent:"center",
          gap: "20px",
          mb:"20px"
        }}
      >
        <Typography>Or</Typography>
        <Button variant="outlined" onClick={googleAuth}>
          Login with
          <GoogleIcon
            fontSize="large"
            sx={{ color: "#0F9D58", ml:"15px" }}
          />
        </Button>
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

      <Box sx={{ mt: "50px", padding: "20px", display: "flex", gap: "20px" }}>
        <Typography>Test User:</Typography>
        <Box>
          <Typography>Login: {testUser.email}</Typography>
          <Typography>Password: {testUser.password}</Typography>
        </Box>
      </Box>
    </Box>
  );
};
