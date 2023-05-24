import { Box } from "@chakra-ui/react";

const AppContainer = ({ children, bg = "color.1" }) => {
  return (
    <Box minHeight="100vh" bg={bg} direction="column">
      {children}
    </Box>
  );
};

export default AppContainer;
