import { Box, Flex, HStack, Spacer, Text } from "@chakra-ui/react";
import { menuLinks } from "./menuLinks";

import { Link } from "react-router-dom";

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
          {/* <Link color="color.1" fontWeight="bold">
            {menuLinks.home}
          </Link> */}
          {/* <Link>{menuLinks.aboutMe}</Link>
          <Link>{menuLinks.techologies}</Link>
          <Link>{menuLinks.projects}</Link>
          <Link>{menuLinks.contact}</Link> */}

          <Link to={"/"}>
            <Text color="color.1" fontWeight="bold">
              {menuLinks.home}
            </Text>
          </Link>
          <Link to={"/about"}>
            <Text fontWeight="bold">{menuLinks.aboutMe}</Text>
          </Link>
          <Link to={"/projects"}>
            <Text fontWeight="bold">{menuLinks.projects}</Text>
          </Link>
          <Link to={"/contact"}>
            <Text fontWeight="bold">{menuLinks.contact}</Text>
          </Link>
        </HStack>
      </Flex>
    </Box>
  );
};

export default NavbarDesktop;
