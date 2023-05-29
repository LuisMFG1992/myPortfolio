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
  Link,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AiFillCloseCircle } from "react-icons/ai";
import { AiOutlineMenu } from "react-icons/ai";

import { menuLinks } from "./menuLinks";

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
            <VStack h="100%" justifyContent="space-evenly">
              <Link fontSize="30">{menuLinks.home}</Link>
              <Link fontSize="30">{menuLinks.aboutMe}</Link>
              <Link fontSize="30">{menuLinks.techologies}</Link>
              <Link fontSize="30">{menuLinks.projects}</Link>
              <Link fontSize="30">{menuLinks.contact}</Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default BurgerMenuButton;
