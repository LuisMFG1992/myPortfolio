import "./App.css";
import Home from "./Pages/Home";
import AppContainer from "./Components/AppContainer/AppContainer";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Pages/Projects";
import About from "./Pages/About";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Home />
      <About />
      <Projects />;
    </AppContainer>
  );
}

export default App;
