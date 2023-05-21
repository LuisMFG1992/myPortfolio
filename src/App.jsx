import { Box } from "@chakra-ui/react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

function App() {
  return (
    <Box h="100vh" bg="color.2" direction="column">
      <Navbar />
      <Hero />
    </Box>
  );
}

export default App;
