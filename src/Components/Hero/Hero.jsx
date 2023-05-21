import { Box, Button, Flex, HStack, Image, Text } from "@chakra-ui/react";
import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import pic from "../../assets/Pic.jpg";

function Hero() {
  return (
    <Flex w="100%" h="400px" mt="8">
      <Box w="50%" h="100%" color="white" bg="blue">
        <HStack fontSize="24">
          <Text>Hello,</Text>
          <Text color="color.1">{"I'm"} </Text>
        </HStack>
        <Text color="color.1" fontWeight="bold" fontSize="32">
          Luis Flores
        </Text>
        <Text fontSize="24">Front-end Developer</Text>
        <Text color="gray.400">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio et
        </Text>
        <Button colorScheme="green">{"Let's talk"}</Button>
        <HStack boxSize="8">
          <Image src={github} />
          <Image src={linkedin} />
          <Image src={twitter} />
          <Image src={instagram} />
        </HStack>
      </Box>
      <Box w="50%" h="100%" bg="red" boxSize="300px">
        <Image src={pic} rounded="full" />
      </Box>
    </Flex>
  );
}

export default Hero;
