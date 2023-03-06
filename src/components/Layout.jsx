import { Container, Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Modal } from "./Modal";

export const Layout = () => {
  return (
    <>
    <Modal />
      <Container>
        <Header />
        <Box sx={{ minHeight: "75vh" }}>
          <Outlet />
        </Box>
        <Footer />
      </Container>
    </>
  );
};
