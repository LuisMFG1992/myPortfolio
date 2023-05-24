import { Box, Button, Flex, HStack, Text } from "@chakra-ui/react";
import AppContainer from "../Components/AppContainer/AppContainer";

const About = () => {
  return (
    <AppContainer bg="color.3">
      <Flex w="100%" h="100vh" px="16">
        <Flex
          w="50%"
          h="100%"
          // bg="blue.100"
          justifyContent="center"
          alignItems="center"
        >
          <Box direction="column" gap="5" boxSize="400px"></Box>
        </Flex>
        <Flex
          w="50%"
          h="100%"
          color="white"
          alignItems="center"
          flexWrap="wrap"
          pl="8"
        >
          <Flex direction="column">
            <Text color="gray.400" fontSize="16">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio et
            </Text>
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
            <HStack>
              <Button colorScheme="green" w="25%">
                View works
              </Button>
              <Button colorScheme="green" variant="outline" w="25%">
                Download CV
              </Button>
            </HStack>
          </Flex>
        </Flex>
      </Flex>
    </AppContainer>
  );
};

export default About;
