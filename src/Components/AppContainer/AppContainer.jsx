import { Box } from "@chakra-ui/react";

const AppContainer = ({
  children,
  bg = "color.1",
  justifyContent = "",
  alignItems = "",
}) => {
  return (
    <Box
      minHeight="100vh"
      bg={bg}
      justifyContent={justifyContent}
      alignItems={alignItems}
    >
      {children}
    </Box>
  );
};

export default AppContainer;
