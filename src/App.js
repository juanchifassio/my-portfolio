import { Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import MainPage from "./app/pages/MainPage";
import Navbar from "./app/components/Navbar";
import Footer from "./app/components/Footer";

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
