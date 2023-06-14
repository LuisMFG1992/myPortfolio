import React from "react";

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Icon,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

import { menuLinks } from "./menuLinks";
import { Link } from "react-router-dom";

const BurgerMenuButton = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box>
      <Button ref={btnRef} colorScheme="green" onClick={onOpen} boxSize={8}>
        <Icon as={AiOutlineMenu} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton>
            <Icon as={AiFillCloseCircle} color="color.1" boxSize={6} />
          </DrawerCloseButton>
          <DrawerBody bg="color.3" color="white" pt="16">
            <VStack h="100%" justifyContent="space-evenly" fontSize="30">
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
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default BurgerMenuButton;
