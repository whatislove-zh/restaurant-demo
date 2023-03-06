import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Box sx={{minHeight:"75vh"}}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};
