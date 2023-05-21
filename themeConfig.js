3; // 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    color: {
      1: "#0DC788",
      2: "#0B131E",
      3: "#202B3B",
      4: "#080E15",
    },
  },
});

export default theme;
