import { Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { Slider } from "../components/Slider";
import { selectBestFoodInfo } from "../store/features/getFoods/getFoodsSlice";

export const Home = () => {
  const { /*qty,*/ status, error } = useSelector(selectBestFoodInfo);
  const bestFood = useSelector((state) => state.bestFood.list);

  return (
    <>
      {status === "rejected" && <Typography>{error.message}</Typography>}
      {status === "loading" && <Typography>Loading...</Typography>}
      {status === "received" && (
        <>
          <Typography variant="h3" align="center" sx={{ m: "20px" }}>
            Our best dishes
          </Typography>
          <Slider items={bestFood} />
        </>
      )}
    </>
  );
};
