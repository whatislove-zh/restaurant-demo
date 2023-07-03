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
      {status === "loading" && (
        <>
          <Typography width="320px" align="center" margin="auto">
            The first download may take longer than usual, due to the fact that
            the database is on a free server that shuts down if there are no
            requests for a long time and it needs time to start
          </Typography>

          <Typography>Loading...</Typography>
        </>
      )}
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
