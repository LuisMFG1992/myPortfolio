import AppContainer from "../Components/AppContainer/AppContainer";

import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Flex,
  SimpleGrid,
  Heading,
} from "@chakra-ui/react";

const Contact = () => {
  return (
    <AppContainer bg="color.3" justifyContent="center" alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        h="100vh"
        direction="column"
      >
        <Heading color="color.1" textAlign="center" p="8">
          Contact me
        </Heading>
        <FormControl w="50%" color="white">
          <Box pb="8">
            <FormLabel>Name</FormLabel>
            <Input type="text" />
          </Box>

          <SimpleGrid
            columns={2}
            minChildWidth="150px"
            justifyContent="center"
            alignItems="center"
            spacing="8"
            pb="8"
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

          <Box>
            <FormLabel>Your message</FormLabel>
            <Input type="text" minH="150px" />
          </Box>
        </FormControl>
      </Flex>
    </AppContainer>
  );
};

export default Contact;
