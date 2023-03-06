import { Paper, Box, Avatar, Typography } from "@mui/material";

const headImg = "https://source.unsplash.com/random";

export const Profile = () => {
  return (
    <>
      <Paper
        sx={{
          height: 350,
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(${headImg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          color: "#ffffff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "280px",
          }}
        >
          <Avatar sx={{ width: "100px", height: "100px" }} src="userAvatar" />
          <Typography variant="h6">userName</Typography>
          <Typography variant="body2" sx={{ fontSize: "12px", m: "15px" }}>
            userSummary
          </Typography>
        </Box>
      </Paper>
    </>
  );
};
