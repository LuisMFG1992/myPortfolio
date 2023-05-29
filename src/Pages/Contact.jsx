import AppContainer from "../Components/AppContainer/AppContainer";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  SimpleGrid,
  Heading,
  Button,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <AppContainer bg="color.3" justifyContent="center" alignItems="center">
      <Flex
        id="#1"
        justifyContent="center"
        alignItems="center"
        h="100vh"
        direction="column"
      >
        <Heading color="color.1" textAlign="center" p="8">
          Contact me
        </Heading>
        <FormControl w="50%" color="white">
          <Box pb="4">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </Box>

          <SimpleGrid
            columns={2}
            minChildWidth="150px"
            justifyContent="center"
            alignItems="center"
            spacing="4"
            pb="4"
          >
            <Box>
              <FormLabel>Phone</FormLabel>
              <Input type="" />
            </Box>
            <Box>
              <FormLabel>Email</FormLabel>
              <Input type="text" />
            </Box>
          </SimpleGrid>

          <Box pb="8">
            <FormLabel>Your message</FormLabel>
            <Input type="text" minH="150px" />
          </Box>
          <Button w="100%" colorScheme="green">
            Send
          </Button>
        </FormControl>
      </Flex>
    </AppContainer>
  );
};

export default Contact;
