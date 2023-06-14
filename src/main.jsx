import ReactDOM from "react-dom/client";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../themeConfig.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import About from "./Routes/About.jsx";
import Projects from "./Routes/Projects.jsx";
import Contact from "./Routes/Contact.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/technologies",
    element: <h1>Technologies</h1>,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
