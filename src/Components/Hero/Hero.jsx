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
    <Flex minH="100vh" gap="4" alignItems="center" justifyContent="center">
      <Grid
        templateColumns="repeat(2, 1fr)"
        px={{ base: "4", md: "16" }}
        minH="100vh"
        justifyItems="center"
        alignItems="center"
        gap="8"
        color="white"
        mt="50px"
      >
        <GridItem
          colSpan={{ base: 2, lg: 1 }}
          justifyItems="center"
          alignItems="center"
          textAlign={{ base: "center", lg: "start" }}
          maxW="800px"
          p="8"
        >
          <Flex
            direction="column"
            gap="5"
            justifyItems="center"
            alignItems={{ base: "center", lg: "start" }}
          >
            <HStack fontSize="32">
              <Text>Hello,</Text>
              <Text color="color.1">{"I'm"} </Text>
            </HStack>
            <Text color="color.1" fontWeight="bold" fontSize="56">
              Luis Flores
            </Text>
            <Text fontSize="32">Front-end Developer</Text>
            <Text color="gray.400" fontSize="20">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Inventore esse laborum vitae ut ipsa, eius dicta! Quas ipsam
            </Text>
            <Box>
              <Button mt="4" colorScheme="green" w="25%" minW="100px">
                {"Let's talk"}
              </Button>
            </Box>
            <HStack mt="8" justifyContent={{ base: "center", lg: "start" }}>
              <Image boxSize="8" src={github} cursor="pointer" />
              <Image boxSize="8" src={linkedin} cursor="pointer" />
              <Image boxSize="8" src={twitter} cursor="pointer" />
              <Image boxSize="8" src={instagram} cursor="pointer" />
            </HStack>
          </Flex>
        </GridItem>
        <GridItem colSpan={{ base: 2, lg: 1 }}>
          <Image
            src={pic}
            rounded="3xl"
            p="8"
            maxWidth={{ base: "", md: "450px", xl: "700px" }}
            objectFit="contain"
          />
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default Hero;
