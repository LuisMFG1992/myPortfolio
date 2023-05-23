import { Box, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import "animate.css";

const Projects = () => {
  return (
    <VStack justifyContent="center">
      <Heading color="color.1" textAlign="center" mb="10">
        Projects
      </Heading>
      <SimpleGrid
        spacing={10}
        minChildWidth="300px"
        p="100"
        w="100%"
        justifyItems="center"
        alignItems="center"
      >
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
        <Box w="200px" h="200px" bg="color.3" rounded="2xl"></Box>
      </SimpleGrid>
    </VStack>
  );
};

export default Projects;
