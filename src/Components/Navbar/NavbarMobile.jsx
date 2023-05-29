import { Box, Flex, Spacer, Text } from "@chakra-ui/react";
import BurgerMenuButton from "./BurgerMenu";

const NavbarMobile = () => {
  return (
    <Box
      px={{ base: "4", md: "16" }}
      pos="fixed"
      w="100%"
      zIndex="999"
      bg="color.2"
      color="white"
      top="0"
      left="0"
    >
      <Flex h="50px" py="8" pos="sticky" alignItems="center">
        <Flex
          direction="row"
          color="white"
          fontWeight="bold"
          gap="2"
          fontSize="24"
        >
          <Text>Luis</Text>
          <Text color="color.1">Flores</Text>
        </Flex>
        <Spacer />
        <BurgerMenuButton />
      </Flex>
    </Box>
  );
};

export default NavbarMobile;
