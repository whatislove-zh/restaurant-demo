import styled from "@emotion/styled";
import { Grid, Button, Box } from "@mui/material";
import { useState } from "react";

import { FoodCard } from "./FoodCard";

const ControlsButton = styled(Button)({
  position: "absolute",
  top: "40%",
  background: "rgba(0, 0, 0, 0.5)",
  "&:hover": { background: "rgba(0, 0, 0, 0.7)" },
  zIndex: "1000",
  color: "white",
});

export const Slider = (props) => {
  const [offset, setOffset] = useState(0);

  const bestFood = props.items;

  const nextSlide = () => {
    const maxOffset = (bestFood.length - 4) * 290;
    if (offset >= maxOffset) {
      setOffset(maxOffset);
    } else {
      setOffset((prev) => prev + 290);
    }
  };
  const prevSlide = () => {
    if (offset <= 0) {
      setOffset(0);
    } else {
      setOffset((prev) => prev - 290);
    }
  };

  return (
    <>
      <Box sx={{ position: "relative", overflowX: "hidden" }}>
        <ControlsButton onClick={prevSlide}>Prev</ControlsButton>
        <Grid
          container
          wrap="nowrap"
          sx={{
            transition: "all 0.5s ease",
            transform: `translateX(-${offset}px)`,
          }}
        >
          {bestFood.map((foodItem) => (
            <FoodCard key={foodItem.id} item={foodItem} />
          ))}
        </Grid>
        <ControlsButton sx={{ right: 0, top: 0 }} onClick={nextSlide}>
          Next
        </ControlsButton>
      </Box>
    </>
  );
};
