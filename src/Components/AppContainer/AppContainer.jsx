import { Box } from "@chakra-ui/react";

const AppContainer = ({ children }) => {
  return (
    <Box minHeight="100vh" bg="color.2" direction="column" px="16">
      {children}
    </Box>
  );
};

export default AppContainer;
