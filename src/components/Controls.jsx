import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loadFood } from "../store/features/getFoods/getFoodsSlice";
import {
  changeSearch,
  setRules,
} from "../store/features/sortingRules/rulesSlice";
import debounce from "lodash.debounce";

export const Controls = () => {
  const [sortValue, setSortValue] = useState("");
  const [categories, setCategories] = useState("");

  const dispatch = useDispatch();

  const handleSortChange = (event) => {
    setSortValue(event.target.value);
    dispatch(setRules(event.target.value));
  };

  const handleCategoriesChange = (event) => {
    setCategories(event.target.value);
    dispatch(loadFood(event.target.value));
  };

  const searchChangeHelper = debounce((event) => {
    dispatch(changeSearch(event.target.value));
  }, 500);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
      <TextField
        fullWidth
        placeholder="Search"
        onChange={searchChangeHelper}
        sx={{ maxWidth: "280px", minWidth: "280px", m: "15px" }}
      />

      <FormControl
        fullWidth
        sx={{ maxWidth: "280px", minWidth: "280px", m: "15px" }}
      >
        <InputLabel>Categories</InputLabel>
        <Select
          value={categories}
          onChange={handleCategoriesChange}
          label="Categories"
        >
          <MenuItem value={"BEST_FOOD"}>Best dishes</MenuItem>
          <MenuItem value={"BURGERS"}>Burgers</MenuItem>
          <MenuItem value={"PIZZAS"}>Pizza</MenuItem>
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{ maxWidth: "280px", minWidth: "280px", m: "15px" }}
      >
        <InputLabel>Sort by:</InputLabel>
        <Select value={sortValue} onChange={handleSortChange} label="Sort by:">
          <MenuItem value={"low"}>Price: Low to Hight</MenuItem>
          <MenuItem value={"hight"}>Price: Hight to Low</MenuItem>
          <MenuItem value={"review"}>Avg. Customer Review</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
