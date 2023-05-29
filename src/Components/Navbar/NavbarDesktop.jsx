import { Box, Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";

const NavbarDesktop = () => {
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
      <Flex h="50px" py="8" pos="sticky">
        <Flex
          direction="row"
          color="white"
          fontWeight="bold"
          gap="2"
          alignItems="center"
          fontSize="24"
        >
          <Text>Luis</Text>
          <Text color="color.1">Flores</Text>
        </Flex>
        <Spacer />
        <HStack color="white" spacing="8">
          <Link color="color.1" fontWeight="bold">
            Home
          </Link>
          <Link>About me</Link>
          <Link>Techologies</Link>
          <Link>Projects</Link>
          <Link>Contact</Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavbarDesktop;
