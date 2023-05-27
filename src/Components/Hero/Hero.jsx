import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";

import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import pic from "../../assets/Pic.jpg";

function Hero() {
  return (
    <Flex minH="100vh" px="16" gap="8">
      <Flex w="50%" color="white" alignItems="center">
        <Flex direction="column" gap="5">
          <HStack fontSize="32">
            <Text>Hello,</Text>
            <Text color="color.1">{"I'm"} </Text>
          </HStack>
          <Text color="color.1" fontWeight="bold" fontSize="56">
            Luis Flores
          </Text>
          <Text fontSize="32">Front-end Developer</Text>
          <Text color="gray.400" fontSize="20">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore
            esse laborum vitae ut ipsa, eius dicta! Quas ipsam doloribus
            adipisci perspiciatis sequi expedita molestias, dolorem mollitia
            cupiditate iusto animi hic!
          </Text>
          <Button mt="8" colorScheme="green" w="25%">
            {"Let's talk"}
          </Button>
          <HStack boxSize="8" mt="16">
            <Image src={github} cursor="pointer" />
            <Image src={linkedin} cursor="pointer" />
            <Image src={twitter} cursor="pointer" />
            <Image src={instagram} cursor="pointer" />
          </HStack>
        </Flex>
      </Flex>
      <Flex w="50%" bg="red" justifyContent="center" alignItems="center">
        <Box direction="column" gap="5">
          <Image src={pic} rounded="full" />
        </Box>
      </Flex>
    </Flex>
  );
}

export default Hero;
