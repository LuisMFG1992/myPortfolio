import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
