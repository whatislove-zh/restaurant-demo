import { Grid, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import { Controls } from "../components/Controls";
import { FoodCard } from "../components/FoodCard";
import {
  selectBestFoodInfo,
  sortFood,
} from "../store/features/getFoods/getFoodsSlice";
import Loading from "../components/Loading";

export const Products = () => {
  const search = useSelector((state) => state.controls.search);
  const sortRules = useSelector((state) => state.controls.rules);
  const bestFood = useSelector((state) =>
    sortFood(state, { sortRules, search })
  );
  const { status, error } = useSelector(selectBestFoodInfo);

  return (
    <>
      <Controls />
      {status === "rejected" && <Typography>{error.message}</Typography>}
      {status === "loading" && <Loading />}
      {status === "received" && (
        <>
          <Grid container justifyContent="space-around">
            {bestFood.map((food) => (
              <FoodCard key={food.id} item={food} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
