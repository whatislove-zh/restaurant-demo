import * as React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { Typography } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ width: "100%" }}>
      <Typography width="320px" align="center" margin="auto">
        The first download may take longer than usual, due to the fact that the
        database is on a free server that shuts down if there are no requests
        for a long time and it needs time to start
      </Typography>
      <LinearProgress />
    </Box>
  );
}
