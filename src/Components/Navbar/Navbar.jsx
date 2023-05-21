import { Flex, HStack, Link, Spacer, Text } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex h="50px" p="8">
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
        <Link>Home</Link>
        <Link>Techologies</Link>
        <Link>Projects</Link>
        <Link>Contact</Link>
      </HStack>
    </Flex>
  );
};

export default Navbar;
