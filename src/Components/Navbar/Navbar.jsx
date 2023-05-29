import NavbarDesktop from "./NavbarDesktop";
import useWindowResize from "../../Hooks/useWindowResize";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => {
  const { width } = useWindowResize();

  const isMobile = width < 768 ? true : false;

  return <>{isMobile ? <NavbarMobile /> : <NavbarDesktop />}</>;
  //   return <NavbarDesktop />;
};

export default Navbar;
