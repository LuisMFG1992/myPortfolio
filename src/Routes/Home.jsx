import AppContainer from "../Components/AppContainer/AppContainer";
import Footer from "../Components/Footer/Footer";
import Hero from "../Components/Hero/Hero";
import Navbar from "../Components/Navbar/Navbar";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";

const Home = () => {
  return (
    <AppContainer bg="color.2">
      <Hero />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </AppContainer>
  );
};

export default Home;
