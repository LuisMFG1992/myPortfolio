import { Button, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";

import AppContainer from "../Components/AppContainer/AppContainer";
import AboutMe from "../assets/AboutMe.jpg";

const About = () => {
  return (
    <AppContainer bg="color.3">
      <Flex w="100%" minH="100vh" px="16" gap="4">
        <Image
          w="50%"
          objectFit="contain"
          src={AboutMe}
          display={{ base: "none", md: "flex" }}
        />
        <Flex
          w={{ base: "100%", md: "50%" }}
          color="white"
          alignItems="center"
          justifyContent="center"
          px="8"
          my="8"
        >
          <Flex direction="column">
            <Text color="color.1" fontWeight="bold" fontSize="48" pb="8">
              About me
            </Text>
            <Text fontSize="24" pb="2">
              A story of hardwork and perseverance
            </Text>
            <Text color="gray.400" fontSize="16" pb="8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              commodi saepe excepturi hic! Iusto temporibus at obcaecati, quam
              enim blanditiis quas? Voluptatum dignissimos molestiae ipsam ipsum
              incidunt est a exercitationem!
            </Text>
            <Text fontSize="24" pb="2">
              Contact
            </Text>
            <Text color="gray.400" fontSize="16" pb="8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              commodi saepe excepturi hic! Iusto temporibus at obcaecati, quam
              enim blanditiis quas? Voluptatum dignissimos molestiae ipsam ipsum
              incidunt est a exercitationem!
            </Text>
            <Grid templateColumns="repeat(2, 1fr)" gap="8" textAlign="center">
              <GridItem colSpan={{ base: 2, sm: 1 }}>
                <Button colorScheme="green" minW="150px">
                  View works
                </Button>
              </GridItem>
              <GridItem colSpan={{ base: 2, sm: 1 }}>
                <Button colorScheme="green" variant="outline" minW="150px">
                  Download CV
                </Button>
              </GridItem>
            </Grid>
          </Flex>
        </Flex>
      </Flex>
    </AppContainer>
  );
};

export default About;
