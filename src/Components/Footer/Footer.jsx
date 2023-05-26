import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
  return (
    <HStack w="100%" color="white" bg="color.2" justifyContent="space-evenly">
      <Text textAlign="center" py="4">
        Copyright © 2023. All rights reserved.
      </Text>
      <Flex gap="4" boxSize="8">
        <Image src={github} cursor="pointer" />
        <Image src={linkedin} cursor="pointer" />
        <Image src={twitter} cursor="pointer" />
        <Image src={instagram} cursor="pointer" />
      </Flex>
    </HStack>
  );
};

export default Footer;
