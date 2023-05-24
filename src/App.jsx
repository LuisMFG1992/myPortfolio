import "./App.css";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
