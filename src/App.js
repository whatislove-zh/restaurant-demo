import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  loadFood,
  selectBestFoodInfo,
} from "./store/features/getFoods/getFoodsSlice";

import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Products } from "./pages/Products";
import { ShopingCart } from "./pages/ShopingCart";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";

function App() {
  const { status } = useSelector(selectBestFoodInfo);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadFood("BEST_FOOD"));
    }
  }, [status, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="shoping-cart" element={<ShopingCart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
