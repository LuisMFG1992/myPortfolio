import { Box, Heading, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import "animate.css";
import AppContainer from "../Components/AppContainer/AppContainer";

const Projects = () => {
  return (
    <AppContainer bg="color.2">
      <VStack justifyContent="center" px="16" py="24">
        <Heading color="color.1" textAlign="center" mb="8">
          Projects
        </Heading>
        <Text color="white" textAlign="center">
          The power to create is in your hands. Code that transforms ideas into
          reality.
        </Text>
        <SimpleGrid
          spacing={15}
          minChildWidth={{ base: "150px", md: "200px" }}
          pt="8"
          w="100%"
          justifyItems="center"
          alignItems="center"
        >
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
          <Box
            w={{ base: "150px", md: "200px" }}
            h={{ base: "150px", md: "200px" }}
            bg="color.3"
            rounded="2xl"
          ></Box>
        </SimpleGrid>
      </VStack>
    </AppContainer>
  );
};

export default Projects;
