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
import { ShoppingCart } from "./pages/ShopingCart";
import { Login } from "./pages/Login";
import { NotFound } from "./pages/NotFound";
import { Profile } from "./pages/Profile";

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase";
import { userInfo } from "./store/features/user/userSlice";

function App() {
  const { status } = useSelector(selectBestFoodInfo);
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.shoppingCart.cartList);
  const { email } = useSelector(userInfo);

  useEffect(() => {
    if (status === "idle") {
      dispatch(loadFood("BEST_FOOD"));
    }
  }, [status, dispatch]);

  useEffect(() => {
    (async () => {
      try {
        const collectionRef = doc(db, email || "email", "shoppingCart");
        await setDoc(collectionRef, { shoppingCart });
      } catch (err) {
        console.log(err);
      }
    })();
  }, [shoppingCart, email]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="shopping-cart" element={<ShoppingCart />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Login isSignUp={true} />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
