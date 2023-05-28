import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";

import github from "../../assets/github.svg";
import instagram from "../../assets/instagram.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import pic from "../../assets/Pic.jpg";

function Hero() {
  return (
    <Grid
      templateColumns="repeat(2, 1fr)"
      px="16"
      minH="100vh"
      justifyItems="center"
      alignItems="center"
      gap="8"
    >
      <GridItem
        colSpan={{ base: 2, md: 1 }}
        color="white"
        alignItems="center"
        textAlign={{ base: "center", md: "start" }}
      >
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
          <Box>
            <Button mt="4" colorScheme="green" w="25%" minW="100px">
              {"Let's talk"}
            </Button>
          </Box>
          <HStack mt="8" justifyContent={{ base: "center", md: "start" }}>
            <Image boxSize="8" src={github} cursor="pointer" />
            <Image boxSize="8" src={linkedin} cursor="pointer" />
            <Image boxSize="8" src={twitter} cursor="pointer" />
            <Image boxSize="8" src={instagram} cursor="pointer" />
          </HStack>
        </Flex>
      </GridItem>
      <GridItem colSpan={{ base: 2, md: 1 }}>
        <Image src={pic} rounded="3xl" />
      </GridItem>
    </Grid>
  );
}

export default Hero;
